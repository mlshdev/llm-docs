> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/open(rootlayer:sessionlayer:options:)](https://developer.apple.com/documentation/usdkit/usdstage/open(rootlayer:sessionlayer:options:))

# open(rootLayer:sessionLayer:options:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Opens a stage rooted at a given layer.

## Declaration

```swift
static func open(rootLayer: USDLayer, sessionLayer: USDLayer? = nil, options: USDStage.OpenOptions = []) throws -> USDStage
```

<a id="discussion"></a>

## Discussion

Recursively follows the composition rules described by `rootLayer`, opening any files referenced by the layer and assembling a hierarchy of [USDPrim](../usdprim.md)s from the combined contents of all layers.

This function creates a new, independent stage object even if there is already a stage opened with `rootLayer` as its root layer.

Parameters:

- rootLayer: The root layer of the new stage.
- sessionLayer: A layer to use as a session layer. If `nil`, an anonymous layer will be created.
- options: Options that specify behavior related to opening a stage.

## See Also

### Opening a stage

- [open(\_:sessionLayer:options:)](open%28__sessionlayer_options_%29.md): Opens a stage using a file as the root layer.
- [open(\_:loadingPayloads:)](open%28__loadingpayloads_%29.md): Opens a stage using the file at a URL as its root layer.
- [USDStage.OpenOptions](openoptions.md): Options that specify behavior related to opening a stage.
- [USDStage.InitialLoadRule](initialloadrule.md): Specifies the rule used when opening a stage to determine if referenced payloads are loaded.
