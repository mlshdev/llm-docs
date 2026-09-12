> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage](https://developer.apple.com/documentation/uikit/nstextcontentstorage)

# NSTextContentStorage (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A concrete object for managing your view’s text content and generating the text elements necessary for layout.

## Declaration

```swift
class NSTextContentStorage
```

<a id="overview"></a>

## Overview

An [NSTextContentStorage](nstextcontentstorage.md) object provides the backing store for a view that contains text. This object stores the text in an attributed string object, and defaults to using an [NSTextStorage](nstextstorage.md) object. It also maps portions of the text to [NSTextElement](nstextelement.md) objects to organize the text into paragraphs, lists, and other common element types found in text content. During layout, TextKit uses these elements to lay out and render the text in your view.

The standard system views use an [NSTextContentStorage](nstextcontentstorage.md) object to manage their text content. When building a custom text view, use this type to store the text for your view. [NSTextContentStorage](nstextcontentstorage.md) works with an associated [NSTextLayoutManager](nstextlayoutmanager.md) to lay out your view’s text. When someone inserts new text or edits the existing text, call the [performEditingTransaction(\_:)](nstextcontentmanager/performeditingtransaction%28__%29.md) method and use a block to modify the contents of the [attributedString](nstextcontentstorage/attributedstring.md) property. Wrapping your edits in an edit transaction lets the rest of the text system respond to those changes.

TextKit uses the abstract [NSTextLocation](nstextlocation.md) protocol to identify locations within text. [NSTextContentStorage](nstextcontentstorage.md) manager provides its own implementation of this protocol to represent locations within its storage object. To get the start and end locations, access the object’s [documentRange](nstextelementprovider/documentrange.md) property and use them to create new location objects. If you provide your own implementation of the [NSTextLocation](nstextlocation.md) protocol to manage locations in your content, subclass [NSTextContentManager](nstextcontentmanager.md) and implement your own storage object to support those locations.

## Topics

### Managing the stored text

- [attributedString](nstextcontentstorage/attributedstring.md): An attributed string that contains the contents of the document.

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.
- [NSTextContentStorageDelegate](nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.

### Finding ranges, locations, and offsets

- [location(\_:offsetBy:)](nstextcontentstorage/location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [offset(from:to:)](nstextcontentstorage/offset%28from_to_%29.md): Returns the number of characters between the specified locations.
- [adjustedRange(from:forEditingTextSelection:)](nstextcontentstorage/adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.

### Managing text elements

- [textElement(for:)](nstextcontentstorage/textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [attributedString(for:)](nstextcontentstorage/attributedstring%28for_%29.md): Returns a new attributed string for the text element.

### Instance Properties

- [includesTextListMarkers](nstextcontentstorage/includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

## Relationships

### Inherits From

- [NSTextContentManager](nstextcontentmanager.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [NSTextElementProvider](nstextelementprovider.md)
- [NSTextStorageObserving](nstextstorageobserving.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Text management

- [NSTextContentManager](nstextcontentmanager.md): An abstract class that defines the interface and a default implementation for managing the text document contents.
- [NSAttributedString](../foundation/nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](../foundation/nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

# NSTextContentStorage (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A concrete object for managing your view’s text content and generating the text elements necessary for layout.

## Declaration

```objectivec
@interface NSTextContentStorage : NSTextContentManager
```

<a id="overview"></a>

## Overview

An [NSTextContentStorage](nstextcontentstorage.md) object provides the backing store for a view that contains text. This object stores the text in an attributed string object, and defaults to using an [NSTextStorage](nstextstorage.md) object. It also maps portions of the text to [NSTextElement](nstextelement.md) objects to organize the text into paragraphs, lists, and other common element types found in text content. During layout, TextKit uses these elements to lay out and render the text in your view.

The standard system views use an [NSTextContentStorage](nstextcontentstorage.md) object to manage their text content. When building a custom text view, use this type to store the text for your view. [NSTextContentStorage](nstextcontentstorage.md) works with an associated [NSTextLayoutManager](nstextlayoutmanager.md) to lay out your view’s text. When someone inserts new text or edits the existing text, call the [performEditingTransactionUsingBlock:](nstextcontentmanager/performeditingtransaction%28__%29.md) method and use a block to modify the contents of the [attributedString](nstextcontentstorage/attributedstring.md) property. Wrapping your edits in an edit transaction lets the rest of the text system respond to those changes.

TextKit uses the abstract [NSTextLocation](nstextlocation.md) protocol to identify locations within text. [NSTextContentStorage](nstextcontentstorage.md) manager provides its own implementation of this protocol to represent locations within its storage object. To get the start and end locations, access the object’s [documentRange](nstextelementprovider/documentrange.md) property and use them to create new location objects. If you provide your own implementation of the [NSTextLocation](nstextlocation.md) protocol to manage locations in your content, subclass [NSTextContentManager](nstextcontentmanager.md) and implement your own storage object to support those locations.

## Topics

### Managing the stored text

- [attributedString](nstextcontentstorage/attributedstring.md): An attributed string that contains the contents of the document.

### Accessing paragraphs

- [delegate](nstextcontentstorage/delegate.md): The delegate for the content storage object.
- [NSTextContentStorageDelegate](nstextcontentstoragedelegate.md): The optional methods that delegates of content storage objects implement to handle content processing.

### Finding ranges, locations, and offsets

- [locationFromLocation:withOffset:](nstextcontentstorage/location%28__offsetby_%29.md): Returns a new text location object based on an existing location and offset you provide.
- [offsetFromLocation:toLocation:](nstextcontentstorage/offset%28from_to_%29.md): Returns the number of characters between the specified locations.
- [adjustedRangeFromRange:forEditingTextSelection:](nstextcontentstorage/adjustedrange%28from_foreditingtextselection_%29.md): Returns the text range, if any, in the backing store that required manual adjustment after editing.

### Managing text elements

- [textElementForAttributedString:](nstextcontentstorage/textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
- [attributedStringForTextElement:](nstextcontentstorage/attributedstring%28for_%29.md): Returns a new attributed string for the text element.

### Notifications

- [NSTextContentStorageUnsupportedAttributeAddedNotification](nstextcontentstorageunsupportedattributeaddednotification.md): Posted by `NSTextContentStorage` when a text attribute unsupported by `NSTextContentStorage` is added to the underlying text storage.

### Instance Properties

- [includesTextListMarkers](nstextcontentstorage/includestextlistmarkers.md): When `true`, `NSTextContentStorage` assumes the paragraph with `NSTextList` includes the text list marker string.

## Relationships

### Inherits From

- [NSTextContentManager](nstextcontentmanager.md)

### Conforms To

- [NSTextStorageObserving](nstextstorageobserving.md)

## See Also

### Text management

- [NSTextContentManager](nstextcontentmanager.md): An abstract class that defines the interface and a default implementation for managing the text document contents.
- [NSAttributedString](../foundation/nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](../foundation/nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
- [TextKit string attributes](textkit-string-attributes.md): UIKit-specific keys and values for displaying text and managing documents.
