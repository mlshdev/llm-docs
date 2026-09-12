> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementdirection/lookingat(_:)-1d7ak](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementdirection/lookingat(_:)-1d7ak)

# lookingAt(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a direction that orients the participant to face the specified point in the shared coordinate space.

## Declaration

```swift
static func lookingAt(_ position: SpatialTemplateElementPosition) -> SpatialTemplateElementDirection
```

## Parameters

- `position`: A location in the shared coordinate space. Specify positions as an offset from the app’s content using the [SpatialTemplateElementPosition](../spatialtemplateelementposition.md) type.

<a id="return-value"></a>

## Return Value

A direction type that faces the specified position in the coordinate space.

## See Also

### Looking at a specific location

- [lookingAt(\_:)](lookingat%28__%29-70j0i.md): Creates a direction that orients the participant to face another template element.
