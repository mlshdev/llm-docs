> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/pointofinterestcategories](https://developer.apple.com/documentation/mapkit/pointofinterestcategories)

# PointOfInterestCategories

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A structure you use to define points of interest to include or exclude on a map.

## Declaration

```swift
struct PointOfInterestCategories
```

## Topics

### Creating point of interest categories

- [init(arrayLiteral:)](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral/init%28arrayliteral:%29): Creates an instance initialized with the given elements.

### Categories to include or exclude

- [all](pointofinterestcategories/all.md): A list of all points of interest categories, both included and excluded.
- [excludingAll](pointofinterestcategories/excludingall.md): A list of point of interest categories to exclude from display on the map.

### Modifying the categories to include or exclude

- [excluding(\_:)](pointofinterestcategories/excluding%28__%29-16bp0.md): Show all points of interest except those belonging to certain categories using the array you provide.
- [excluding(\_:)](pointofinterestcategories/excluding%28__%29-4jo9h.md): Show all points of interest except those belonging to certain categories using the list you provide.
- [including(\_:)](pointofinterestcategories/including%28__%29-22f7x.md): Show only points of interest belonging to certain categories from the provided array.
- [including(\_:)](pointofinterestcategories/including%28__%29-6flda.md): Show only points of interest belonging to certain categories from the provided list.

### Type aliases

- [ArrayLiteralElement](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral/arrayliteralelement): The type of the elements of an array literal.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
