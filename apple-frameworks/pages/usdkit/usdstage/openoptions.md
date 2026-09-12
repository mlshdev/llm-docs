> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/openoptions](https://developer.apple.com/documentation/usdkit/usdstage/openoptions)

# USDStage.OpenOptions

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Options that specify behavior related to opening a stage.

## Declaration

```swift
struct OpenOptions
```

## Topics

### Type Properties

- [createNew](openoptions/createnew.md): Creates a new layer instead of opening an existing file. Any existing file at the specified path will be overwritten.

### Type Methods

- [loadRule(\_:)](openoptions/loadrule%28__%29.md): Specifies the rule used to determine if referenced payloads are loaded.

## Relationships

### Conforms To

- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening a stage

- [open(rootLayer:sessionLayer:options:)](open%28rootlayer_sessionlayer_options_%29.md): Opens a stage rooted at a given layer.
- [open(\_:sessionLayer:options:)](open%28__sessionlayer_options_%29.md): Opens a stage using a file as the root layer.
- [open(\_:loadingPayloads:)](open%28__loadingpayloads_%29.md): Opens a stage using the file at a URL as its root layer.
- [USDStage.InitialLoadRule](initialloadrule.md): Specifies the rule used when opening a stage to determine if referenced payloads are loaded.
