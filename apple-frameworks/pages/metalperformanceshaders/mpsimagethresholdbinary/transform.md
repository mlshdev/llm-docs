> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsimagethresholdbinary/transform

# transform (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The color transform used to initialize the threshold filter.

## Declaration

```swift
var transform: UnsafePointer<Float> { get }
```

## See Also

### Properties

- [thresholdValue](thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [maximumValue](maximumvalue.md): The maximum value used to initialize the threshold filter.

# transform (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The color transform used to initialize the threshold filter.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) const float * transform;
```

## See Also

### Properties

- [thresholdValue](thresholdvalue.md): The threshold value used to initialize the threshold filter.
- [maximumValue](maximumvalue.md): The maximum value used to initialize the threshold filter.
