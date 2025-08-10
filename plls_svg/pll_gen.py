def tr(num):
    return num == 0 and "888888" or \
           num == 1 and "ffc107" or \
           num == 2 and "dee2e6" or \
           num == 3 and "dc3545" or \
           num == 4 and "fd7e14" or \
           num == 5 and "0d6efd" or \
           num == 6 and "198754"

"""
    0 - black
    1 - yellow
    2 - white
    3 - red
    4 - orange
    5 - blue
    6 - green

    kinda not pll gen but top face of rubiks cube gen
"""


def gen(topside, top, middle, bottom, bottomside):
    return f"""
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="75" height="75">
    <!-- Borders -->
    <rect width="58" height="58" x="8.3" y="8.3" fill="#000000"></rect>
    
    <!-- Top Left -->
    <rect width="13.1" height="13.1" x="9.3" y="9.3" rx="0" ry="0" fill="#{tr(top[1])}"></rect>
    <rect width="13.1" height="13.1" x="9.3" y="13.6" rx="0" ry="0" fill="#{tr(top[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="9.3" rx="0" ry="0" fill="#{tr(top[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="13.6" rx="1" ry="1" fill="#{tr(top[1])}"></rect>
    
    <!-- Middle Left -->
    <rect width="13.1" height="13.1" x="9.3" y="28.75" rx="0" ry="0" fill="#{tr(middle[1])}"></rect>
    <rect width="13.1" height="13.1" x="9.3" y="33.1" rx="0" ry="0" fill="#{tr(middle[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="28.75" rx="4.3" ry="4.3" fill="#{tr(middle[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="33.1" rx="4.3" ry="4.3" fill="#{tr(middle[1])}"></rect>
    
    <!-- Down Left -->
    <rect width="13.1" height="13.1" x="9.3" y="48.1" rx="0" ry="0" fill="#{tr(bottom[1])}"></rect>
    <rect width="13.1" height="13.1" x="9.3" y="52.5" rx="0" ry="0" fill="#{tr(bottom[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="48.1" rx="4.3" ry="4.3" fill="#{tr(bottom[1])}"></rect>
    <rect width="13.1" height="13.1" x="13.6" y="52.5" rx="0" ry="0" fill="#{tr(bottom[1])}"></rect>
    
    <!-- Top Middle -->
    <rect width="13.1" height="13.1" x="28.75" y="9.3" rx="0" ry="0" fill="#{tr(top[2])}"></rect>
    <rect width="13.1" height="13.1" x="28.75" y="13.6" rx="4.3" ry="4.3" fill="#{tr(top[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="9.3" rx="0" ry="0" fill="#{tr(top[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="13.6" rx="4.3" ry="4.3" fill="#{tr(top[2])}"></rect>
    
    <!-- Center -->
    <rect width="13.1" height="13.1" x="28.75" y="28.75" rx="4.3" ry="4.3" fill="#{tr(middle[2])}"></rect>
    <rect width="13.1" height="13.1" x="28.75" y="33.1" rx="4.3" ry="4.3" fill="#{tr(middle[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="28.75" rx="4.3" ry="4.3" fill="#{tr(middle[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="33.1" rx="4.3" ry="4.3" fill="#{tr(middle[2])}"></rect>
    
    <!-- Down middle -->
    <rect width="13.1" height="13.1" x="28.75" y="48.1" rx="4.3" ry="4.3" fill="#{tr(bottom[2])}"></rect>
    <rect width="13.1" height="13.1" x="28.75" y="52.5" rx="0" ry="0" fill="#{tr(bottom[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="48.1" rx="4.3" ry="4.3" fill="#{tr(bottom[2])}"></rect>
    <rect width="13.1" height="13.1" x="33.1" y="52.5" rx="0" ry="0" fill="#{tr(bottom[2])}"></rect>
    
    <!-- Top right -->
    <rect width="13.1" height="13.1" x="48.1" y="9.3" rx="0" ry="0" fill="#{tr(top[3])}"></rect>
    <rect width="13.1" height="13.1" x="48.1" y="13.6" rx="1" ry="1" fill="#{tr(top[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="9.3" rx="1" ry="1" fill="#{tr(top[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="13.6" rx="0" ry="0" fill="#{tr(top[3])}"></rect>
    
    <!-- Middle right -->
    <rect width="13.1" height="13.1" x="48.1" y="28.75" rx="4.3" ry="4.3" fill="#{tr(middle[3])}"></rect>
    <rect width="13.1" height="13.1" x="48.1" y="33.1" rx="4.3" ry="4.3" fill="#{tr(middle[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="28.75" rx="1" ry="1" fill="#{tr(middle[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="33.1" rx="0" ry="0" fill="#{tr(middle[3])}"></rect>
    
    <!-- Down right -->
    <rect width="13.1" height="13.1" x="48.1" y="48.1" rx="1" ry="1" fill="#{tr(bottom[3])}"></rect>
    <rect width="13.1" height="13.1" x="48.1" y="52.5" rx="0" ry="0" fill="#{tr(bottom[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="48.1" rx="1" ry="1" fill="#{tr(bottom[3])}"></rect>
    <rect width="13.1" height="13.1" x="52.5" y="52.5" rx="0" ry="0" fill="#{tr(bottom[3])}"></rect>
    
    <!-- Border -->
    <rect width="58" height="8.3" x="8.3" y="0" fill="#000000"></rect>
    <rect width="58" height="8.3" x="8.3" y="66.6" fill="#000000"></rect>
    <rect width="8.3" height="58" x="0" y="8.3" fill="#000000"></rect>
    <rect width="8.3" height="58" x="66" y="8.3" fill="#000000"></rect>

    <!-- Sides -->  

    <!-- right part side cube -->
    <rect width="6.3" height="17.5" x="67.6" y="9.3" rx="1" ry="1" fill="#{tr(top[4])}"></rect>
    <rect width="6.3" height="17.5" x="67.6" y="28.75" rx="1" ry="1" fill="#{tr(middle[4])}"></rect>
    <rect width="6.3" height="17.5" x="67.6" y="48.1" rx="1" ry="1" fill="#{tr(bottom[4])}"></rect>
    
    <!-- top part side cube -->
    <rect width="17.5" height="6.3" x="9.3" y="0.9" rx="1" ry="1" fill="#{tr(topside[0])}"></rect>
    <rect width="17.5" height="6.3" x="28.75" y="0.9" rx="1" ry="1" fill="#{tr(topside[1])}"></rect>
    <rect width="17.5" height="6.3" x="48.1" y="0.9" rx="1" ry="1" fill="#{tr(topside[2])}"></rect>
    
    <!-- bottom part side cube -->
    <rect width="17.5" height="6.3" x="9.3" y="67.6" rx="1" ry="1" fill="#{tr(bottomside[0])}"></rect>
    <rect width="17.5" height="6.3" x="28.75" y="67.6" rx="1" ry="1" fill="#{tr(bottomside[1])}"></rect>
    <rect width="17.5" height="6.3" x="48.1" y="67.6" rx="1" ry="1" fill="#{tr(bottomside[2])}"></rect>
    
    <!-- left part side cube -->
    <rect width="6.3" height="17.5" x="0.9" y="9.3" rx="1" ry="1" fill="#{tr(top[0])}"></rect>
    <rect width="6.3" height="17.5" x="0.9" y="28.75" rx="1" ry="1" fill="#{tr(middle[0])}"></rect>
    <rect width="6.3" height="17.5" x="0.9" y="48.1" rx="1" ry="1" fill="#{tr(bottom[0])}"></rect>
</svg>
"""

    

eee = gen(
    [     6, 3, 3     ],
    [4,   1, 1, 1,   5],
    [3,   1, 1, 1,   5],
    [4,   1, 1, 1,   6],
    [     5, 6, 3     ]
)

"""
    [     0, 0, 0     ],
    [0,   1, 1, 1,   0],
    [0,   1, 1, 1,   0],
    [0,   1, 1, 1,   0],
    [     0, 0, 0     ]
"""

"""
    0 - black
    1 - yellow
    2 - white
    3 - red
    4 - orange
    5 - blue
    6 - green

    kinda not pll gen but top face of rubiks cube gen
"""
import os
with open("output.svg", "w") as ee:
    ee.write("")
os.remove("output.svg")
with open("output.svg", "w") as ee:
    ee.write(eee)