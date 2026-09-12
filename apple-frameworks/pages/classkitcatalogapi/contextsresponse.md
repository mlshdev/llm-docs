> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/contextsresponse](https://developer.apple.com/documentation/classkitcatalogapi/contextsresponse)

# ContextsResponse

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

The response you receive after modifying context information.

## Declaration

```
object ContextsResponse
```

## Properties

- `contexts` — `[Context]`: An array of contexts returned by a call to the ClassKit Catalog API.

## See Also

### Declaring Contexts

- [Preparing Context Data](preparing-context-data.md): Adjust how you manage context data when working with the web API.
- [Create or Replace Contexts](create-or-replace-contexts.md): Store information about the assignable content that your educational app provides.
- [Get a Context](get-a-context.md): Fetch information that you previously stored about your app’s assignable activities.
- [Delete a Context](delete-a-context.md): Remove information that you previously stored about your app’s assignable activities.
- [Context](context.md): An area of your app that represents an assignable task, like a quiz or a chapter.
- [ContextsRequest](contextsrequest.md): A request that you make when modifying context information.
