> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfield/allowscopyingtokens](https://developer.apple.com/documentation/uikit/uisearchtextfield/allowscopyingtokens)

# allowsCopyingTokens (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the user can copy or drag tokens from the search field.

## Declaration

```swift
var allowsCopyingTokens: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

To support copying tokens, [allowsCopyingTokens](allowscopyingtokens.md) must be [true](https://developer.apple.com/documentation/swift/true) and the search field’s [delegate](../uitextfield/delegate.md) must also implement [searchTextField(\_:itemProviderForCopying:)](../uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md).

[UISearchTextField](../uisearchtextfield.md) enables the Copy command when a user selects text, even if the selection also includes tokens and [allowsCopyingTokens](allowscopyingtokens.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting token interactions

- [allowsDeletingTokens](allowsdeletingtokens.md): A Boolean that indicates whether the user can remove tokens from the search field.
- [delegate](../uitextfield/delegate.md): The text field’s delegate.
- [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md): The interface for the delegate of a search field.
- [UISearchTextFieldPasteItem](../uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.

# allowsCopyingTokens (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean that indicates whether the user can copy or drag tokens from the search field.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsCopyingTokens;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [true](https://developer.apple.com/documentation/swift/true).

To support copying tokens, [allowsCopyingTokens](allowscopyingtokens.md) must be [true](https://developer.apple.com/documentation/swift/true) and the search field’s [delegate](../uitextfield/delegate.md) must also implement [searchTextField:itemProviderForCopyingToken:](../uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md).

[UISearchTextField](../uisearchtextfield.md) enables the Copy command when a user selects text, even if the selection also includes tokens and [allowsCopyingTokens](allowscopyingtokens.md) is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Supporting token interactions

- [allowsDeletingTokens](allowsdeletingtokens.md): A Boolean that indicates whether the user can remove tokens from the search field.
- [delegate](../uitextfield/delegate.md): The text field’s delegate.
- [UISearchTextFieldDelegate](../uisearchtextfielddelegate.md): The interface for the delegate of a search field.
- [UISearchTextFieldPasteItem](../uisearchtextfieldpasteitem.md): A protocol that supports pasting tokens.
