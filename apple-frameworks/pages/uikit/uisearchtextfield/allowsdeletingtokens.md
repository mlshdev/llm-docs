> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/allowsdeletingtokens](https://developer.apple.com/documentation/uikit/uisearchtextfield/allowsdeletingtokens)

# allowsDeletingTokens (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the user can remove tokens from the search field.

## Declaration

```swift
var allowsDeletingTokens: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

You can always remove tokens programmatically. When this value is [true](https://developer.apple.com/documentation/swift/true), the user can also delete tokens and your app needs to handle tokens being re-added to the field with Undo.

## See Also

### Supporting token interactions

- [allowsCopyingTokens](allowscopyingtokens.md): A Boolean that indicates whether the user can copy or drag tokens from the search field.
- [delegate](../uitextfield/delegate.md): The text field’s delegate.
- [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md): The interface for the delegate of a search field.
- [UISearchTextFieldPasteItem](../uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.

# allowsDeletingTokens (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the user can remove tokens from the search field.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsDeletingTokens;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

You can always remove tokens programmatically. When this value is [true](https://developer.apple.com/documentation/swift/true), the user can also delete tokens and your app needs to handle tokens being re-added to the field with Undo.

## See Also

### Supporting token interactions

- [allowsCopyingTokens](allowscopyingtokens.md): A Boolean that indicates whether the user can copy or drag tokens from the search field.
- [delegate](../uitextfield/delegate.md): The text field’s delegate.
- [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md): The interface for the delegate of a search field.
- [UISearchTextFieldPasteItem](../uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
