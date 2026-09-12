> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ciworkflow](https://developer.apple.com/documentation/appstoreconnectapi/ciworkflow)

# CiWorkflow

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.5+

An Xcode Cloud automation configuration specifying when to build, which actions to run, and how to distribute the output.

## Declaration

```
object CiWorkflow
```

## Properties

- `attributes` — `CiWorkflow.Attributes`: The attributes that describe the Workflows resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Workflows resource.
- `links` — `ResourceLinks`: The navigational links that include the self-link.
- `relationships` — `CiWorkflow.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `ciWorkflows`

## Topics

### Objects

- [CiWorkflow.Attributes](ciworkflow/attributes-data.dictionary.md): The attributes that describe a Workflows resource.
- [CiWorkflow.Relationships](ciworkflow/relationships-data.dictionary.md): The relationships of the Workflows resource you included in the request and those on which you can operate.

## See Also

### Objects and types

- [CiAction](ciaction.md): A step within an Xcode Cloud workflow, such as building, running tests, analyzing, or deploying an app.
- [CiWorkflowCreateRequest](ciworkflowcreaterequest.md): The request body you use to create a new Xcode Cloud workflow.
- [CiWorkflowUpdateRequest](ciworkflowupdaterequest.md): The request body you use to update an Xcode Cloud workflow.
- [CiWorkflowResponse](ciworkflowresponse.md): The response body for endpoints that create, read, or modify an Xcode Cloud workflow.
- [CiWorkflowsResponse](ciworkflowsresponse.md): The response body for endpoints that list Xcode Cloud workflows for a product.
- [CiBuildRunsResponse](cibuildrunsresponse.md): The response body for endpoints that list build runs for an Xcode Cloud workflow.
- [CiManualBranchStartCondition](cimanualbranchstartcondition.md): A workflow start condition that triggers an Xcode Cloud build when a specified branch is manually selected.
- [CiManualPullRequestStartCondition](cimanualpullrequeststartcondition.md): A workflow start condition that triggers an Xcode Cloud build for a manually specified pull request.
- [CiManualTagStartCondition](cimanualtagstartcondition.md): A workflow start condition that triggers an Xcode Cloud build when a specified tag is manually selected.
- [CiWorkflowBuildRunsLinkagesResponse](ciworkflowbuildrunslinkagesresponse.md)
- [CiWorkflowRepositoryLinkageResponse](ciworkflowrepositorylinkageresponse.md)
