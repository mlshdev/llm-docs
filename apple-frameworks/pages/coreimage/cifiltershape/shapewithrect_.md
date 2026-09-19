> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifiltershape/shapewithrect:

# shapeWithRect:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a filter shape object and initializes it with a rectangle.

## Declaration

```objectivec
+ (instancetype) shapeWithRect:(CGRect) r;
```

## Parameters

- `r`: A rectangle. The filter shape object will contain the smallest integral rectangle specified by this argument.

## See Also

### Related Documentation

- [initWithRect:](init%28rect_%29.md): Initializes a filter shape object with a rectangle.
- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)
