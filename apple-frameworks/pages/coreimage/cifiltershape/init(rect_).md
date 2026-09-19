> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifiltershape/init(rect:)

# init(rect:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes a filter shape object with a rectangle.

## Declaration

```swift
init(rect r: CGRect)
```

## Parameters

- `r`: A rectangle. Core Image uses the rectangle specified by integer parts of the values in the `CGRect` data structure.

<a id="return-value"></a>

## Return Value

An initialized CIFilterShape object, or `nil` if the method fails.

# initWithRect: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes a filter shape object with a rectangle.

## Declaration

```objectivec
- (instancetype) initWithRect:(CGRect) r;
```

## Parameters

- `r`: A rectangle. Core Image uses the rectangle specified by integer parts of the values in the `CGRect` data structure.

<a id="return-value"></a>

## Return Value

An initialized CIFilterShape object, or `nil` if the method fails.

## See Also

### Related Documentation

- [shapeWithRect:](shapewithrect_.md): Creates a filter shape object and initializes it with a rectangle.
