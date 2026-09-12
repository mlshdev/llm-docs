> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/modelcontext/init(_:)](https://developer.apple.com/documentation/swiftdata/modelcontext/init(_:))

# init(\_:)

**Framework:** SwiftData  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Creates a context that belongs to the specified model container.

## Declaration

```swift
init(_ container: ModelContainer)
```

## Parameters

- `container`: The model container to associate with the initialized context.

<a id="discussion"></a>

## Discussion

Use the context’s [container](container.md) property to access the model container after initializtion.

## See Also

### Creating a model context

- [ModelContainer](../modelcontainer.md): An object that manages an app’s schema and model storage configuration.
