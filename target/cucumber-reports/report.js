$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/mvcUser.feature");
formatter.feature({
  "line": 1,
  "name": "MVC user to-do list",
  "description": "",
  "id": "mvc-user-to-do-list",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "add to do list and verify",
  "description": "",
  "id": "mvc-user-to-do-list;add-to-do-list-and-verify",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "to do list \"\u003curl\u003e\" is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to do list text box is present on the screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "add task \"\u003ctask\u003e\" to the list",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify task \"\u003ctask\u003e\" added to the list or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "mvc-user-to-do-list;add-to-do-list-and-verify;",
  "rows": [
    {
      "cells": [
        "url",
        "task"
      ],
      "line": 10,
      "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;1"
    },
    {
      "cells": [
        "https://todomvc.com/examples/vue/",
        "attend team meeting at 8 am"
      ],
      "line": 11,
      "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;2"
    },
    {
      "cells": [
        "https://todomvc.com/examples/vue/",
        "attend stake holders meeting at 10 am"
      ],
      "line": 12,
      "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;3"
    },
    {
      "cells": [
        "https://todomvc.com/examples/vue/",
        "lunch with stake holders at 12:30 pm"
      ],
      "line": 13,
      "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "add to do list and verify",
  "description": "",
  "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "to do list \"https://todomvc.com/examples/vue/\" is open",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to do list text box is present on the screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "add task \"attend team meeting at 8 am\" to the list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify task \"attend team meeting at 8 am\" added to the list or not",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://todomvc.com/examples/vue/",
      "offset": 12
    }
  ],
  "location": "glueCode.to_do_list_is_open(String)"
});
formatter.result({
  "duration": 261146200,
  "status": "passed"
});
formatter.match({
  "location": "glueCode.to_do_list_text_box_is_present_on_the_screen()"
});
formatter.result({
  "duration": 103681000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 10
    }
  ],
  "location": "glueCode.add_task_to_the_list(String)"
});
formatter.result({
  "duration": 5897485000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_added_to_the_list_or_not(String)"
});
formatter.result({
  "duration": 11834100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "add to do list and verify",
  "description": "",
  "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "to do list \"https://todomvc.com/examples/vue/\" is open",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to do list text box is present on the screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "add task \"attend stake holders meeting at 10 am\" to the list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify task \"attend stake holders meeting at 10 am\" added to the list or not",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://todomvc.com/examples/vue/",
      "offset": 12
    }
  ],
  "location": "glueCode.to_do_list_is_open(String)"
});
formatter.result({
  "duration": 36072700,
  "status": "passed"
});
formatter.match({
  "location": "glueCode.to_do_list_text_box_is_present_on_the_screen()"
});
formatter.result({
  "duration": 35379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend stake holders meeting at 10 am",
      "offset": 10
    }
  ],
  "location": "glueCode.add_task_to_the_list(String)"
});
formatter.result({
  "duration": 185670800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend stake holders meeting at 10 am",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_added_to_the_list_or_not(String)"
});
formatter.result({
  "duration": 12733100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "add to do list and verify",
  "description": "",
  "id": "mvc-user-to-do-list;add-to-do-list-and-verify;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "to do list \"https://todomvc.com/examples/vue/\" is open",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to do list text box is present on the screen",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "add task \"lunch with stake holders at 12:30 pm\" to the list",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify task \"lunch with stake holders at 12:30 pm\" added to the list or not",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://todomvc.com/examples/vue/",
      "offset": 12
    }
  ],
  "location": "glueCode.to_do_list_is_open(String)"
});
formatter.result({
  "duration": 4388000,
  "status": "passed"
});
formatter.match({
  "location": "glueCode.to_do_list_text_box_is_present_on_the_screen()"
});
formatter.result({
  "duration": 23256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lunch with stake holders at 12:30 pm",
      "offset": 10
    }
  ],
  "location": "glueCode.add_task_to_the_list(String)"
});
formatter.result({
  "duration": 83151600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lunch with stake holders at 12:30 pm",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_added_to_the_list_or_not(String)"
});
formatter.result({
  "duration": 13680400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "mark the task completed and verify",
  "description": "",
  "id": "mvc-user-to-do-list;mark-the-task-completed-and-verify",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "mark the task \"\u003ctask\u003e\" as completed",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify task \"\u003ctask\u003e\" marked completed or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "mvc-user-to-do-list;mark-the-task-completed-and-verify;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 20,
      "id": "mvc-user-to-do-list;mark-the-task-completed-and-verify;;1"
    },
    {
      "cells": [
        "attend team meeting at 8 am"
      ],
      "line": 21,
      "id": "mvc-user-to-do-list;mark-the-task-completed-and-verify;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "mark the task completed and verify",
  "description": "",
  "id": "mvc-user-to-do-list;mark-the-task-completed-and-verify;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "mark the task \"attend team meeting at 8 am\" as completed",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify task \"attend team meeting at 8 am\" marked completed or not",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 15
    }
  ],
  "location": "glueCode.mark_the_task_as_completed(String)"
});
formatter.result({
  "duration": 51401200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_marked_completed_or_not(String)"
});
formatter.result({
  "duration": 25484600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "verify completed task must be visible under completed and must not be available under active tasks",
  "description": "",
  "id": "mvc-user-to-do-list;verify-completed-task-must-be-visible-under-completed-and-must-not-be-available-under-active-tasks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "open Completed list",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify task \"\u003ctask\u003e\" visible under completed list",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "open Active list",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify task \"\u003ctask\u003e\" not visible under active list",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "mvc-user-to-do-list;verify-completed-task-must-be-visible-under-completed-and-must-not-be-available-under-active-tasks;",
  "rows": [
    {
      "cells": [
        "task"
      ],
      "line": 30,
      "id": "mvc-user-to-do-list;verify-completed-task-must-be-visible-under-completed-and-must-not-be-available-under-active-tasks;;1"
    },
    {
      "cells": [
        "attend team meeting at 8 am"
      ],
      "line": 31,
      "id": "mvc-user-to-do-list;verify-completed-task-must-be-visible-under-completed-and-must-not-be-available-under-active-tasks;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "verify completed task must be visible under completed and must not be available under active tasks",
  "description": "",
  "id": "mvc-user-to-do-list;verify-completed-task-must-be-visible-under-completed-and-must-not-be-available-under-active-tasks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "open Completed list",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "verify task \"attend team meeting at 8 am\" visible under completed list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "open Active list",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify task \"attend team meeting at 8 am\" not visible under active list",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "glueCode.open_Completed_list()"
});
formatter.result({
  "duration": 61380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_visible_under_completed_list(String)"
});
formatter.result({
  "duration": 66114568700,
  "error_message": "java.lang.AssertionError: required task not added to the to do completed list!\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertNotNull(Assert.java:713)\r\n\tat stepDefinition.glueCode.verify_task_visible_under_completed_list(glueCode.java:101)\r\n\tat ✽.Then verify task \"attend team meeting at 8 am\" visible under completed list(src/main/resources/features/mvcUser.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "glueCode.open_Active_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "attend team meeting at 8 am",
      "offset": 13
    }
  ],
  "location": "glueCode.verify_task_not_visible_under_active_list(String)"
});
formatter.result({
  "status": "skipped"
});
});