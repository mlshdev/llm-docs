> Commit-pinned source for n8n main: [docs/integrations/builtin/core-nodes/n8n-nodes-base.form.md](https://github.com/n8n-io/n8n-docs/blob/b732ee99d015bf1b55668862de6e07bbcb573c0c/docs/integrations/builtin/core-nodes/n8n-nodes-base.form.md)

# n8n Form node <a id="n8n-form-node"></a>

Use the n8n Form node to create user-facing forms with multiple steps. You can add other nodes with custom logic between to process user input. You must start the workflow with the [n8n Form Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger).

**Workflow example**

```json
{
  "name": "Form with mutually exclusive branching",
  "nodes": [
    {
      "parameters": {
        "formTitle": "Form with mutually exclusive branching",
        "formDescription": "This form contains branches, but only one branch will ever be executed.",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Would you recommend this site?",
              "fieldType": "dropdown",
              "fieldOptions": {
                "values": [
                  {
                    "option": "Yes"
                  },
                  {
                    "option": "No"
                  }
                ]
              },
              "requiredField": true
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2.2,
      "position": [
        0,
        0
      ],
      "id": "1adce353-28c9-48b8-8326-c1f41d9311fd",
      "name": "On form submission",
      "webhookId": "d869b846-111d-4f53-96e4-2c4a533d9ed6"
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json['Would you recommend this site?'] }}",
                    "rightValue": "Yes",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Yes"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "1dd9b1f5-6f48-4182-ae04-f47c37e3fa98",
                    "leftValue": "={{ $json['Would you recommend this site?'] }}",
                    "rightValue": "No",
                    "operator": {
                      "type": "string",
                      "operation": "equals",
                      "name": "filter.operator.equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "No"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.2,
      "position": [
        220,
        0
      ],
      "id": "c0d3e3f1-76c5-4bac-8382-c3d70a57ee8a",
      "name": "Switch"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What can we do to improve?",
              "fieldType": "textarea"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        440,
        200
      ],
      "id": "615cf27a-658c-43be-aff9-c5fda8a04c51",
      "name": "If not recommended",
      "webhookId": "3579ba77-7ba2-4a97-8a29-a228aac297d5"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for your review!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        660,
        -200
      ],
      "id": "13423b3f-0380-429d-92bf-460cc8b409a3",
      "name": "Thanks for the review",
      "webhookId": "bce3f77b-3005-4989-bd61-b9c5ff19e59e"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for your feedback",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        660,
        200
      ],
      "id": "0848a392-41f2-47e8-be17-124fef3d9a63",
      "name": "Thanks for the feedback",
      "webhookId": "8b1a34e2-aa24-4c12-841c-79f6491cb779"
    },
    {
      "parameters": {
        "content": "## Form with mutually exclusive branching\nThis form contains a branch where only one of the two paths will execute, depending on your selections.",
        "width": 380
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        -160,
        -260
      ],
      "typeVersion": 1,
      "id": "57c5e1cd-7dda-4bfb-8bfa-8c9f91110249",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "content": "This Switch node determines which branch will execute.\n\nThe switch uses data from a dropdown field with single selection enforced, so only one path will execute.",
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        440,
        0
      ],
      "typeVersion": 1,
      "id": "9bde0398-7021-4ec6-b950-d836979c973b",
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "Leave your review below",
              "fieldType": "textarea"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        440,
        -200
      ],
      "id": "9956a49e-964d-4269-910f-28ad8393548e",
      "name": "If recommended",
      "webhookId": "f8298b40-1f61-465b-b228-30a659075f30"
    }
  ],
  "pinData": {},
  "connections": {
    "On form submission": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "If recommended",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "If not recommended",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If not recommended": {
      "main": [
        [
          {
            "node": "Thanks for the feedback",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If recommended": {
      "main": [
        [
          {
            "node": "Thanks for the review",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "6797e22c-1b2b-421a-b16d-869f636d0790",
  "meta": {
    "instanceId": "1f94e052868811125a74dc63385a38f60e7a14ab6e00497af83e8b68412ec251"
  },
  "id": "DCotkGqkv0VfT6QT",
  "tags": []
}
```

## Setting up the node <a id="setting-up-the-node"></a>

### Set default selections with query parameters <a id="set-default-selections-with-query-parameters"></a>

You can set the initial values for fields by using [query parameters](https://en.wikipedia.org/wiki/Query_string#Web_forms) with the initial URL provided by the [n8n Form Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger). Every page in the form receives the same query parameters sent to the n8n Form Trigger node URL.

> **Info**
> **Only for production**
>
> Query parameters are only available when using the form in production mode. n8n won't populate field values from query parameters in testing mode.

When using query parameters, [percent-encode](https://en.wikipedia.org/wiki/Percent-encoding) any field names or values that use special characters. This ensures n8n uses the initial values for the given fields. You can use tools like [URL Encode/Decode](https://www.url-encode-decode.com/) to format your query parameters using percent-encoding.

As an example, imagine you have a form with the following properties:

- Production URL: `https://my-account.n8n.cloud/form/my-form`
- Fields:
  - `name`: `Jane Doe`
  - `email`: `jane.doe@example.com`

With query parameters and percent-encoding, you could use the following URL to set initial field values to the data above:

```
https://my-account.n8n.cloud/form/my-form?email=jane.doe%40example.com&name=Jane%20Doe
```

Here, percent-encoding replaces the at-symbol (`@`) with the string `%40` and the space character (` `) with the string `%20`. This will set the initial value for these fields no matter which page of the form they appear on.

### Displaying custom HTML <a id="displaying-custom-html"></a>

You can display custom HTML on your form by adding a **Custom HTML** field to your form. This provides an **HTML** box where you can insert arbitrary HTML code to display as part of the form page.

You can use the HTML field to enrich your form page by including things like links, images, videos, and more. n8n will render the content with the rest of the form fields in the normal document flow.

Because custom HTML content is read-only, these fields aren't included in the form output data by default. To include the raw HTML content in the node output, provide a name for the data using the **Element Name** field.

The HTML field doesn't support `<script>`, `<style>`, or `<input>` elements.

If you're using the [Form Ending](#form-ending) Page Type, you can fully customize the final page that you send users (including the use of `<script>`, `<style>`, and `<input>` elements) by selecting the **On n8n Form Submission** parameter to **Show Text**.

### Including hidden fields <a id="including-hidden-fields"></a>

It's possible to include fields in a form without displaying them to users. This is useful when you want to pass extra data to the form that doesn't require interactive user input.

To add fields that won't show up on the form, use the **Hidden Field** form element. There, you can define the **Field Name** and optionally provide a default value by filling out the **Field Value**.

When serving the form, you can pass values for hidden fields using [query parameters](#set-default-selections-with-query-parameters).

### Defining the form using JSON <a id="defining-the-form-using-json"></a>

Use **Define Form** > **Using JSON** to define the fields of your form with a [JSON array of objects](https://docs.n8n.io/build/work-with-data/understand-n8ns-data-structure). Each object defines a single field by using a combination of these keys:

- `fieldLabel`: The label that appears above the input field on the rendered form.
- `fieldName`: The field name that is used in the output of the Form node and to reference the field in expressions.
- `fieldType`: Choose from `checkbox`, `date`, `dropdown`, `email`, `file`, `hiddenField`, `html`, `number`, `password`, `radio`, `text`, or `textarea`.
  - Use `date` to include a date picker in the form. Refer to [Date and time with Luxon](https://docs.n8n.io/build/work-with-data/handle-special-data-types/work-with-dates-and-times) for more information on formatting dates.
  - When using `dropdown`, set the choices with `fieldOptions` (reference the example below). By default, the dropdown is single-choice. To make it multiple-choice, set `multiselect` to `true`. As an alternative, you can use `checkbox` or `radio` together with `fieldOptions` too.
  - When using `file`, set `multipleFiles` to `true` to allow users to select more than one file. To define the file types to allow, set `acceptFileTypes` to a string containing a comma-separated list of file extensions (reference the example below).
  - Use `hiddenField` to add a hidden field to your form. Refer to [Including hidden fields](#including-hidden-fields) for more information.
  - Use `html` to display custom HTML on your form. Refer to [Displaying custom HTML](#displaying-custom-html) for more information.
- `placeholder`: Specify placeholder data for the field. You can use this for every `fieldType` except `dropdown`, `checkbox`, `radio`, `date`, and `file`.
- `defaultValue`: Specify a value that will be pre-filled or pre-selected in the form element. You can use this for every `fieldType` except `password`, `html`, `hiddenField` and `file`.
- `requiredField`: Require users to complete this field on the form.

An example JSON that shows the general format required and the keys available:

```javascript
// Use the "requiredField" key on any field to mark it as mandatory
// Use the "placeholder" key to specify placeholder data for all fields
// except 'dropdown', 'checkbox', 'radio', 'date' and 'file'
// Use the "defaultValue" key to pre-fill a form field or pre-select a
// value in 'checkbox', 'radio' or 'dropdown' fields

[
  {
    "fieldLabel": "Date Field",
    "fieldType": "date",
    "formatDate": "mm/dd/yyyy", // how to format received date in n8n
    "requiredField": true
  },
  {
    "fieldLabel": "Dropdown Options",
    "fieldType": "dropdown",
    "fieldOptions": {
      "values": [
        {
          "option": "option 1"
        },
        {
          "option": "option 2"
        }
      ]
    },
    "defaultValue": "option 1",
    "requiredField": true
  },
  {
    "fieldLabel": "Multiselect",
    "fieldType": "dropdown",
    "fieldOptions": {
      "values": [
        {
          "option": "option 1"
        },
        {
          "option": "option 2"
        }
      ]
    },
    "multiselect": true // setting to true allows multi-select
  },
  {
    "fieldLabel": "Email",
    "fieldType": "email",
    "placeholder": "me@mail.com"
  },
  {
    "fieldLabel": "File",
    "fieldType": "file",
    "multipleFiles": true, // setting to true allows multiple files selection
    "acceptFileTypes": ".jpg, .png" // allowed file types
  },
  {
    "fieldLabel": "Number",
    "fieldType": "number"
  },
  {
    "fieldLabel": "Password",
    "fieldType": "password"
  },
  {
    // "fieldType": "text" can be omitted since it's the default type
    "fieldLabel": "Text"
  },
  {
    "fieldLabel": "Textarea",
    "fieldType": "textarea",
    "defaultValue": "Lorem ipsum."
  },
  {
    "fieldType": "html",
    "elementName": "content", // Optional field. It can be used to include the html in the output.
    "html": "<div>Custom element</div>"
  },
  {
    "fieldLabel": "Checkboxes",
    "fieldType": "checkbox",
    "fieldOptions": {
      "values": [
        {
          "option": "option 1"
        },
        {
          "option": "option 2"
        }
      ]
    },
    "defaultValue": ["option 1", "option 2"]
  },
  {
    "fieldLabel": "Radio",
    "fieldType": "radio",
    "fieldOptions": {
      "values": [
        {
          "option": "option 1"
        },
        {
          "option": "option 2"
        }
      ]
    }
  },
  {
    "fieldLabel": "hidden label",
    "fieldType": "hiddenField",
    "fieldValue": "extra form data"
  }
]
```

### Form Ending <a id="form-ending"></a>

Use the **Form Ending** Page Type to end a form and either show a completion page, redirect the user to a URL, or display custom HTML or text. Only one Form Ending page displays per execution, even when n8n executes [multiple branches](#forms-with-branches) that contain Form Ending nodes.

Choose between these options when using **On n8n Form Submission**:

- **Show Completion Screen**: Shows users a final screen to confirm that they submitted the form.
  - Fill in **Completion Title** to set the `h1` title on the form.
  - n8n displays the **Completion Message** as a subtitle below the main `h1` title on the form. Use `\n` or `<br>` to add a line break.
  - Select **Add option** and fill in **Completion Page Title** to set the page's title in the browser tab.
- **Redirect to URL**: Redirect the user to a specified URL when the form completes.
  - Fill in the **URL** field with the page you want to redirect to when users complete the form.
- **Show Text**: Display a final page defined by arbitrary plain text and HTML.
  - Fill in the **Text** field with the HTML or plain text content you wish to show.
- **Return Binary File**: Return a binary file upon completion.
  - Fill in **Completion Title** to set the `h1` title on the form.
  - n8n displays the **Completion Message** as a subtitle below the main `h1` title on the form. Use `\n` or `<br>` to add a line break.
  - Provide the **Input Data Field Name** containing the binary file to return to the user.

### Forms with branches <a id="forms-with-branches"></a>

The n8n Form node executes and displays its associated form page whenever it receives data from a previous node. When building forms with n8n, to avoid confusion, it's important to understand how forms behave when branching occurs.

#### Workflows with mutually exclusive branches <a id="workflows-with-mutually-exclusive-branches"></a>

Form workflows containing mutually exclusive branches work as expected. n8n will execute a single branch according to the submitted data and conditions you outline. As it executes, n8n will display each page in the branch, ending with an n8n Form node with the **Form Ending** page type.

This workflow demonstrates mutually exclusive branching. Each selection can only execute a single branch.

**Workflow example**

```json
{
  "name": "Form with mutually exclusive branching",
  "nodes": [
    {
      "parameters": {
        "formTitle": "Form with mutually exclusive branching",
        "formDescription": "This form contains branches, but only one branch will ever be executed.",
        "formFields": {
          "values": [
            {
              "fieldLabel": "Would you recommend this site?",
              "fieldType": "dropdown",
              "fieldOptions": {
                "values": [
                  {
                    "option": "Yes"
                  },
                  {
                    "option": "No"
                  }
                ]
              },
              "requiredField": true
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2.2,
      "position": [
        0,
        0
      ],
      "id": "1adce353-28c9-48b8-8326-c1f41d9311fd",
      "name": "On form submission",
      "webhookId": "d869b846-111d-4f53-96e4-2c4a533d9ed6"
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json['Would you recommend this site?'] }}",
                    "rightValue": "Yes",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Yes"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "1dd9b1f5-6f48-4182-ae04-f47c37e3fa98",
                    "leftValue": "={{ $json['Would you recommend this site?'] }}",
                    "rightValue": "No",
                    "operator": {
                      "type": "string",
                      "operation": "equals",
                      "name": "filter.operator.equals"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "No"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.2,
      "position": [
        220,
        0
      ],
      "id": "c0d3e3f1-76c5-4bac-8382-c3d70a57ee8a",
      "name": "Switch"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What can we do to improve?",
              "fieldType": "textarea"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        440,
        200
      ],
      "id": "615cf27a-658c-43be-aff9-c5fda8a04c51",
      "name": "If not recommended",
      "webhookId": "3579ba77-7ba2-4a97-8a29-a228aac297d5"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for your review!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        660,
        -200
      ],
      "id": "13423b3f-0380-429d-92bf-460cc8b409a3",
      "name": "Thanks for the review",
      "webhookId": "bce3f77b-3005-4989-bd61-b9c5ff19e59e"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for your feedback",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        660,
        200
      ],
      "id": "0848a392-41f2-47e8-be17-124fef3d9a63",
      "name": "Thanks for the feedback",
      "webhookId": "8b1a34e2-aa24-4c12-841c-79f6491cb779"
    },
    {
      "parameters": {
        "content": "## Form with mutually exclusive branching\nThis form contains a branch where only one of the two paths will execute, depending on your selections.",
        "width": 380
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        -160,
        -260
      ],
      "typeVersion": 1,
      "id": "57c5e1cd-7dda-4bfb-8bfa-8c9f91110249",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "content": "This Switch node determines which branch will execute.\n\nThe switch uses data from a dropdown field with single selection enforced, so only one path will execute.",
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        440,
        0
      ],
      "typeVersion": 1,
      "id": "9bde0398-7021-4ec6-b950-d836979c973b",
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "Leave your review below",
              "fieldType": "textarea"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        440,
        -200
      ],
      "id": "9956a49e-964d-4269-910f-28ad8393548e",
      "name": "If recommended",
      "webhookId": "f8298b40-1f61-465b-b228-30a659075f30"
    }
  ],
  "pinData": {},
  "connections": {
    "On form submission": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "If recommended",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "If not recommended",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If not recommended": {
      "main": [
        [
          {
            "node": "Thanks for the feedback",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If recommended": {
      "main": [
        [
          {
            "node": "Thanks for the review",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "6797e22c-1b2b-421a-b16d-869f636d0790",
  "meta": {
    "instanceId": "1f94e052868811125a74dc63385a38f60e7a14ab6e00497af83e8b68412ec251"
  },
  "id": "DCotkGqkv0VfT6QT",
  "tags": []
}
```

#### Workflows that may execute multiple branches <a id="workflows-that-may-execute-multiple-branches"></a>

Form workflows that send data to multiple branches at the same time require more care. When multiple branches receive data during an execution (for example, from a [switch](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.switch) node), n8n executes each branch that receives data [sequentially](https://docs.n8n.io/build/flow-logic/understand-execution-order). Upon reaching the end of one branch, the execution will move to the next branch with data.

n8n only executes a single **Form Ending** n8n Form node for each execution. When multiple branches of a form workflow receive data, n8n ignores all Form Ending nodes except for the one associated with the final branch.

This workflow may execute more than one branch during an execution. Here, n8n executes all valid branches sequentially. This impacts which n8n Form nodes n8n executes (in particular, which **Form Ending** node displays):

**Workflow example**

```json
{
  "name": "Form that can execute multiple branches",
  "nodes": [
    {
      "parameters": {
        "formTitle": "Form that may execute multiple branches",
        "formDescription": "This form contains multiple branches. Depending on the user's responses, more than one branch may execute sequentially.",
        "formFields": {
          "values": [
            {
              "fieldLabel": "What are your favorite film genres",
              "fieldType": "dropdown",
              "fieldOptions": {
                "values": [
                  {
                    "option": "Documentary"
                  },
                  {
                    "option": "Action"
                  },
                  {
                    "option": "Romance"
                  },
                  {
                    "option": "Comedy"
                  },
                  {
                    "option": "Drama"
                  }
                ]
              },
              "multiselect": true,
              "requiredField": true
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.formTrigger",
      "typeVersion": 2.2,
      "position": [
        -300,
        60
      ],
      "id": "ad3f0e0a-a1e9-4504-8711-508bd29bd745",
      "name": "On form submission",
      "webhookId": "b3e1c86f-ae45-421e-9045-f19873b7a73e"
    },
    {
      "parameters": {
        "rules": {
          "values": [
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "e3d995dd-d555-4e7a-b744-a3434ed602ad",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": "Documentary",
                    "operator": {
                      "type": "array",
                      "operation": "contains",
                      "rightType": "any"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Documentary"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "ae94981b-1273-4830-ac2a-991bb25f41d8",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": "Action",
                    "operator": {
                      "type": "array",
                      "operation": "contains",
                      "rightType": "any"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Action"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "b9545089-4054-484d-9e6c-98f4872e7e9e",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": "Romance",
                    "operator": {
                      "type": "array",
                      "operation": "contains",
                      "rightType": "any"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Romance"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "71ae5a41-0927-40e3-a583-e569bcebfd1f",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": "Comedy",
                    "operator": {
                      "type": "array",
                      "operation": "contains",
                      "rightType": "any"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Comedy"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "5bfe5981-203a-457a-bfaa-36846d7b79a8",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": "Drama",
                    "operator": {
                      "type": "array",
                      "operation": "contains",
                      "rightType": "any"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Drama"
            },
            {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict",
                  "version": 2
                },
                "conditions": [
                  {
                    "id": "adb1bfc5-08fd-4653-abe0-6f12aedda16a",
                    "leftValue": "={{ $json['What are your favorite film genres'] }}",
                    "rightValue": 1,
                    "operator": {
                      "type": "array",
                      "operation": "lengthGt",
                      "rightType": "number"
                    }
                  }
                ],
                "combinator": "and"
              },
              "renameOutput": true,
              "outputKey": "Final page"
            }
          ]
        },
        "options": {
          "allMatchingOutputs": true
        }
      },
      "type": "n8n-nodes-base.switch",
      "typeVersion": 3.2,
      "position": [
        100,
        0
      ],
      "id": "df96da7b-c7dc-43c6-8941-973842603e0c",
      "name": "Switch"
    },
    {
      "parameters": {
        "content": "## Form that may execute multiple branches\nThis form contains branching where more than one path may execute, depending on the user's selections.",
        "width": 380
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        -160,
        -260
      ],
      "typeVersion": 1,
      "id": "c51af5ad-8f6c-4f2a-8974-65c4abc4fcbf",
      "name": "Sticky Note"
    },
    {
      "parameters": {
        "content": "This Switch node determines which branches will execute.\n\nMultiple conditions may be true, resulting in more than one branch being executed. When this happens, n8n executes the first branch completely before returning to execute the next branch.",
        "height": 220,
        "width": 260,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        20,
        320
      ],
      "typeVersion": 1,
      "id": "eab3ff17-5030-4556-a0c7-2571345e8cdf",
      "name": "Sticky Note1"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What is your favorite documentary?"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        -500
      ],
      "id": "dc55c82f-7d4f-4368-8ab5-69a673e92027",
      "name": "Documentary questions",
      "webhookId": "0c72f06e-4cc0-41eb-931c-7bf82bb1927e"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What is your favorite action film?"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        -280
      ],
      "id": "3f76b5df-561b-4159-9e14-33a43d8c45a8",
      "name": "Action questions",
      "webhookId": "bea04786-25cc-477e-aaf1-ab68159cbe28"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our documentary questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        920,
        -500
      ],
      "id": "16660e2e-a047-45d2-ba54-12d573633ece",
      "name": "Documentary thanks",
      "webhookId": "0238f2c2-8984-4adc-aade-308bb458c16e"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our action film questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        920,
        -280
      ],
      "id": "1853276a-3ba6-4315-b772-fbeb0c68a477",
      "name": "Action thanks",
      "webhookId": "2e47b563-bd17-466c-86b7-9237be55d226"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What is your favorite romance film?"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        -20
      ],
      "id": "cd7bc8d0-a143-4733-be84-320c88ef241b",
      "name": "Romance questions",
      "webhookId": "3f77a665-fc03-46ba-a58f-6d9bd7099028"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our romance film questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        920,
        -20
      ],
      "id": "42d7c8b5-f66f-4b34-821c-0df91bbaa9ea",
      "name": "Romance thanks",
      "webhookId": "eee896c5-d116-4586-972d-3fe02073ed11"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What is your favorite comedy film?"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        220
      ],
      "id": "b9422abf-1ad5-44e4-941d-692f72bc2fef",
      "name": "Comedy questions",
      "webhookId": "97b56894-28fb-47d1-b729-754e43f1ac09"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our comedy film questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        920,
        220
      ],
      "id": "1db70bda-0752-41b7-a930-b90f6e64b3e7",
      "name": "Comedy thanks",
      "webhookId": "b021494a-5a35-4ade-b7c0-ca43a309268d"
    },
    {
      "parameters": {
        "formFields": {
          "values": [
            {
              "fieldLabel": "What is your favorite drama film?"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        480
      ],
      "id": "2bef931a-12d2-4873-ad19-9bdb0b5fe78f",
      "name": "Drama questions",
      "webhookId": "8d801d97-1103-42ee-a0c1-c1f1153727d9"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our drama film questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        920,
        480
      ],
      "id": "1fd7fa2f-d1be-430a-bb98-ded89ad8fca0",
      "name": "Drama thanks",
      "webhookId": "46a782bc-21b2-4fcd-9c52-82a7bb20ec2c"
    },
    {
      "parameters": {
        "operation": "completion",
        "completionTitle": "Thank you for answering our film questions!",
        "options": {}
      },
      "type": "n8n-nodes-base.form",
      "typeVersion": 1,
      "position": [
        700,
        720
      ],
      "id": "7b0aeed0-0e13-4fcb-a3e9-c5ff4d6a77ca",
      "name": "Multi-selection thank you",
      "webhookId": "67fcd1f3-e5a6-4bf6-b17e-37b2a87f4c3d"
    },
    {
      "parameters": {
        "content": "n8n Form nodes using the **Form Ending** page type are only executed if they are the last node in the execution path.\n\nThese endings specific to a genre are only executed if this is the only valid branch.",
        "height": 1400,
        "width": 280,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        840,
        -740
      ],
      "typeVersion": 1,
      "id": "7bda913a-d75c-4b20-8be6-a767c008a8f6",
      "name": "Sticky Note2"
    },
    {
      "parameters": {
        "content": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe switch includes this **Form Ending** node whenever more than one branch is executed.\n\nBecause this is the [final branch](https://docs.n8n.io/flow-logic/execution-order/) that will be executed, this is the final display whenever multiple branches are executed.",
        "height": 400,
        "width": 300,
        "color": 5
      },
      "type": "n8n-nodes-base.stickyNote",
      "position": [
        740,
        800
      ],
      "typeVersion": 1,
      "id": "9c3f93a5-5248-4ba1-99b5-9df6d21416c2",
      "name": "Sticky Note3"
    }
  ],
  "pinData": {},
  "connections": {
    "On form submission": {
      "main": [
        [
          {
            "node": "Switch",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Switch": {
      "main": [
        [
          {
            "node": "Documentary questions",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Action questions",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Romance questions",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Comedy questions",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Drama questions",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "Multi-selection thank you",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Documentary questions": {
      "main": [
        [
          {
            "node": "Documentary thanks",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Action questions": {
      "main": [
        [
          {
            "node": "Action thanks",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Romance questions": {
      "main": [
        [
          {
            "node": "Romance thanks",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Comedy questions": {
      "main": [
        [
          {
            "node": "Comedy thanks",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Drama questions": {
      "main": [
        [
          {
            "node": "Drama thanks",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1"
  },
  "versionId": "b1d38757-38ea-4ee8-a352-990185b17e31",
  "meta": {
    "instanceId": "1f94e052868811125a74dc63385a38f60e7a14ab6e00497af83e8b68412ec251"
  },
  "id": "kl3goXzWrfrWHpYv",
  "tags": []
}
```

### Node options <a id="node-options"></a>

Select **Add Option** to view more configuration options:

- **Form Title**: The title for your form. n8n displays the **Form Title** as the webpage title and main `h1` title on the form.
- **Form Description**: The description for your form. n8n displays the **Form Description** as a subtitle below the main `h1` title on the form. This field supports HTML. Use `\n` or `<br>` to add a line break. The Form Description also populates the [HTML meta description](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification) for the page.
- **Button Label**: The label to use for your form's submit button. n8n displays the **Button Label** as the name of the submit button.
- **Custom Form Styling**: Override the default styling of the public form interface with CSS. The field pre-populates with the default styling so you can change only what you need to.
- **Completion Page Title**: The title for the final completion page of the form.

## Running the node <a id="running-the-node"></a>

### Build and test workflows <a id="build-and-test-workflows"></a>

While building or testing a workflow, use the **Test URL** in the [n8n Form Trigger node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger). Using a test URL ensures that you can view the incoming data in the editor UI, which is useful for debugging.

There are two ways to test:

- Select **Execute Step**. n8n opens the form. When you submit the form, n8n runs the node and any previous nodes, but not the rest of the workflow.
- Select **Execute Workflow**. n8n opens the form. When you submit the form, n8n runs the workflow.

### Production workflows <a id="production-workflows"></a>

When your workflow is ready, switch to using the n8n Form Trigger's **Production URL** by opening the trigger node and selecting the **Production URL** in the **From URLS** selector. You can then publish your workflow, and n8n runs it automatically when a user submits the form.

When working with a production URL, ensure that you have saved and published the workflow. Data flowing through the Form trigger isn't visible in the editor UI with the production URL.

## Templates and examples <a id="templates-and-examples"></a>

[Browse n8n Form node documentation integration templates](https://n8n.io/integrations/n8n-form) or [search all templates](https://n8n.io/workflows/)
