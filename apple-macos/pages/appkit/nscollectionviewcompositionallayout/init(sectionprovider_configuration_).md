> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewcompositionallayout/init(sectionprovider:configuration:)](https://developer.apple.com/documentation/appkit/nscollectionviewcompositionallayout/init(sectionprovider:configuration:))

# init(sectionProvider:configuration:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a compositional layout object with a section provider and an additional configuration.

## Declaration

```swift
init(sectionProvider: @escaping NSCollectionViewCompositionalLayoutSectionProvider, configuration: NSCollectionViewCompositionalLayoutConfiguration)
```

## See Also

### Creating a Layout

- [init(section:)](init%28section_%29.md): Creates a compositional layout object with a single section.
- [init(section:configuration:)](init%28section_configuration_%29.md): Creates a compositional layout object with a single section and an additional configuration.
- [init(sectionProvider:)](init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.

# initWithSectionProvider:configuration: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Creates a compositional layout object with a section provider and an additional configuration.

## Declaration

```objectivec
- (instancetype) initWithSectionProvider:(NSCollectionViewCompositionalLayoutSectionProvider) sectionProvider configuration:(NSCollectionViewCompositionalLayoutConfiguration *) configuration;
```

## See Also

### Creating a Layout

- [initWithSection:](init%28section_%29.md): Creates a compositional layout object with a single section.
- [initWithSection:configuration:](init%28section_configuration_%29.md): Creates a compositional layout object with a single section and an additional configuration.
- [initWithSectionProvider:](init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
