> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospickeritem/loadtransferable(type:completionhandler:)](https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:completionhandler:))

# loadTransferable(type:completionHandler:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Attempts to load an instance of the type you specify from the item provider, with a completion handler.

## Declaration

```swift
@discardableResult @preconcurrency func loadTransferable<T>(type: T.Type, completionHandler: @escaping @Sendable (Result<T?, any Error>) -> Void) -> Progress where T : Transferable
```

## Parameters

- `type`: A conforming type to load from an item provider.
- `completionHandler`: The completion callback handler with a result object that contains an instance if the system finds a supported content type; otherwise, `nil`.

## See Also

### Loading the provider’s contents

- [loadTransferable(type:)](loadtransferable%28type_%29.md): Attempts to load an instance of the type you specify from the item provider.
