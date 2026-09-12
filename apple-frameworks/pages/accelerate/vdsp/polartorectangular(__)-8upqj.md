> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/polartorectangular(_:)-8upqj](https://developer.apple.com/documentation/accelerate/vdsp/polartorectangular(_:)-8upqj)

# polarToRectangular(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns single-precision rectangular coordinates converted from polar coordinates.

## Declaration

```swift
static func polarToRectangular<U>(_ polarCoordinates: U) -> [Float] where U : AccelerateBuffer, U.Element == Float
```

## Parameters

- `polarCoordinates`: The source polar coordinates.

<a id="Discussion"></a>

## Discussion

The function calls the underlying [vDSP_rect](../vdsp_rect.md) function to convert the input angle-radius pairs to Cartesian x-y pairs.

The following code shows how to convert an angle-radius pair (with the angle specified in degress) to its rectangular equivalent:

```swift
    let angle = Measurement(value: 45,
                            unit: UnitAngle.degrees)
        .converted(to: UnitAngle.radians)
        .value

    let radius = sqrt(25.0 + 25.0)

    let polarCoordinates = [radius, angle].map { Float($0) }

    let rectangularCoordinates = vDSP.polarToRectangular(polarCoordinates)
    
    // Prints "[5.0, 5.0]".
    print(rectangularCoordinates)
```

## See Also

### Converting polar coordinates to rectangular coordinates

- [polarToRectangular(\_:)](polartorectangular%28__%29-jgv8.md): Returns double-precision rectangular coordinates converted from polar coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](convert%28polarcoordinates_torectangularcoordinates_%29-3vpjf.md): Converts single-precision polar coordinates to rectangular coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](convert%28polarcoordinates_torectangularcoordinates_%29-22zz0.md): Converts double-precision polar coordinates to rectangular coordinates.
