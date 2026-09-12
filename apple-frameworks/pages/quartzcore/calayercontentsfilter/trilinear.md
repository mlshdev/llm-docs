> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayercontentsfilter/trilinear](https://developer.apple.com/documentation/quartzcore/calayercontentsfilter/trilinear)

# trilinear (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

## Declaration

```swift
static let trilinear: CALayerContentsFilter
```

## See Also

### Constants

- [linear](linear.md): Linear interpolation filter.
- [nearest](nearest.md): Nearest neighbor interpolation filter.

# kCAFilterTrilinear (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

## Declaration

```objectivec
extern CALayerContentsFilter const kCAFilterTrilinear;
```

## See Also

### Constants

- [kCAFilterLinear](linear.md): Linear interpolation filter.
- [kCAFilterNearest](nearest.md): Nearest neighbor interpolation filter.
