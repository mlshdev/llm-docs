> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/workflows](https://developer.apple.com/documentation/appstoreconnectapi/workflows)

# Workflows

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Manage Xcode Cloud workflows and view workflow details like actions and start conditions.

<a id="overview"></a>

## Overview

The `ciWorkflows` resource represents an Xcode Cloud workflow. Use it to:

- Read workflow information.
- Create a new workflow.
- Update an existing workflow.
- Delete a workflow you no longer need.

To learn more about workflows, see [Xcode Cloud workflow reference](https://developer.apple.com/documentation/xcode/xcode-cloud-workflow-reference).

> **Important**

>  Deleting a workflow also deletes associated build information and artifacts. Instead of deleting a workflow, consider deactivating it in Xcode or App Store Connect. To learn more about deactivating a workflow, see [Developing a workflow strategy for Xcode Cloud](https://developer.apple.com/documentation/xcode/developing-a-workflow-strategy-for-xcode-cloud).

This resource supports JSON web tokens with a lifetime of up to six months. For more information, see [Determine the Appropriate Token Lifetime](generating-tokens-for-api-requests.md#Determine-the-Appropriate-Token-Lifetime).

## Topics

### Getting Xcode Cloud Workflows

- [Read xcode cloud workflow information](get-v1-ciworkflows-_id_.md): Get information about a specific Xcode Cloud workflow.
- [List all xcode cloud builds for a workflow](get-v1-ciworkflows-_id_-buildruns.md): List all builds Xcode Cloud performed for a specific workflow.
- [Read the repository information for an xcode cloud workflow](get-v1-ciworkflows-_id_-repository.md): Get information about the Git repository of a specific Xcode Cloud workflow.
- [List build run IDs for a CI workflow](get-v1-ciworkflows-_id_-relationships-buildruns.md)
- [Get the repository ID for a CI workflow](get-v1-ciworkflows-_id_-relationships-repository.md)

### Managing Xcode Cloud Workflows

- [Create a workflow](post-v1-ciworkflows.md): Create a new Xcode Cloud workflow for an Xcode Cloud product.
- [Update an xcode cloud workflow](patch-v1-ciworkflows-_id_.md): Make changes to an Xcode Cloud workflow.
- [Delete a workflow](delete-v1-ciworkflows-_id_.md): Delete an Xcode Cloud workflow and all of its associated data.

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
- [CiWorkflowBuildRunsLinkagesResponse](ciworkflowbuildrunslinkagesresponse.md)
- [CiWorkflowRepositoryLinkageResponse](ciworkflowrepositorylinkageresponse.md)

## See Also

### Xcode Cloud Products and Workflows

- [Products](products.md): Read information about the products Xcode Cloud detected or delete a product and all its associated information.
- [macOS Versions](macos-versions.md): Read macOS version information you configure for an Xcode Cloud workflow.
- [Xcode Versions](xcode-versions.md): Read Xcode version information you configure for an Xcode Cloud workflow.
