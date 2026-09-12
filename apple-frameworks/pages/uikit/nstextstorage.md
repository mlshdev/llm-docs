> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextstorage](https://developer.apple.com/documentation/uikit/nstextstorage)

# NSTextStorage (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The fundamental storage mechanism of TextKit that contains the text managed by the system.

## Declaration

```swift
class NSTextStorage
```

<a id="overview"></a>

## Overview

[NSTextStorage](nstextstorage.md) is a semi-concrete subclass of [NSMutableAttributedString](../foundation/nsmutableattributedstring.md) that adds behavior for managing a set of client [NSLayoutManager](nslayoutmanager.md) objects. A text storage object notifies its layout managers of changes to its characters or attributes, which lets the layout managers redisplay the text as needed.

You can access a text storage object from any thread of your app, but your app must guarantee access from only one thread at a time.

In macOS, this class also defines properties for getting and setting scriptable attributes of [NSTextStorage](nstextstorage.md) objects. Unless you’re dealing with scriptability, you shouldn’t access these properties directly. In particular, using the [characters](https://developer.apple.com/documentation/appkit/nstextstorage/characters), [words](https://developer.apple.com/documentation/appkit/nstextstorage/words), or [paragraphs](https://developer.apple.com/documentation/appkit/nstextstorage/paragraphs) properties is an inefficient way to manipulate the text storage, since accessing these properties involves the creation of many objects. Instead, use the text access methods defined by [NSMutableAttributedString](../foundation/nsmutableattributedstring.md), [NSAttributedString](../foundation/nsattributedstring.md), [NSMutableString](../foundation/nsmutablestring.md), and [NSString](../foundation/nsstring.md) to perform character-level manipulation.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The [NSTextStorage](nstextstorage.md) class implements change management through the [beginEditing()](../foundation/nsmutableattributedstring/beginediting%28%29.md) and [endEditing()](../foundation/nsmutableattributedstring/endediting%28%29.md) methods, as well as verification of attributes, delegate handling, and layout management notification. The one aspect it doesn’t implement is managing the actual attributed string storage, which subclasses manage by overriding the two [NSAttributedString](../foundation/nsattributedstring.md) primitives:

- [string](../foundation/nsattributedstring/string.md)
- [attributes(at:effectiveRange:)](../foundation/nsattributedstring/attributes%28at_effectiverange_%29.md)

Subclasses must also override two [NSMutableAttributedString](../foundation/nsmutableattributedstring.md) primitives:

- [replaceCharacters(in:with:)](../foundation/nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md)
- [setAttributes(\_:range:)](../foundation/nsmutableattributedstring/setattributes%28__range_%29.md)

These primitives should perform the change, then call [edited(\_:range:changeInLength:)](nstextstorage/edited%28__range_changeinlength_%29.md) to let the parent class know there are changes.

## Topics

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.
- [NSTextStorageDelegate](nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.

### Accessing the layout managers

- [layoutManagers](nstextstorage/layoutmanagers.md): The layout managers for the text storage object.
- [addLayoutManager(\_:)](nstextstorage/addlayoutmanager%28__%29.md): Adds a layout manager to the text storage object’s set of layout managers.
- [removeLayoutManager(\_:)](nstextstorage/removelayoutmanager%28__%29.md): Removes a layout manager from the text storage object’s set of layout managers.

### Managing edits

- [edited(\_:range:changeInLength:)](nstextstorage/edited%28__range_changeinlength_%29.md): Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.
- [processEditing()](nstextstorage/processediting%28%29.md): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

### Fixing the string attributes

- [invalidateAttributes(in:)](nstextstorage/invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [ensureAttributesAreFixed(in:)](nstextstorage/ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](nstextstorage/fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.

### Determining the nature of changes

- [editedMask](nstextstorage/editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [editedRange](nstextstorage/editedrange.md): The range of text that contains changes.
- [changeInLength](nstextstorage/changeinlength.md): The difference between the current length of the edited range and its length before editing.

### Accessing scriptable properties

- [attributeRuns](https://developer.apple.com/documentation/appkit/nstextstorage/attributeruns): The text storage contents as an array of attribute runs.
- [paragraphs](https://developer.apple.com/documentation/appkit/nstextstorage/paragraphs): The text storage contents as an array of paragraphs.
- [words](https://developer.apple.com/documentation/appkit/nstextstorage/words): The text storage contents as an array of words.
- [characters](https://developer.apple.com/documentation/appkit/nstextstorage/characters): The text storage contents as an array of characters.
- [font](https://developer.apple.com/documentation/appkit/nstextstorage/font): The font for the text storage.
- [foregroundColor](https://developer.apple.com/documentation/appkit/nstextstorage/foregroundcolor): The color for the text.

### Constants

- [NSTextStorage.EditActions](nstextstorage/editactions.md): Constants that indicate the types of changes.

### Notifications

- [willProcessEditingNotification](nstextstorage/willprocesseditingnotification.md): A notification that posts before a text storage begins processing edits.
- [didProcessEditingNotification](nstextstorage/didprocesseditingnotification.md): A notification that posts after a text storage finishes processing edits.

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.
- [NSTextStorageObserving](nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.

## Relationships

### Inherits From

- [NSMutableAttributedString](../foundation/nsmutableattributedstring.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSItemProviderReading](../foundation/nsitemproviderreading.md)
- [NSItemProviderWriting](../foundation/nsitemproviderwriting.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### TextKit 1

- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.

# NSTextStorage (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The fundamental storage mechanism of TextKit that contains the text managed by the system.

## Declaration

```objectivec
@interface NSTextStorage : NSMutableAttributedString
```

<a id="overview"></a>

## Overview

[NSTextStorage](nstextstorage.md) is a semi-concrete subclass of [NSMutableAttributedString](../foundation/nsmutableattributedstring.md) that adds behavior for managing a set of client [NSLayoutManager](nslayoutmanager.md) objects. A text storage object notifies its layout managers of changes to its characters or attributes, which lets the layout managers redisplay the text as needed.

You can access a text storage object from any thread of your app, but your app must guarantee access from only one thread at a time.

In macOS, this class also defines properties for getting and setting scriptable attributes of [NSTextStorage](nstextstorage.md) objects. Unless you’re dealing with scriptability, you shouldn’t access these properties directly. In particular, using the [characters](https://developer.apple.com/documentation/appkit/nstextstorage/characters), [words](https://developer.apple.com/documentation/appkit/nstextstorage/words), or [paragraphs](https://developer.apple.com/documentation/appkit/nstextstorage/paragraphs) properties is an inefficient way to manipulate the text storage, since accessing these properties involves the creation of many objects. Instead, use the text access methods defined by [NSMutableAttributedString](../foundation/nsmutableattributedstring.md), [NSAttributedString](../foundation/nsattributedstring.md), [NSMutableString](../foundation/nsmutablestring.md), and [NSString](../foundation/nsstring.md) to perform character-level manipulation.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The [NSTextStorage](nstextstorage.md) class implements change management through the [beginEditing](../foundation/nsmutableattributedstring/beginediting%28%29.md) and [endEditing](../foundation/nsmutableattributedstring/endediting%28%29.md) methods, as well as verification of attributes, delegate handling, and layout management notification. The one aspect it doesn’t implement is managing the actual attributed string storage, which subclasses manage by overriding the two [NSAttributedString](../foundation/nsattributedstring.md) primitives:

- [string](../foundation/nsattributedstring/string.md)
- [attributesAtIndex:effectiveRange:](../foundation/nsattributedstring/attributes%28at_effectiverange_%29.md)

Subclasses must also override two [NSMutableAttributedString](../foundation/nsmutableattributedstring.md) primitives:

- [replaceCharactersInRange:withString:](../foundation/nsmutableattributedstring/replacecharacters%28in_with_%29-6oq9r.md)
- [setAttributes:range:](../foundation/nsmutableattributedstring/setattributes%28__range_%29.md)

These primitives should perform the change, then call [edited:range:changeInLength:](nstextstorage/edited%28__range_changeinlength_%29.md) to let the parent class know there are changes.

## Topics

### Processing the editing actions

- [delegate](nstextstorage/delegate.md): The delegate for the text storage object.
- [NSTextStorageDelegate](nstextstoragedelegate.md): The optional methods that delegates of text storage objects implement to handle text-edit processing.

### Accessing the layout managers

- [layoutManagers](nstextstorage/layoutmanagers.md): The layout managers for the text storage object.
- [addLayoutManager:](nstextstorage/addlayoutmanager%28__%29.md): Adds a layout manager to the text storage object’s set of layout managers.
- [removeLayoutManager:](nstextstorage/removelayoutmanager%28__%29.md): Removes a layout manager from the text storage object’s set of layout managers.

### Managing edits

- [edited:range:changeInLength:](nstextstorage/edited%28__range_changeinlength_%29.md): Tracks changes made to the text storage object, allowing the text storage to record the full extent of changes.
- [processEditing](nstextstorage/processediting%28%29.md): Cleans up changes to the text storage object and notifies its delegate and layout managers of changes.

### Fixing the string attributes

- [invalidateAttributesInRange:](nstextstorage/invalidateattributes%28in_%29.md): Invalidates attributes in the specified range.
- [ensureAttributesAreFixedInRange:](nstextstorage/ensureattributesarefixed%28in_%29.md): Ensures that attribute fixing occurs in the specified range.
- [fixesAttributesLazily](nstextstorage/fixesattributeslazily.md): A Boolean value that indicates whether the text storage object fixes attributes lazily.

### Determining the nature of changes

- [editedMask](nstextstorage/editedmask.md): A mask that describes the kinds of edits pending for the text storage object.
- [editedRange](nstextstorage/editedrange.md): The range of text that contains changes.
- [changeInLength](nstextstorage/changeinlength.md): The difference between the current length of the edited range and its length before editing.

### Accessing scriptable properties

- [attributeRuns](https://developer.apple.com/documentation/appkit/nstextstorage/attributeruns): The text storage contents as an array of attribute runs.
- [paragraphs](https://developer.apple.com/documentation/appkit/nstextstorage/paragraphs): The text storage contents as an array of paragraphs.
- [words](https://developer.apple.com/documentation/appkit/nstextstorage/words): The text storage contents as an array of words.
- [characters](https://developer.apple.com/documentation/appkit/nstextstorage/characters): The text storage contents as an array of characters.
- [font](https://developer.apple.com/documentation/appkit/nstextstorage/font): The font for the text storage.
- [foregroundColor](https://developer.apple.com/documentation/appkit/nstextstorage/foregroundcolor): The color for the text.

### Constants

- [NSTextStorageEditActions](nstextstorage/editactions.md): Constants that indicate the types of changes.
- [NSTextStorageEditedOptions](https://developer.apple.com/documentation/appkit/nstextstorageeditedoptions): Deprecated. \*\* Deprecations \*\*\*

### Notifications

- [NSTextStorageWillProcessEditingNotification](nstextstorage/willprocesseditingnotification.md): A notification that posts before a text storage begins processing edits.
- [NSTextStorageDidProcessEditingNotification](nstextstorage/didprocesseditingnotification.md): A notification that posts after a text storage finishes processing edits.

### Accessing the storage controller

- [textStorageObserver](nstextstorage/textstorageobserver.md): The observer for the text storage object.
- [NSTextStorageObserving](nstextstorageobserving.md): Optional methods that delegates implement to handle editing and transaction processing.

## Relationships

### Inherits From

- [NSMutableAttributedString](../foundation/nsmutableattributedstring.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### TextKit 1

- [NSLayoutManager](nslayoutmanager.md): An object that coordinates the layout and display of text characters.
