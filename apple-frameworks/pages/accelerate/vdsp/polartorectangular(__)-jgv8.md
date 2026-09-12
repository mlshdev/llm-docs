> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/polartorectangular(_:)-jgv8](https://developer.apple.com/documentation/accelerate/vdsp/polartorectangular(_:)-jgv8)

# polarToRectangular(\_:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Returns double-precision rectangular coordinates converted from polar coordinates.

## Declaration

```swift
static func polarToRectangular<U>(_ polarCoordinates: U) -> [Double] where U : AccelerateBuffer, U.Element == Double
```

## Parameters

- `polarCoordinates`: The source polar coordinates.

<a id="Discussion"></a>

## Discussion

The function calls the underlying [vDSP_rectD](../vdsp_rectd.md) function to convert the input angle-radius pairs to Cartesian x-y pairs.

The following code shows how to convert an angle-radius pair (with the angle specified in degress) to its rectangular equivalent:

```swift
    let angle = Measurement(value: 45,
                            unit: UnitAngle.degrees)
        .converted(to: UnitAngle.radians)
        .value

    let radius = sqrt(25.0 + 25.0)

    let polarCoordinates = [radius, angle]

    let rectangularCoordinates = vDSP.polarToRectangular(polarCoordinates)
    
    // Prints "[5.0, 5.0]".
    print(rectangularCoordinates)
```

## See Also

### Converting polar coordinates to rectangular coordinates

- [polarToRectangular(\_:)](polartorectangular%28__%29-8upqj.md): Returns single-precision rectangular coordinates converted from polar coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](convert%28polarcoordinates_torectangularcoordinates_%29-3vpjf.md): Converts single-precision polar coordinates to rectangular coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](convert%28polarcoordinates_torectangularcoordinates_%29-22zz0.md): Converts double-precision polar coordinates to rectangular coordinates.
