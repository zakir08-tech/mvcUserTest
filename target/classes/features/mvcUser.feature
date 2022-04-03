Feature: MVC user to-do list

  Scenario Outline: add to do list and verify
    Given to do list "<url>" is open
    And to do list text box is present on the screen
    Then add task "<task>" to the list
    Then verify task "<task>" added to the list or not
     
    Examples:
    |url|task|
    |https://todomvc.com/examples/vue/|attend team meeting at 8 am|
    |https://todomvc.com/examples/vue/|attend stake holders meeting at 10 am|
    |https://todomvc.com/examples/vue/|lunch with stake holders at 12:30 pm|
    
	Scenario Outline: mark the task completed and verify
   	Then mark the task "<task>" as completed
   	Then verify task "<task>" marked completed or not
     
    Examples:
    |task|
    |attend team meeting at 8 am|
    
    Scenario Outline: verify completed task must be visible under completed and must not be available under active tasks
   	Then open Completed list
   	Then verify task "<task>" visible under completed list
   	Then open Active list
   	Then verify task "<task>" not visible under active list
     
    Examples:
    |task|
    |attend team meeting at 8 am|
    