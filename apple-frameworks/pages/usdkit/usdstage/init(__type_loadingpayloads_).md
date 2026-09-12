> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/init(_:type:loadingpayloads:)](https://developer.apple.com/documentation/usdkit/usdstage/init(_:type:loadingpayloads:))

# init(\_:type:loadingPayloads:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a stage from in-memory data in a given format.

## Declaration

```swift
init(_ buffer: Data, type: UTType, loadingPayloads: USDStage.InitialLoadRule = .all) throws
```

## Parameters

- `buffer`: The serialized USD data to open as the root layer.
- `type`: The content type that identifies the format of `buffer`.
- `loadingPayloads`: The rule that determines which payloads are loaded when opening the stage.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the data cannot be read as a layer of the given type.

## See Also

### Creating a stage

- [init(displayName:loadingPayloads:)](init%28displayname_loadingpayloads_%29.md): Creates a new memory-backed stage.
- [init(string:loadingPayloads:)](init%28string_loadingpayloads_%29.md): Creates a stage from a string containing a `.usda` document.
