> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/dynamicmapcontent](https://developer.apple.com/documentation/mapkit/dynamicmapcontent)

# DynamicMapContent

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A  type of view that generates views from an underlying collection of data.

## Declaration

```swift
protocol DynamicMapContent : MapContent
```

## Topics

### Accessing the data

- [data](dynamicmapcontent/data-swift.property.md): The collection of underlying data.

### Associated types

- [Data](dynamicmapcontent/data-swift.associatedtype.md): The type represents the data this protocol contains.

## Relationships

### Inherits From

- [MapContent](mapcontent.md)

## See Also

### Protocols

- [MapContent](mapcontent.md): A protocol used to construct map content such as controls, markers, and annotations.
- [MapContentBuilder](mapcontentbuilder.md): A result builder that creates map content from closures you provide.
- [MapContentView](mapcontentview.md): A view that contains content that displays on a map at a specific position, and that responds to specific interactions you specify.
