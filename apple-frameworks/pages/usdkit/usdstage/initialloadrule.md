> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/initialloadrule](https://developer.apple.com/documentation/usdkit/usdstage/initialloadrule)

# USDStage.InitialLoadRule

**Framework:** USDKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Specifies the rule used when opening a stage to determine if referenced payloads are loaded.

## Declaration

```swift
enum InitialLoadRule
```

## Topics

### Enumeration Cases

- [USDStage.InitialLoadRule.all](initialloadrule/all.md): Load all loadable prims.
- [USDStage.InitialLoadRule.none](initialloadrule/none.md): Load no loadable prims.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening a stage

- [open(rootLayer:sessionLayer:options:)](open%28rootlayer_sessionlayer_options_%29.md): Opens a stage rooted at a given layer.
- [open(\_:sessionLayer:options:)](open%28__sessionlayer_options_%29.md): Opens a stage using a file as the root layer.
- [open(\_:loadingPayloads:)](open%28__loadingpayloads_%29.md): Opens a stage using the file at a URL as its root layer.
- [USDStage.OpenOptions](openoptions.md): Options that specify behavior related to opening a stage.
