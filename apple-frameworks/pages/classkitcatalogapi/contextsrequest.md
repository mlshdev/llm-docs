> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/contextsrequest](https://developer.apple.com/documentation/classkitcatalogapi/contextsrequest)

# ContextsRequest

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

A request that you make when modifying context information.

## Declaration

```
object ContextsRequest
```

## Properties

- `contexts` — `[Context]` (required): An array of contexts that can contain up to 200 context objects.

<a id="Discussion"></a>

## Discussion

Use this request object to define one or more contexts that your app provides.

## See Also

### Declaring Contexts

- [Preparing Context Data](preparing-context-data.md): Adjust how you manage context data when working with the web API.
- [Create or Replace Contexts](create-or-replace-contexts.md): Store information about the assignable content that your educational app provides.
- [Get a Context](get-a-context.md): Fetch information that you previously stored about your app’s assignable activities.
- [Delete a Context](delete-a-context.md): Remove information that you previously stored about your app’s assignable activities.
- [Context](context.md): An area of your app that represents an assignable task, like a quiz or a chapter.
- [ContextsResponse](contextsresponse.md): The response you receive after modifying context information.
