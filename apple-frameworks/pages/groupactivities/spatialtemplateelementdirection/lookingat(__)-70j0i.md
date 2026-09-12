> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementdirection/lookingat(_:)-70j0i](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementdirection/lookingat(_:)-70j0i)

# lookingAt(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Creates a direction that orients the participant to face another template element.

## Declaration

```swift
static func lookingAt(_ element: any SpatialTemplateElement) -> SpatialTemplateElementDirection
```

## Parameters

- `element`: The template element to look at.

<a id="return-value"></a>

## Return Value

A direction type that faces the specified seat position.

<a id="discussion"></a>

## Discussion

Call this method when you want one participant to look at another participant.

## See Also

### Looking at a specific location

- [lookingAt(\_:)](lookingat%28__%29-1d7ak.md): Creates a direction that orients the participant to face the specified point in the shared coordinate space.
