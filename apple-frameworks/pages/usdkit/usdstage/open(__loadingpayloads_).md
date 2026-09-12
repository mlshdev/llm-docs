> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/open(_:loadingpayloads:)](https://developer.apple.com/documentation/usdkit/usdstage/open(_:loadingpayloads:))

# open(\_:loadingPayloads:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Opens a stage using the file at a URL as its root layer.

## Declaration

```swift
static func open(_ url: URL, loadingPayloads: USDStage.InitialLoadRule = .all) throws -> USDStage
```

## Parameters

- `url`: A file URL to use as the root layer of the new stage.
- `loadingPayloads`: The rule that determines which payloads are loaded when opening the stage.

<a id="return-value"></a>

## Return Value

A new stage rooted at the layer loaded from `url`.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the URL does not refer to a readable file.

## See Also

### Opening a stage

- [open(rootLayer:sessionLayer:options:)](open%28rootlayer_sessionlayer_options_%29.md): Opens a stage rooted at a given layer.
- [open(\_:sessionLayer:options:)](open%28__sessionlayer_options_%29.md): Opens a stage using a file as the root layer.
- [USDStage.OpenOptions](openoptions.md): Options that specify behavior related to opening a stage.
- [USDStage.InitialLoadRule](initialloadrule.md): Specifies the rule used when opening a stage to determine if referenced payloads are loaded.
