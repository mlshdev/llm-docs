> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/init(displayname:loadingpayloads:)](https://developer.apple.com/documentation/usdkit/usdstage/init(displayname:loadingpayloads:))

# init(displayName:loadingPayloads:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a new memory-backed stage.

## Declaration

```swift
init(displayName: String? = nil, loadingPayloads: USDStage.InitialLoadRule = .all)
```

<a id="discussion"></a>

## Discussion

This is analogous to creating an anonymous [USDLayer](../usdlayer.md).

## See Also

### Creating a stage

- [init(string:loadingPayloads:)](init%28string_loadingpayloads_%29.md): Creates a stage from a string containing a `.usda` document.
- [init(\_:type:loadingPayloads:)](init%28__type_loadingpayloads_%29.md): Creates a stage from in-memory data in a given format.
