> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/attributedstring](https://developer.apple.com/documentation/uikit/nstextcontentstorage/attributedstring)

# attributedString (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

An attributed string that contains the contents of the document.

## Declaration

```objectivec
@property (copy, nullable) NSAttributedString * attributedString;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an [NSTextStorage](../nstextstorage.md) object. When you need to change the text in your view, fetch this string and make your changes to it. When making changes, place them in a block and pass them to the [performEditingTransactionUsingBlock:](../nstextcontentmanager/performeditingtransaction%28__%29.md) method. Wrapping changes in an edit transaction gives the rest of the text system an opportunity to respond to those changes. For example, the layout manager uses edit transactions to update the text layout for any content in the visible portion of your view.

If you assign a new value to this property, the object replaces the current string with the one you provide. Don’t set the value of this property to `nil`.
