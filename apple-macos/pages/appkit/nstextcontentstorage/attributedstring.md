> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstorage/attributedstring](https://developer.apple.com/documentation/appkit/nstextcontentstorage/attributedstring)

# attributedString (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An attributed string that contains the contents of the document.

## Declaration

```swift
@NSCopying var attributedString: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an [NSTextStorage](../nstextstorage.md) object. When you need to change the text in your view, fetch this string and make your changes to it. When making changes, place them in a block and pass them to the [performEditingTransaction(\_:)](../nstextcontentmanager/performeditingtransaction%28__%29.md) method. Wrapping changes in an edit transaction gives the rest of the text system an opportunity to respond to those changes. For example, the layout manager uses edit transactions to update the text layout for any content in the visible portion of your view.

If you assign a new value to this property, the object replaces the current string with the one you provide. Don’t set the value of this property to `nil`.

# attributedString (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An attributed string that contains the contents of the document.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * attributedString;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an [NSTextStorage](../nstextstorage.md) object. When you need to change the text in your view, fetch this string and make your changes to it. When making changes, place them in a block and pass them to the [performEditingTransactionUsingBlock:](../nstextcontentmanager/performeditingtransaction%28__%29.md) method. Wrapping changes in an edit transaction gives the rest of the text system an opportunity to respond to those changes. For example, the layout manager uses edit transactions to update the text layout for any content in the visible portion of your view.

If you assign a new value to this property, the object replaces the current string with the one you provide. Don’t set the value of this property to `nil`.
