> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayercontentsfilter/linear](https://developer.apple.com/documentation/quartzcore/calayercontentsfilter/linear)

# linear (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Linear interpolation filter.

## Declaration

```swift
static let linear: CALayerContentsFilter
```

## See Also

### Constants

- [nearest](nearest.md): Nearest neighbor interpolation filter.
- [trilinear](trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

# kCAFilterLinear (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Linear interpolation filter.

## Declaration

```objectivec
extern CALayerContentsFilter const kCAFilterLinear;
```

## See Also

### Constants

- [kCAFilterNearest](nearest.md): Nearest neighbor interpolation filter.
- [kCAFilterTrilinear](trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.
