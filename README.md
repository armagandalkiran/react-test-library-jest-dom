# PURPOSE

TO LEARN HOW REACT TEST WORKS.
ALL THE TESTS ARE INSIDE APP.TEST.JS FILE


# WHAT I LEARN

What is exactly react testing library and jest are.

# REACT TESTING LIBRARY
- Provides virtual DOM for tests.

# JEST
- Test runner that
  * Finds tests
  * Runs tests
  * Determines whether tests pass or fail. (expect)
  
# What is TDD ? 
Write tests before writing code.Then write code to pass the test.

write shell function -> write tests -> tests fail -> write code -> tests pass

# But why to use TDD method ?
- Make a huge difference in how it feels to write tests.
- More efficient. Re-run tests "for free" after changes.

# REACT TESTING LIBRARY PHILOSOPHY
- Creates virtual DOM and provides utilities for interacting DOM.
- Allows testing without a browser.

# TYPES OF TESTS

-UNIT TESTS

* Tests one unit of code in isolation.

-INTEGRATION TESTS

* How multiple units work together.

-FUNCTIONAL TESTS

* Tests a particular function of software.

-ACCEPTANCE / END-TO-END TESTS

* Use actual browser and server. (Cypress, Selenium)

# FUNCTIONAL TESTING VS UNIT TESTING

      #UNIT TESTING                  #FUNCTIONAL TESTING

- isolated: mock dependencies,      -----include all relevant units,test behavior
test internals.                      

* Very easy to pinpoint failures.   -----Close to how users interact with software
 
! Further from how users interact with software. -----Robuse tests. (hard to break) 
! More likely to break with refactoring. ----- More difficult to debug failing tests.



# WHY TDD INSTEAD OF BDD

Because BDD is very explicitly defined.
Involves collaboration between lots of roles.
Defines process for different group to interact.

#USEFUL LINKS

https://testing-library.com/docs/guide-which-query/

npm -> package/jest-transform-css
       package/jest-css-modules-transform
       
github.com/testing-library/eslint-plugin-testing-library
github.com/testing-library/eslint-plugin-jest-dom

