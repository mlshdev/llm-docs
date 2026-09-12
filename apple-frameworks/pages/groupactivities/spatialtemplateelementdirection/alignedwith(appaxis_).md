> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementdirection/alignedwith(appaxis:)](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementdirection/alignedwith(appaxis:))

# alignedWith(appAxis:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a direction that orients the participant to look along the specified axis in the direction of the app’s content.

## Declaration

```swift
static func alignedWith(appAxis: SpatialTemplateElementAxis) -> SpatialTemplateElementDirection
```

## Parameters

- `appAxis`: The axis for the participant to look along.

<a id="return-value"></a>

## Return Value

A direction type that faces the specified seat position.

<a id="discussion"></a>

## Discussion

Use this function to create a seat that faces perpendicular to the app. For example, you might use it to mimic a long bench or stadium-style seating. The following code shows how to create such a line of seats:

```swift
struct Line: SpatialTemplate {
    var elements: [any SpatialTemplateElement] {
        (-2...2).map { seatIndex in
            .seat(
                position: .app.offsetBy(x: Double(seatIndex) * 2, z: 3),
                direction: .alignedWith(appAxis: .z)
            )
        }
    }
}
```

## See Also

### Looking along an axis

- [SpatialTemplateElementAxis](../spatialtemplateelementaxis.md): An axis to use when aligning elements in a spatial template.
