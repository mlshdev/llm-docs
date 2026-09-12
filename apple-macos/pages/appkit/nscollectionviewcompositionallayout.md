> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewcompositionallayout](https://developer.apple.com/documentation/appkit/nscollectionviewcompositionallayout)

# NSCollectionViewCompositionalLayout (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A layout object that lets you combine items in highly adaptive and flexible visual arrangements.

## Declaration

```swift
class NSCollectionViewCompositionalLayout
```

<a id="overview"></a>

## Overview

A compositional layout is a type of collection view layout. It’s designed to be composable, flexible, and fast, letting you build any kind of visual arrangement for your content by combining—or compositing—each smaller component into a full layout.

A compositional layout is composed of one or more sections that break up the layout into distinct visual groupings. Each section is composed of groups of individual items, the smallest unit of data you want to present. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement.

You combine the components by building up from items into a group, from groups into a section, and finally into a full layout, like in this example of a basic list layout:

```swift
func createBasicListLayout() -> NSCollectionViewLayout {
    let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                         heightDimension: .fractionalHeight(1.0))
    let item = NSCollectionLayoutItem(layoutSize: itemSize)
  
    let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                          heightDimension: .absolute(44))
    let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize,
                                                     subitems: [item])
  
    let section = NSCollectionLayoutSection(group: group)

    let layout = NSCollectionViewCompositionalLayout(section: section)
    return layout
}
```

## Topics

### Creating a Layout

- [init(section:)](nscollectionviewcompositionallayout/init%28section_%29.md): Creates a compositional layout object with a single section.
- [init(section:configuration:)](nscollectionviewcompositionallayout/init%28section_configuration_%29.md): Creates a compositional layout object with a single section and an additional configuration.
- [init(sectionProvider:)](nscollectionviewcompositionallayout/init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
- [init(sectionProvider:configuration:)](nscollectionviewcompositionallayout/init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.

### Configuring the Layout

- [configuration](nscollectionviewcompositionallayout/configuration.md): The layout’s configuration, such as its scroll direction and section spacing.

## Relationships

### Inherits From

- [NSCollectionViewLayout](nscollectionviewlayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.

# NSCollectionViewCompositionalLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.15+

A layout object that lets you combine items in highly adaptive and flexible visual arrangements.

## Declaration

```objectivec
@interface NSCollectionViewCompositionalLayout : NSCollectionViewLayout
```

<a id="overview"></a>

## Overview

A compositional layout is a type of collection view layout. It’s designed to be composable, flexible, and fast, letting you build any kind of visual arrangement for your content by combining—or compositing—each smaller component into a full layout.

A compositional layout is composed of one or more sections that break up the layout into distinct visual groupings. Each section is composed of groups of individual items, the smallest unit of data you want to present. A group might lay out its items in a horizontal row, a vertical column, or a custom arrangement.

You combine the components by building up from items into a group, from groups into a section, and finally into a full layout, like in this example of a basic list layout:

```swift
func createBasicListLayout() -> NSCollectionViewLayout {
    let itemSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                         heightDimension: .fractionalHeight(1.0))
    let item = NSCollectionLayoutItem(layoutSize: itemSize)
  
    let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                          heightDimension: .absolute(44))
    let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize,
                                                     subitems: [item])
  
    let section = NSCollectionLayoutSection(group: group)

    let layout = NSCollectionViewCompositionalLayout(section: section)
    return layout
}
```

## Topics

### Creating a Layout

- [initWithSection:](nscollectionviewcompositionallayout/init%28section_%29.md): Creates a compositional layout object with a single section.
- [initWithSection:configuration:](nscollectionviewcompositionallayout/init%28section_configuration_%29.md): Creates a compositional layout object with a single section and an additional configuration.
- [initWithSectionProvider:](nscollectionviewcompositionallayout/init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
- [initWithSectionProvider:configuration:](nscollectionviewcompositionallayout/init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.

### Configuring the Layout

- [configuration](nscollectionviewcompositionallayout/configuration.md): The layout’s configuration, such as its scroll direction and section spacing.

## Relationships

### Inherits From

- [NSCollectionViewLayout](nscollectionviewlayout.md)

## See Also

### Layouts

- [Implementing modern collection views](https://developer.apple.com/documentation/uikit/implementing-modern-collection-views): Bring compositional layouts to your app and simplify updating your user interface with diffable data sources.
- [NSCollectionViewFlowLayout](nscollectionviewflowlayout.md): A layout that organizes items into a flexible and configurable arrangement.
- [NSCollectionViewDelegateFlowLayout](nscollectionviewdelegateflowlayout.md): A set of methods that a delegate implements to provide layout information to a flow layout object in a collection view.
- [NSCollectionViewGridLayout](nscollectionviewgridlayout.md): A layout that displays a single section of items in a row and column grid.
- [NSCollectionViewTransitionLayout](nscollectionviewtransitionlayout.md): An object that implements custom behaviors when changing from one layout to another in a collection view.
- [NSCollectionViewLayoutAttributes](nscollectionviewlayoutattributes.md): An object that contains layout-related attributes for an element in a collection view.
- [NSCollectionViewLayout](nscollectionviewlayout.md): An abstract base class that you subclass and use to generate layout information for a collection view.
- [NSCollectionViewCompositionalLayoutConfiguration](nscollectionviewcompositionallayoutconfiguration.md): An object that defines scroll direction, section spacing, and headers or footers for the layout.
- [NSCollectionViewCompositionalLayoutSectionProvider](nscollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutSectionOrthogonalScrollingBehavior](nscollectionlayoutsectionorthogonalscrollingbehavior.md): The scrolling behavior of the layout’s sections in relation to the main layout axis.
