> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconvolution/kernelwidth

# kernelWidth (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The width of the filter window. Must be an odd number.

## Declaration

```swift
var kernelWidth: Int { get }
```

## See Also

### Properties

- [kernelHeight](kernelheight.md): The height of the filter window. Must be an odd number.
- [bias](bias.md): The value added to a convolved pixel before it is converted back to its intended storage format.

# kernelWidth (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The width of the filter window. Must be an odd number.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger kernelWidth;
```

## See Also

### Properties

- [kernelHeight](kernelheight.md): The height of the filter window. Must be an odd number.
- [bias](bias.md): The value added to a convolved pixel before it is converted back to its intended storage format.
