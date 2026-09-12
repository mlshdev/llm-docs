> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/convert(rectangularcoordinates:topolarcoordinates:)-1zi4t](https://developer.apple.com/documentation/accelerate/vdsp/convert(rectangularcoordinates:topolarcoordinates:)-1zi4t)

# convert(rectangularCoordinates:toPolarCoordinates:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Converts single-precision rectangular coordinates to polar coordinates.

## Declaration

```swift
static func convert<U, V>(rectangularCoordinates: U, toPolarCoordinates polarCoordinates: inout V) where U : AccelerateBuffer, V : AccelerateMutableBuffer, U.Element == Float, V.Element == Float
```

## Parameters

- `rectangularCoordinates`: The source rectangular coordinates.
- `polarCoordinates`: On output, the polar coordinates.

<a id="Discussion"></a>

## Discussion

The function calls the underlying [vDSP_polarD](../vdsp_polard.md) function to convert the input angle-radius pairs to Cartesian x-y pairs.

The following code shows how to convert a set of Cartesian coordinates to its angle-radius pair (with the angle specified in degress) equivalent:

```swift
    let rectangularCoordinates = [ 5.0, 5.0 ]

    let polarCoordinates = [Double](unsafeUninitializedCapacity: 2) {
        buffer,initializedCount in
        
        vDSP.convert(
            rectangularCoordinates: rectangularCoordinates,
            toPolarCoordinates: &buffer
        )
        
        initializedCount = 2
    }
    
    let radius = polarCoordinates[0]
    let angle = Measurement(value: polarCoordinates[1],
                            unit: UnitAngle.radians)
        .converted(to: UnitAngle.degrees)
        .value
    
    // Prints "7.07 45.0".
    print(radius, angle)
```

## See Also

### Converting rectangular coordinates to polar coordinates

- [rectangularToPolar(\_:)](rectangulartopolar%28__%29-5p4kg.md): Returns single-precision polar coordinates converted from rectangular coordinates.
- [rectangularToPolar(\_:)](rectangulartopolar%28__%29-3txg1.md): Returns double-precision polar coordinates converted from rectangular coordinates.
- [convert(rectangularCoordinates:toPolarCoordinates:)](convert%28rectangularcoordinates_topolarcoordinates_%29-84131.md): Converts double-precision rectangular coordinates to polar coordinates.
