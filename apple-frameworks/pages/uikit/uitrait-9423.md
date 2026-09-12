> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitrait-9423](https://developer.apple.com/documentation/uikit/uitrait-9423)

# UITrait

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A type representing a trait in a trait collection.

## Declaration

```swift
typealias UITrait = any UITraitDefinition.Type
```

<a id="Discussion"></a>

## Discussion

The type of a trait serves as a key to uniquely identify a trait in a trait collection. The [subscript(\_:)](uitraitcollection/subscript%28__%29-96v58.md) method of [UITraitCollection](uitraitcollection.md) and [registerForTraitChanges(\_:handler:)](uitraitchangeobservable-67e94/registerfortraitchanges%28__handler_%29.md) are two examples that take trait types to identify traits in the collection.

## See Also

### Custom traits

- [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md): Share data that needs to flow hierarchically across multiple levels of your view hierarchy.
- [UIMutableTraits](uimutabletraits-13ja5.md): A mutable container of traits.
- [UITraitDefinition](uitraitdefinition-64c15.md): A type representing a trait in a trait collection.
