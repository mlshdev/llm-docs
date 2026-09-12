> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciworkflows-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciworkflows-_id_)

# Read xcode cloud workflow information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific Xcode Cloud workflow.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciWorkflows/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Workflows resource.

## Query Parameters

- `fields[ciWorkflows]` — `[string]`: Additional fields to include for the Workflows resource returned by the response.
  **Allowed values:** `name`, `description`, `branchStartCondition`, `tagStartCondition`, `pullRequestStartCondition`, `scheduledStartCondition`, `manualBranchStartCondition`, `manualTagStartCondition`, `manualPullRequestStartCondition`, `actions`, `isEnabled`, `isLockedForEditing`, `clean`, `containerFilePath`, `lastModifiedDate`, `product`, `repository`, `xcodeVersion`, `macOsVersion`, `buildRuns`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `product`, `repository`, `xcodeVersion`, `macOsVersion`
- `fields[scmRepositories]` — `[string]`: Additional fields to include for the Workflows resource returned by the response.
  **Allowed values:** `lastAccessedDate`, `httpCloneUrl`, `sshCloneUrl`, `ownerName`, `repositoryName`, `scmProvider`, `defaultBranch`, `gitReferences`, `pullRequests`
- `fields[ciMacOsVersions]` — `[string]`: **Allowed values:** `version`, `name`, `xcodeVersions`
- `fields[ciProducts]` — `[string]`: **Allowed values:** `name`, `createdDate`, `productType`, `app`, `bundleId`, `workflows`, `primaryRepositories`, `additionalRepositories`, `buildRuns`
- `fields[ciXcodeVersions]` — `[string]`: **Allowed values:** `version`, `name`, `testDestinations`, `macOsVersions`

## Response Codes

- `200` OK — `CiWorkflowResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below accesses information about an Xcode Cloud workflow. Display the workflow data provided in the response on a dashboard or use it to read additional information; for example, detailed data about builds Xcode Cloud performed.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f
```

**Response**

```json
{
    "data": {
        "type": "ciWorkflows",
        "id": "3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f",
        "attributes": {
            "name": "My Workflow",
            "description": "",
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
            "product": {
                "data": {
                    "type": "ciProducts",
                    "id": "8ca28eb1-2948-4848-813b-07c500665157"
                }
            },
            "repository": {
                "data": {
                    "type": "scmRepositories",
                    "id": "195430ae-7262-4b24-abd2-cbb6891feab8"
                },
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f/relationships/repository",
                    "related": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f/repository"
                }
            },
            "xcodeVersion": {
                "data": {
                    "type": "ciXcodeVersions",
                    "id": "Xcode12E507:stable"
                }
            },
            "macOsVersion": {
                "data": {
                    "type": "ciMacOsVersions",
                    "id": "20G95"
                }
            },
            "buildRuns": {
                "links": {
                    "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f/relationships/buildRuns",
                    "related": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f/buildRuns"
                }
            }
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciWorkflows/3fa0575f-4de0-44cb-bf0f-9aa2651c2f1f?include=macOsVersion%2Cproduct%2Crepository%2CxcodeVersion"
    }
}
```

## See Also

### Getting Xcode Cloud Workflows

- [List all xcode cloud builds for a workflow](get-v1-ciworkflows-_id_-buildruns.md): List all builds Xcode Cloud performed for a specific workflow.
- [Read the repository information for an xcode cloud workflow](get-v1-ciworkflows-_id_-repository.md): Get information about the Git repository of a specific Xcode Cloud workflow.
- [List build run IDs for a CI workflow](get-v1-ciworkflows-_id_-relationships-buildruns.md)
- [Get the repository ID for a CI workflow](get-v1-ciworkflows-_id_-relationships-repository.md)
