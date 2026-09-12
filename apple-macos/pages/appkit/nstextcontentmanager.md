> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentmanager](https://developer.apple.com/documentation/appkit/nstextcontentmanager)

# NSTextContentManager (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An abstract class that defines the interface and a default implementation for managing the text document contents.

## Declaration

```swift
class NSTextContentManager
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)

## Topics

### Creating a content manager

- [init()](nstextcontentmanager/init%28%29.md): Creates a new content manager.
- [init(coder:)](nstextcontentmanager/init%28coder_%29.md): Creates a new content manager object from data in an unarchiver.

### Controlling backing store synchronization

- [automaticallySynchronizesToBackingStore](nstextcontentmanager/automaticallysynchronizestobackingstore.md): Determines whether to automatically synchronize with the backing store when an editing transaction finishes.

### Performing transactions

- [hasEditingTransaction](nstextcontentmanager/haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [performEditingTransaction(\_:)](nstextcontentmanager/performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.
- [recordEditAction(in:newTextRange:)](nstextcontentmanager/recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.

### Working with layout managers

- [primaryTextLayoutManager](nstextcontentmanager/primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](nstextcontentmanager/textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](nstextcontentmanager/automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager(\_:)](nstextcontentmanager/addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager(\_:)](nstextcontentmanager/removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers(\_:)](nstextcontentmanager/synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

### Customizing and validating text elements

- [delegate](nstextcontentmanager/delegate.md): The delegate for the content manager object.
- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
- [NSTextContentManager.EnumerationOptions](nstextcontentmanager/enumerationoptions.md): Values that control the order in which the framework enumerates text elements.

### Finding a specific text element

- [textElements(for:)](nstextcontentmanager/textelements%28for_%29.md): Returns an array of text elements that intersect with the range you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextContentStorage](nstextcontentstorage.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [NSTextElementProvider](nstextelementprovider.md)

## See Also

### Text management

- [NSTextContentStorage](nstextcontentstorage.md): A concrete object for managing your view’s text content and generating the text elements necessary for layout.
- [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.

# NSTextContentManager (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An abstract class that defines the interface and a default implementation for managing the text document contents.

## Declaration

```objectivec
@interface NSTextContentManager : NSObject
```

## Mentioned In

- [Adding Writing Tools support to a custom AppKit view](adding-writing-tools-support-to-a-custom-nsview.md)

## Topics

### Creating a content manager

- [init](nstextcontentmanager/init%28%29.md): Creates a new content manager.
- [initWithCoder:](nstextcontentmanager/init%28coder_%29.md): Creates a new content manager object from data in an unarchiver.

### Controlling backing store synchronization

- [automaticallySynchronizesToBackingStore](nstextcontentmanager/automaticallysynchronizestobackingstore.md): Determines whether to automatically synchronize with the backing store when an editing transaction finishes.

### Performing transactions

- [hasEditingTransaction](nstextcontentmanager/haseditingtransaction.md): Indicates there’s an active editing transaction from the primary text layout manager.
- [performEditingTransactionUsingBlock:](nstextcontentmanager/performeditingtransaction%28__%29.md): Performs an editing transaction and invokes a block upon completion.
- [recordEditActionInRange:newTextRange:](nstextcontentmanager/recordeditaction%28in_newtextrange_%29.md): Records information about an edit action to the transaction.

### Working with layout managers

- [primaryTextLayoutManager](nstextcontentmanager/primarytextlayoutmanager.md): The primary text layout manager for this content.
- [textLayoutManagers](nstextcontentmanager/textlayoutmanagers.md): The array of text layout managers associated with this text content manager.
- [automaticallySynchronizesTextLayoutManagers](nstextcontentmanager/automaticallysynchronizestextlayoutmanagers.md): Determines if the framework should automatically synchronize all text layout managers when exiting an editing transaction.
- [addTextLayoutManager:](nstextcontentmanager/addtextlayoutmanager%28__%29.md): Adds the layout manager you provide to the list of layout managers.
- [removeTextLayoutManager:](nstextcontentmanager/removetextlayoutmanager%28__%29.md): Removes the layout manager you specifiy from the list of layout managers.
- [synchronizeTextLayoutManagers:](nstextcontentmanager/synchronizetextlayoutmanagers%28__%29.md): Synchronizes changes to all nonprimary text layout managers.

### Customizing and validating text elements

- [delegate](nstextcontentmanager/delegate.md): The delegate for the content manager object.
- [NSTextContentManagerDelegate](nstextcontentmanagerdelegate.md): The optional methods that delegates of content manager objects implement for customizing or validating text elements.
- [NSTextContentManagerEnumerationOptions](nstextcontentmanager/enumerationoptions.md): Values that control the order in which the framework enumerates text elements.

### Finding a specific text element

- [textElementsForRange:](nstextcontentmanager/textelements%28for_%29.md): Returns an array of text elements that intersect with the range you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSTextContentStorage](nstextcontentstorage.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [NSTextElementProvider](nstextelementprovider.md)

## See Also

### Text management

- [NSTextContentStorage](nstextcontentstorage.md): A concrete object for managing your view’s text content and generating the text elements necessary for layout.
- [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
- [TextKit string attributes](textkit-string-attributes.md): AppKit-specific keys and values for displaying text and managing documents.
