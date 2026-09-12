> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcompositionallayout/init(sectionprovider:)](https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayout/init(sectionprovider:))

# init(sectionProvider:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a compositional layout object with a section provider to supply the layout’s sections.

## Declaration

```swift
init(sectionProvider: @escaping UICollectionViewCompositionalLayoutSectionProvider)
```

## See Also

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](../uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [init(sectionProvider:configuration:)](init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.

# initWithSectionProvider: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a compositional layout object with a section provider to supply the layout’s sections.

## Declaration

```objectivec
- (instancetype) initWithSectionProvider:(UICollectionViewCompositionalLayoutSectionProvider) sectionProvider;
```

## See Also

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](../uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [initWithSectionProvider:configuration:](init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.
