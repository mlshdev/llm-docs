> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convert(polarcoordinates:torectangularcoordinates:)-3vpjf](https://developer.apple.com/documentation/accelerate/vdsp/convert(polarcoordinates:torectangularcoordinates:)-3vpjf)

# convert(polarCoordinates:toRectangularCoordinates:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts single-precision polar coordinates to rectangular coordinates.

## Declaration

```swift
static func convert<U, V>(polarCoordinates: U, toRectangularCoordinates rectangularCoordinates: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## Parameters

- `polarCoordinates`: The source polar coordinates.
- `rectangularCoordinates`: On output, the rectangular coordinates.

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

    let rectangularCoordinates = [Float](unsafeUninitializedCapacity: 2) {
        buffer,initializedCount in
        
        vDSP.convert(
            polarCoordinates: polarCoordinates,
            toRectangularCoordinates: &buffer
        )
        
        initializedCount = 2
    }
    
    // Prints "[5.0, 5.0]".
    print(rectangularCoordinates)
```

## See Also

### Converting polar coordinates to rectangular coordinates

- [polarToRectangular(\_:)](polartorectangular%28__%29-8upqj.md): Returns single-precision rectangular coordinates converted from polar coordinates.
- [polarToRectangular(\_:)](polartorectangular%28__%29-jgv8.md): Returns double-precision rectangular coordinates converted from polar coordinates.
- [convert(polarCoordinates:toRectangularCoordinates:)](convert%28polarcoordinates_torectangularcoordinates_%29-22zz0.md): Converts double-precision polar coordinates to rectangular coordinates.
