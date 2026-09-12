> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/init(string:loadingpayloads:)](https://developer.apple.com/documentation/usdkit/usdstage/init(string:loadingpayloads:))

# init(string:loadingPayloads:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a stage from a string containing a `.usda` document.

## Declaration

```swift
init(string: String, loadingPayloads: USDStage.InitialLoadRule = .all) throws
```

## Parameters

- `string`: The text of a `.usda` document to open as the root layer.
- `loadingPayloads`: The rule that determines which payloads are loaded when opening the stage.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the string cannot be read as a `.usda` layer.

## See Also

### Creating a stage

- [init(displayName:loadingPayloads:)](init%28displayname_loadingpayloads_%29.md): Creates a new memory-backed stage.
- [init(\_:type:loadingPayloads:)](init%28__type_loadingpayloads_%29.md): Creates a stage from in-memory data in a given format.
