> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/convolutionkernel2d/values

# values

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The kernel weights or structuring element values that must contain `height * width` elements.

## Declaration

```swift
let values: [ComponentType]
```

## See Also

### Instance Properties

- [width](width.md): The width of the kernel that must be a positive, odd number.
- [height](height.md): The height of the kernel that must be a positive, odd number.
