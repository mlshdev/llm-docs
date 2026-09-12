> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewcompositionallayoutconfiguration](https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayoutconfiguration)

# UICollectionViewCompositionalLayoutConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that defines scroll direction, section spacing, and headers or footers for the layout.

## Declaration

```swift
@MainActor class UICollectionViewCompositionalLayoutConfiguration
```

<a id="overview"></a>

## Overview

You use a layout configuration to modify a collection view layout’s default scroll direction, add extra spacing between each section of the layout, and add headers or footers to the entire layout.

You can pass in this configuration when creating a [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md), or you can set the [configuration](uicollectionviewcompositionallayout/configuration.md) property on an existing layout. If you modify the configuration on an existing layout, the system invalidates the layout so that it will be updated with the new configuration.

**Swift**

```swift
let headerFooterSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                             heightDimension: .estimated(44))

let header = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "header",
                                                          alignment: .top)
let footer = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "footer",
                                                          alignment: .bottom)

let config = UICollectionViewCompositionalLayoutConfiguration()
config.interSectionSpacing = 20
config.scrollDirection = .horizontal
config.boundarySupplementaryItems = [header, footer]
```

**Objective-C**

```objc
NSCollectionLayoutSize *headerFooterSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension fractionalWidthDimension:1.0] heightDimension:[NSCollectionLayoutDimension estimatedDimension:44.0]];

NSCollectionLayoutBoundarySupplementaryItem *header = [NSCollectionLayoutBoundarySupplementaryItem boundarySupplementaryItemWithLayoutSize:headerFooterSize elementKind:@"header" alignment:NSRectAlignmentTop];

NSCollectionLayoutBoundarySupplementaryItem *footer = [NSCollectionLayoutBoundarySupplementaryItem boundarySupplementaryItemWithLayoutSize:headerFooterSize elementKind:@"footer" alignment:NSRectAlignmentBottom];

UICollectionViewCompositionalLayoutConfiguration *config = [[UICollectionViewCompositionalLayoutConfiguration alloc] init];
[config setInterSectionSpacing:20.0];
[config setScrollDirection:UICollectionViewScrollDirectionHorizontal];
[config setBoundarySupplementaryItems:@[header, footer]];
```

## Topics

### Specifying scroll direction

- [scrollDirection](uicollectionviewcompositionallayoutconfiguration/scrolldirection.md): The axis that the content in the collection view layout scrolls along.

### Configuring spacing

- [interSectionSpacing](uicollectionviewcompositionallayoutconfiguration/intersectionspacing.md): The amount of space between the sections in the layout.
- [contentInsetsReference](uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md): The boundary to reference when defining content insets.
- [UIContentInsetsReference](uicontentinsetsreference.md): Constants that describe the reference point of the content insets.

### Configuring additional views

- [boundarySupplementaryItems](uicollectionviewcompositionallayoutconfiguration/boundarysupplementaryitems.md): An array of the supplementary items that are associated with the boundary edges of the entire layout, such as global headers and footers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Configuration

- [UICollectionViewCompositionalLayoutSectionProvider](uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutEnvironment](nscollectionlayoutenvironment.md): A protocol used to provide information about the layout’s container and environment traits, such as size classes and display scale factor.

# UICollectionViewCompositionalLayoutConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object that defines scroll direction, section spacing, and headers or footers for the layout.

## Declaration

```objectivec
@interface UICollectionViewCompositionalLayoutConfiguration : NSObject
```

<a id="overview"></a>

## Overview

You use a layout configuration to modify a collection view layout’s default scroll direction, add extra spacing between each section of the layout, and add headers or footers to the entire layout.

You can pass in this configuration when creating a [UICollectionViewCompositionalLayout](uicollectionviewcompositionallayout.md), or you can set the [configuration](uicollectionviewcompositionallayout/configuration.md) property on an existing layout. If you modify the configuration on an existing layout, the system invalidates the layout so that it will be updated with the new configuration.

**Swift**

```swift
let headerFooterSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0),
                                             heightDimension: .estimated(44))

let header = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "header",
                                                          alignment: .top)
let footer = NSCollectionLayoutBoundarySupplementaryItem(layoutSize: headerFooterSize,
                                                        elementKind: "footer",
                                                          alignment: .bottom)

let config = UICollectionViewCompositionalLayoutConfiguration()
config.interSectionSpacing = 20
config.scrollDirection = .horizontal
config.boundarySupplementaryItems = [header, footer]
```

**Objective-C**

```objc
NSCollectionLayoutSize *headerFooterSize = [NSCollectionLayoutSize sizeWithWidthDimension:[NSCollectionLayoutDimension fractionalWidthDimension:1.0] heightDimension:[NSCollectionLayoutDimension estimatedDimension:44.0]];

NSCollectionLayoutBoundarySupplementaryItem *header = [NSCollectionLayoutBoundarySupplementaryItem boundarySupplementaryItemWithLayoutSize:headerFooterSize elementKind:@"header" alignment:NSRectAlignmentTop];

NSCollectionLayoutBoundarySupplementaryItem *footer = [NSCollectionLayoutBoundarySupplementaryItem boundarySupplementaryItemWithLayoutSize:headerFooterSize elementKind:@"footer" alignment:NSRectAlignmentBottom];

UICollectionViewCompositionalLayoutConfiguration *config = [[UICollectionViewCompositionalLayoutConfiguration alloc] init];
[config setInterSectionSpacing:20.0];
[config setScrollDirection:UICollectionViewScrollDirectionHorizontal];
[config setBoundarySupplementaryItems:@[header, footer]];
```

## Topics

### Specifying scroll direction

- [scrollDirection](uicollectionviewcompositionallayoutconfiguration/scrolldirection.md): The axis that the content in the collection view layout scrolls along.

### Configuring spacing

- [interSectionSpacing](uicollectionviewcompositionallayoutconfiguration/intersectionspacing.md): The amount of space between the sections in the layout.
- [contentInsetsReference](uicollectionviewcompositionallayoutconfiguration/contentinsetsreference.md): The boundary to reference when defining content insets.
- [UIContentInsetsReference](uicontentinsetsreference.md): Constants that describe the reference point of the content insets.

### Configuring additional views

- [boundarySupplementaryItems](uicollectionviewcompositionallayoutconfiguration/boundarysupplementaryitems.md): An array of the supplementary items that are associated with the boundary edges of the entire layout, such as global headers and footers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuration

- [UICollectionViewCompositionalLayoutSectionProvider](uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [NSCollectionLayoutEnvironment](nscollectionlayoutenvironment.md): A protocol used to provide information about the layout’s container and environment traits, such as size classes and display scale factor.
