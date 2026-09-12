> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uniformtypeidentifiers/uttype-swift.struct/supertypes](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct/supertypes)

# supertypes

**Framework:** Uniform Type Identifiers  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The set of types the type directly or indirectly conforms to.

## Declaration

```swift
var supertypes: Set<UTType> { get }
```

## See Also

### Checking a type’s relationship to another type

- [conforms(to:)](conforms%28to_%29.md): Returns a Boolean value that indicates whether a type conforms to the type.
- [isSubtype(of:)](issubtype%28of_%29.md): Returns a Boolean value that indicates whether a type is higher in a hierarchy than the type.
- [isSupertype(of:)](issupertype%28of_%29.md): Returns a Boolean value that indicates whether a type is lower in a hierarchy than the type.
- [Navigating Hierarchical Data Using Outline and Split Views](https://developer.apple.com/documentation/appkit/navigating-hierarchical-data-using-outline-and-split-views): Build a structured user interface that simplifies navigation in your app.
