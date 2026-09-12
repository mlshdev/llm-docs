> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewelement](https://developer.apple.com/documentation/appkit/nscollectionviewelement)

# NSCollectionViewElement (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to manage the content in a collection view.

## Declaration

```swift
protocol NSCollectionViewElement : NSUserInterfaceItemIdentification, NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt this protocol in the classes that you use to display content for items, supplementary views, and decoration views in a collection view. The methods of this protocol are optional and provide support for applying layout attributes and for cleaning up elements when they move offscreen and are recycled.

Collection view items—that is, instances of the [NSCollectionViewItem](nscollectionviewitem.md) class—already adopt this protocol. For supplementary and decoration views, adopt this protocol in the custom view classes you use to represent that content.

## Topics

### Reusing Elements

- [prepareForReuse()](nscollectionviewelement/prepareforreuse%28%29.md): Performs any necessary cleanup to prepare the element for use again.

### Managing Layout Changes

- [preferredLayoutAttributesFitting(\_:)](nscollectionviewelement/preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [apply(\_:)](nscollectionviewelement/apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransition(from:to:)](nscollectionviewelement/willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransition(from:to:)](nscollectionviewelement/didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

### Inherited By

- [NSCollectionViewSectionHeaderView](nscollectionviewsectionheaderview.md)

### Conforming Types

- [NSCollectionViewItem](nscollectionviewitem.md)

## See Also

### Items

- [NSCollectionViewItem](nscollectionviewitem.md): The visual representation for a single data element in a collection view.

# NSCollectionViewElement (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to manage the content in a collection view.

## Declaration

```objectivec
@protocol NSCollectionViewElement <NSObject, NSUserInterfaceItemIdentification>
```

<a id="overview"></a>

## Overview

Adopt this protocol in the classes that you use to display content for items, supplementary views, and decoration views in a collection view. The methods of this protocol are optional and provide support for applying layout attributes and for cleaning up elements when they move offscreen and are recycled.

Collection view items—that is, instances of the [NSCollectionViewItem](nscollectionviewitem.md) class—already adopt this protocol. For supplementary and decoration views, adopt this protocol in the custom view classes you use to represent that content.

## Topics

### Reusing Elements

- [prepareForReuse](nscollectionviewelement/prepareforreuse%28%29.md): Performs any necessary cleanup to prepare the element for use again.

### Managing Layout Changes

- [preferredLayoutAttributesFittingAttributes:](nscollectionviewelement/preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [applyLayoutAttributes:](nscollectionviewelement/apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransitionFromLayout:toLayout:](nscollectionviewelement/willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](nscollectionviewelement/didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)

### Inherited By

- [NSCollectionViewSectionHeaderView](nscollectionviewsectionheaderview.md)

### Conforming Types

- [NSCollectionViewItem](nscollectionviewitem.md)

## See Also

### Items

- [NSCollectionViewItem](nscollectionviewitem.md): The visual representation for a single data element in a collection view.
