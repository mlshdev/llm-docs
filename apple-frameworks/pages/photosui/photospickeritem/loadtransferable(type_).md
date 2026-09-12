> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospickeritem/loadtransferable(type:)](https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:))

# loadTransferable(type:)

**Framework:** PhotosUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Attempts to load an instance of the type you specify from the item provider.

## Declaration

```swift
func loadTransferable<T>(type: T.Type) async throws -> sending T? where T : Transferable
```

## Parameters

- `type`: A conforming type to load from an item provider.

<a id="return-value"></a>

## Return Value

A `Progress` object that reports the loading progress; otherwise, `nil` if the system doesn’t find a supported content type.

## See Also

### Loading the provider’s contents

- [loadTransferable(type:completionHandler:)](loadtransferable%28type_completionhandler_%29.md): Attempts to load an instance of the type you specify from the item provider, with a completion handler.
