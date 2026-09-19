> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnncrosschannelnormalization/alpha

# alpha (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The “alpha” variable of the kernel function.

## Declaration

```swift
var alpha: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`. Values must be non-negative.

## See Also

### Instance Properties

- [beta](beta.md): The “beta” variable of the kernel function.
- [delta](delta.md): The “delta” variable of the kernel function.
- [kernelSize](kernelsize.md): The size of the square kernel window.

# alpha (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The “alpha” variable of the kernel function.

## Declaration

```objectivec
@property (nonatomic, readwrite) float alpha;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`. Values must be non-negative.

## See Also

### Instance Properties

- [beta](beta.md): The “beta” variable of the kernel function.
- [delta](delta.md): The “delta” variable of the kernel function.
- [kernelSize](kernelsize.md): The size of the square kernel window.
