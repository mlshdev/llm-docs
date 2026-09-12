> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayercontentsfilter/nearest](https://developer.apple.com/documentation/quartzcore/calayercontentsfilter/nearest)

# nearest (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Nearest neighbor interpolation filter.

## Declaration

```swift
static let nearest: CALayerContentsFilter
```

## See Also

### Constants

- [linear](linear.md): Linear interpolation filter.
- [trilinear](trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.

# kCAFilterNearest (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Nearest neighbor interpolation filter.

## Declaration

```objectivec
extern CALayerContentsFilter const kCAFilterNearest;
```

## See Also

### Constants

- [kCAFilterLinear](linear.md): Linear interpolation filter.
- [kCAFilterTrilinear](trilinear.md): Trilinear minification filter. Enables mipmap generation. Some renderers may ignore this, or impose additional restrictions, such as source images requiring power-of-two dimensions.
