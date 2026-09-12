> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-ciworkflows](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-ciworkflows)

# Create a workflow

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Create a new Xcode Cloud workflow for an Xcode Cloud product.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/ciWorkflows
```

## HTTP Body

Content type: `application/json`

Type: `CiWorkflowCreateRequest`

The request body you use to create a new Xcode Cloud workflow.

## Response Codes

- `201` Created — `CiWorkflowResponse`: The request completed successfully and a new Workflows resource has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below creates a new workflow that performs the archive action. App Store Connect returns the `201` HTTP status code to indicate the successful creation of the workflow and returns information about the workflow. Use the data to access additional information or to start a new build.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{    
“data”: {
        “type”: “ciWorkflows”,
        “attributes”: {
            “name”: “A new workflow”,
            “description”: “A new workflow that verifies my changes.”,
            “branchStartCondition”: {
                “source”: {
                    “isAllMatch”: false,
                    “patterns”: [
                        {
                            “pattern”: “main”,
                            “isPrefix”: false
                        }
                    ]
                },
                “filesAndFoldersRule”: {
                    “mode”: “START_IF_ANY_FILE_MATCHES”,
                    “matchers”: []
                },
                “autoCancel”: true
            },
            “actions”: [
                {
                    “name”: “Archive iOS”,
                    “actionType”: “ARCHIVE”,
                    “scheme”: “MyApp”,
                    “platform”: “IOS”,
                    “isRequiredToPass”: true
                }
            ],
            “isEnabled”: true,
            “isLockedForEditing”: false,
            “clean”: false,
            “containerFilePath”: “MyXcodeProject.xcodeproj”
        },
        “relationships”: {
            “xcodeVersion”: {
                “data”: {
                    “type”: “ciXcodeVersions”,
                    “id”: “Xcode12E507:stable”
                }
            },
            “macOsVersion”: {
                “data”: {
                    “type”: “ciMacOsVersions”,
                    “id”: “20G95”
                }
            },
            “product”: {
                “data”: {
                    “type”: “ciProducts”,
                    “id”: “8ca28eb1-2948-4848-813b-07c500665157”
                }
            },
            “repository”: {
                “data”: {
                    “type”: “scmRepositories”,
                    “id”: “195430ae-7262-4b24-abd2-cbb6891feab8”
                }
            }
        }
    }
}
```

**Response**

```json
{
    "data": {
        "type": "ciWorkflows",
        "id": "f445a31a-b0c6-4a83-b295-25496f50a69e",
        "attributes": {
            "name": "A new workflow",
            "description": "A new workflow that verifies my changes.",
            "branchStartCondition": {
                "source": {
                    "isAllMatch": false,
                    "patterns": [
                        {
                            "pattern": "main",
                            "isPrefix": false
                        }
                    ]
                },
                "filesAndFoldersRule": {
                    "mode": "START_IF_ANY_FILE_MATCHES",
                    "matchers": []
                },
                "autoCancel": true
            },
            "tagStartCondition": null,
            "pullRequestStartCondition": null,
            "scheduledStartCondition": null,
            "actions": [
                {
                    "name": "Archive iOS",
                    "actionType": "ARCHIVE",
                    "destination": null,
                    "buildDistributionAudience": null,
                    "testConfiguration": null,
                    "scheme": "MyApp",
                    "platform": "IOS",
                    "isRequiredToPass": true
                }
            ],
            "isEnabled": true,
            "isLockedForEditing": false,
            "clean": false,
            "containerFilePath": "MyXcodeProject.xcodeproj",
            "lastModifiedDate": null
        },
        "relationships": {
            "repository": {
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/f445a31a-b0c6-4a83-b295-25496f50a69e/relationships/repository",
                    "related": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/f445a31a-b0c6-4a83-b295-25496f50a69e/repository"
                }
            },
            "buildRuns": {
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/f445a31a-b0c6-4a83-b295-25496f50a69e/relationships/buildRuns",
                    "related": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/f445a31a-b0c6-4a83-b295-25496f50a69e/buildRuns"
                }
            }
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/f445a31a-b0c6-4a83-b295-25496f50a69e"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows"
    }
}
```

## See Also

### Managing Xcode Cloud Workflows

- [Update an xcode cloud workflow](patch-v1-ciworkflows-_id_.md): Make changes to an Xcode Cloud workflow.
- [Delete a workflow](delete-v1-ciworkflows-_id_.md): Delete an Xcode Cloud workflow and all of its associated data.
