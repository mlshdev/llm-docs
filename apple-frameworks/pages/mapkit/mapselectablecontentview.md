> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapselectablecontentview](https://developer.apple.com/documentation/mapkit/mapselectablecontentview)

# MapSelectableContentView

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency struct MapSelectableContentView<SelectionValue, Content> where SelectionValue : MapSelectable, Content : MapContent
```

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Structures

- [DefaultUserAnnotationContent](defaultuserannotationcontent.md): A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](emptymapcontent.md): A map content element that doesn’t contain any content.
- [MapProxy](mapproxy.md): A proxy for accessing sizing information about a given map view.
- [MapReader](mapreader.md): A container view that defines its contents as a function of information about the first contained map.
- [TupleMapContent](tuplemapcontent.md): A view created from a Swift tuple of map content values.
