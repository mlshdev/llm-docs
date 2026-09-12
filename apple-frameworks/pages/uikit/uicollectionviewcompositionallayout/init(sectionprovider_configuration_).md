> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcompositionallayout/init(sectionprovider:configuration:)](https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayout/init(sectionprovider:configuration:))

# init(sectionProvider:configuration:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a compositional layout object with a section provider and an additional configuration.

## Declaration

```swift
init(sectionProvider: @escaping UICollectionViewCompositionalLayoutSectionProvider, configuration: UICollectionViewCompositionalLayoutConfiguration)
```

## See Also

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](../uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [init(sectionProvider:)](init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.

# initWithSectionProvider:configuration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a compositional layout object with a section provider and an additional configuration.

## Declaration

```objectivec
- (instancetype) initWithSectionProvider:(UICollectionViewCompositionalLayoutSectionProvider) sectionProvider configuration:(UICollectionViewCompositionalLayoutConfiguration *) configuration;
```

## See Also

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](../uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [initWithSectionProvider:](init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
