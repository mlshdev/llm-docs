> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/open(_:sessionlayer:options:)](https://developer.apple.com/documentation/usdkit/usdstage/open(_:sessionlayer:options:))

# open(\_:sessionLayer:options:)

**Framework:** USDKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Opens a stage using a file as the root layer.

## Declaration

```swift
static func open(_ path: FilePath, sessionLayer: USDLayer? = nil, options: USDStage.OpenOptions = []) throws -> USDStage
```

<a id="discussion"></a>

## Discussion

Recursively follows the composition rules described by the root layer, opening any files referenced by that layer and assembling a hierarchy of [USDPrim](../usdprim.md)s from the combined contents of all layers.

This function will not create a file if no file exists at `path`, unless `OpenOptions.createNew` is passed as an option.

This function creates a new, independent stage object even if there is already a stage opened with `path` as its root layer.

Parameters:

- path: A file to use as the root layer of the new stage.
- sessionLayer: A layer to use as a session layer. If `nil`, an anonymous layer will be created.
- options: Options that specify behavior related to opening a stage.

Throws: An error if `path` does not exist or could not be read.

## See Also

### Opening a stage

- [open(rootLayer:sessionLayer:options:)](open%28rootlayer_sessionlayer_options_%29.md): Opens a stage rooted at a given layer.
- [open(\_:loadingPayloads:)](open%28__loadingpayloads_%29.md): Opens a stage using the file at a URL as its root layer.
- [USDStage.OpenOptions](openoptions.md): Options that specify behavior related to opening a stage.
- [USDStage.InitialLoadRule](initialloadrule.md): Specifies the rule used when opening a stage to determine if referenced payloads are loaded.
