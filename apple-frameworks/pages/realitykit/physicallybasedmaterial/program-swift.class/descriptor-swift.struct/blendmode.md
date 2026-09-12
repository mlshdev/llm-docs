> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/program-swift.class/descriptor-swift.struct/blendmode](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/program-swift.class/descriptor-swift.struct/blendmode)

# blendMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Describes how materials using the created `PhysicallyBasedMaterial.Program` will be blended with content behind them.

## Declaration

```swift
var blendMode: MaterialParameterTypes.BlendMode?
```

<a id="discussion"></a>

## Discussion

Default value is nil, which will cause this material to render opaque, and not blend with background content.
