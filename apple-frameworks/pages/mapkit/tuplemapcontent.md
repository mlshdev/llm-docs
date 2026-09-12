> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/tuplemapcontent](https://developer.apple.com/documentation/mapkit/tuplemapcontent)

# TupleMapContent

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A view created from a Swift tuple of map content values.

## Declaration

```swift
@MainActor @frozen @preconcurrency struct TupleMapContent<T>
```

## Topics

### Accessing the tuple value

- [value](tuplemapcontent/value.md): The contents of the tuple.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

## Relationships

### Conforms To

- [MapContent](mapcontent.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [DefaultUserAnnotationContent](defaultuserannotationcontent.md): A structure that represents the view to show at the user’s location on the map.
- [EmptyMapContent](emptymapcontent.md): A map content element that doesn’t contain any content.
- [MapProxy](mapproxy.md): A proxy for accessing sizing information about a given map view.
- [MapReader](mapreader.md): A container view that defines its contents as a function of information about the first contained map.
- [MapSelectableContentView](mapselectablecontentview.md)
