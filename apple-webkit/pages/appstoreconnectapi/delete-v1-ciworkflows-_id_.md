> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-ciworkflows-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-ciworkflows-_id_)

# Delete a workflow

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Delete an Xcode Cloud workflow and all of its associated data.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/ciWorkflows/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Workflows resource.

## Response Codes

- `204` No Content: The request completed successfully and the specific Workflows resource was deleted.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

To delete an Xcode Cloud workflow, call this endpoint using the HTTP `DELETE` method like this:

```swift
https://api.appstoreconnect.apple.com/v1/ciWorkflows/9ad354b0-f380-40d3-b94f-dd5225b8b3d5
```

App Store Connect confirms the deletion by responding with the `HTTP/1.1 204 No Content` HTTP status code.

> **Important**

>  Deleting an Xcode Cloud workflow permanently deletes its build history and artifacts. Only delete an Xcode Cloud workflow when you’re confident that you no longer need it and its build history or artifacts. Instead of deleting a workflow, deactivate it to preserve its build history and artifacts. To deactivate a workflow, use the [Update an xcode cloud workflow](patch-v1-ciworkflows-_id_.md) endpoint to set the workflow’s `isEnabled` attribute to `false` or deactivate it in the Xcode or App Store Connect. For more information about deactivating a workflow using Xcode or App Store Connect, see [Developing a workflow strategy for Xcode Cloud](https://developer.apple.com/documentation/xcode/developing-a-workflow-strategy-for-xcode-cloud).

## See Also

### Managing Xcode Cloud Workflows

- [Create a workflow](post-v1-ciworkflows.md): Create a new Xcode Cloud workflow for an Xcode Cloud product.
- [Update an xcode cloud workflow](patch-v1-ciworkflows-_id_.md): Make changes to an Xcode Cloud workflow.
