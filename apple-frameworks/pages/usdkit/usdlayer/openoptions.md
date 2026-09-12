> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/openoptions](https://developer.apple.com/documentation/usdkit/usdlayer/openoptions)

# USDLayer.OpenOptions

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Options for opening a layer.

## Declaration

```swift
struct OpenOptions
```

## Topics

### Initializers

- [init()](openoptions/init%28%29.md): Creates an empty option set.
- [init(arrayLiteral:)](openoptions/init%28arrayliteral_%29.md): Creates an option set from a sequence of options.

### Type Properties

- [createNew](openoptions/createnew.md): Creates a new layer instead of opening an existing file. Any existing file at the identifier will be overwritten.

## Relationships

### Conforms To

- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Opening and finding layers

- [find(identifier:)](find%28identifier_%29.md): Returns an already-loaded layer with this identifier, or `nil` if none is loaded. Does no I/O.
- [open(\_:options:)](open%28__options_%29.md): Returns an already-loaded layer at the identifier, or opens it from the resolved asset path.
- [USDLayer.Permission](permission.md): Access permission for a spec.
