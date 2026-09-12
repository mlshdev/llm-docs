> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflowbuildrunslinkagesresponse](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflowbuildrunslinkagesresponse)

# CiWorkflowBuildRunsLinkagesResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object CiWorkflowBuildRunsLinkagesResponse
```

## Properties

- `data` — `[CiWorkflowBuildRunsLinkagesResponse.Data]` (required):
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## Topics

### Dictionaries

- [CiWorkflowBuildRunsLinkagesResponse.Data](ciworkflowbuildrunslinkagesresponse/data-data.dictionary.md)

## See Also

### Objects and types

- [CiWorkflow](ciworkflow.md): An Xcode Cloud automation configuration specifying when to build, which actions to run, and how to distribute the output.
- [CiAction](ciaction.md): A step within an Xcode Cloud workflow, such as building, running tests, analyzing, or deploying an app.
- [CiWorkflowCreateRequest](ciworkflowcreaterequest.md): The request body you use to create a new Xcode Cloud workflow.
- [CiWorkflowUpdateRequest](ciworkflowupdaterequest.md): The request body you use to update an Xcode Cloud workflow.
- [CiWorkflowResponse](ciworkflowresponse.md): The response body for endpoints that create, read, or modify an Xcode Cloud workflow.
- [CiWorkflowsResponse](ciworkflowsresponse.md): The response body for endpoints that list Xcode Cloud workflows for a product.
- [CiBuildRunsResponse](cibuildrunsresponse.md): The response body for endpoints that list build runs for an Xcode Cloud workflow.
- [CiManualBranchStartCondition](cimanualbranchstartcondition.md): A workflow start condition that triggers an Xcode Cloud build when a specified branch is manually selected.
- [CiManualPullRequestStartCondition](cimanualpullrequeststartcondition.md): A workflow start condition that triggers an Xcode Cloud build for a manually specified pull request.
- [CiManualTagStartCondition](cimanualtagstartcondition.md): A workflow start condition that triggers an Xcode Cloud build when a specified tag is manually selected.
- [CiWorkflowRepositoryLinkageResponse](ciworkflowrepositorylinkageresponse.md)
