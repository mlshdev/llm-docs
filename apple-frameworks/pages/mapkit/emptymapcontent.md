> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/emptymapcontent](https://developer.apple.com/documentation/mapkit/emptymapcontent)

# EmptyMapContent

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A map content element that doesn’t contain any content.

## Declaration

```swift
@MainActor @preconcurrency struct EmptyMapContent
```

## Topics

### Creating an empty map content structure

- [init()](emptymapcontent/init%28%29.md): Creates an empty map content element.

### Setting the tag

- [tag(\_:)](mapcontent/tag%28__%29.md): Sets the unique tag value of this piece of map content.

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
- [MapProxy](mapproxy.md): A proxy for accessing sizing information about a given map view.
- [MapReader](mapreader.md): A container view that defines its contents as a function of information about the first contained map.
- [TupleMapContent](tuplemapcontent.md): A view created from a Swift tuple of map content values.
- [MapSelectableContentView](mapselectablecontentview.md)
