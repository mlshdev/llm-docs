> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/context](https://developer.apple.com/documentation/classkitcatalogapi/context)

# Context

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Dictionary  
**Availability:** ClassKit 1.0+

An area of your app that represents an assignable task, like a quiz or a chapter.

## Declaration

```
object Context
```

## Properties

- `data` — `Context.Data` (required): The data that makes up the context. This is largely the same information that you provide to the ClassKit framework when you create a [CLSContext](../classkit/clscontext.md) instance.
- `metadata` — `Context.Metadata` (required): Information about the context, like the locale to which the context applies.

## Mentioned In

- [Preparing Context Data](preparing-context-data.md)

<a id="Discussion"></a>

## Discussion

The contexts that you specify in your app as [CLSContext](../classkit/clscontext.md) instances correspond to the [Context.Data](context/data-data.dictionary.md) object. The [Context.Metadata](context/metadata-data.dictionary.md) object contains additional information about a context that’s implicit when working with ClassKit in your app.

## Topics

### Objects

- [Context.Data](context/data-data.dictionary.md): The data that makes up a context.
- [Context.Metadata](context/metadata-data.dictionary.md): Information that helps the system categorize a context.

## See Also

### Declaring Contexts

- [Preparing Context Data](preparing-context-data.md): Adjust how you manage context data when working with the web API.
- [Create or Replace Contexts](create-or-replace-contexts.md): Store information about the assignable content that your educational app provides.
- [Get a Context](get-a-context.md): Fetch information that you previously stored about your app’s assignable activities.
- [Delete a Context](delete-a-context.md): Remove information that you previously stored about your app’s assignable activities.
- [ContextsRequest](contextsrequest.md): A request that you make when modifying context information.
- [ContextsResponse](contextsresponse.md): The response you receive after modifying context information.
