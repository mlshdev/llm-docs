> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewsectionheaderview](https://developer.apple.com/documentation/appkit/nscollectionviewsectionheaderview)

# NSCollectionViewSectionHeaderView (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that defines a button to control the collapse of a collection view’s section.

## Declaration

```swift
protocol NSCollectionViewSectionHeaderView : NSCollectionViewElement
```

<a id="overview"></a>

## Overview

A collection view can support a section that can collapse into a single horizontally scrollable row, similar to the groupings in the icon view in Finder. To ensure that the collection view can communicate with the button that controls the collapsing of a section, the section header view object should conform to this protocol and connect the button’s outlet to [sectionCollapseButton](nscollectionviewsectionheaderview/sectioncollapsebutton.md).

## Topics

### Providing a Collapse Button

- [sectionCollapseButton](nscollectionviewsectionheaderview/sectioncollapsebutton.md): A control that lets users collapse and open a collection view section.

## Relationships

### Inherits From

- [NSCollectionViewElement](nscollectionviewelement.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

## See Also

### View

- [NSCollectionView](nscollectionview.md): An ordered collection of data items displayed in a customizable layout.

# NSCollectionViewSectionHeaderView (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that defines a button to control the collapse of a collection view’s section.

## Declaration

```objectivec
@protocol NSCollectionViewSectionHeaderView <NSCollectionViewElement>
```

<a id="overview"></a>

## Overview

A collection view can support a section that can collapse into a single horizontally scrollable row, similar to the groupings in the icon view in Finder. To ensure that the collection view can communicate with the button that controls the collapsing of a section, the section header view object should conform to this protocol and connect the button’s outlet to [sectionCollapseButton](nscollectionviewsectionheaderview/sectioncollapsebutton.md).

## Topics

### Providing a Collapse Button

- [sectionCollapseButton](nscollectionviewsectionheaderview/sectioncollapsebutton.md): A control that lets users collapse and open a collection view section.

## Relationships

### Inherits From

- [NSCollectionViewElement](nscollectionviewelement.md)

## See Also

### View

- [NSCollectionView](nscollectionview.md): An ordered collection of data items displayed in a customizable layout.
