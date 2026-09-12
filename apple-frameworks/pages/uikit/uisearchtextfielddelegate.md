> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfielddelegate](https://developer.apple.com/documentation/uikit/uisearchtextfielddelegate)

# UISearchTextFieldDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for the delegate of a search field.

## Declaration

```swift
@MainActor protocol UISearchTextFieldDelegate : UITextFieldDelegate
```

<a id="overview"></a>

## Overview

A search field asks its delegate for an [NSItemProvider](../foundation/nsitemprovider.md) when the user starts to copy or move a token. To support these interactions, set the search field’s [delegate](uitextfield/delegate.md) to an instance of [UISearchTextFieldDelegate](uisearchtextfielddelegate.md) that implements [searchTextField(\_:itemProviderForCopying:)](uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md) and set the search field’s [allowsCopyingTokens](uisearchtextfield/allowscopyingtokens.md) property to [true](https://developer.apple.com/documentation/swift/true).

The search field’s [pasteDelegate](uitextpasteconfigurationsupporting/pastedelegate.md) handles pasting and dropping tokens as well as text.

## Topics

### Providing information to copy and drag

- [searchTextField(\_:itemProviderForCopying:)](uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md): Asks the delegate for an object that can provide a token when the copied token is pasted.

### Responding to search suggestion selections

- [searchTextField(\_:didSelect:)](uisearchtextfielddelegate/searchtextfield%28__didselect_%29.md): Tells the delegate when a person selects a search suggestion in the search text field.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UITextFieldDelegate](uitextfielddelegate.md)

## See Also

### Search field

- [UISearchTextField](uisearchtextfield.md): A view for displaying and editing text and search tokens.
- [UISearchToken](uisearchtoken.md): Search criteria in a search text field, represented by text and an optional icon.

# UISearchTextFieldDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for the delegate of a search field.

## Declaration

```objectivec
@protocol UISearchTextFieldDelegate <UITextFieldDelegate>
```

<a id="overview"></a>

## Overview

A search field asks its delegate for an [NSItemProvider](../foundation/nsitemprovider.md) when the user starts to copy or move a token. To support these interactions, set the search field’s [delegate](uitextfield/delegate.md) to an instance of [UISearchTextFieldDelegate](uisearchtextfielddelegate.md) that implements [searchTextField:itemProviderForCopyingToken:](uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md) and set the search field’s [allowsCopyingTokens](uisearchtextfield/allowscopyingtokens.md) property to [true](https://developer.apple.com/documentation/swift/true).

The search field’s [pasteDelegate](uitextpasteconfigurationsupporting/pastedelegate.md) handles pasting and dropping tokens as well as text.

## Topics

### Providing information to copy and drag

- [searchTextField:itemProviderForCopyingToken:](uisearchtextfielddelegate/searchtextfield%28__itemproviderforcopying_%29.md): Asks the delegate for an object that can provide a token when the copied token is pasted.

### Responding to search suggestion selections

- [searchTextField:didSelectSuggestion:](uisearchtextfielddelegate/searchtextfield%28__didselect_%29.md): Tells the delegate when a person selects a search suggestion in the search text field.

## Relationships

### Inherits From

- [UITextFieldDelegate](uitextfielddelegate.md)

## See Also

### Search field

- [UISearchTextField](uisearchtextfield.md): A view for displaying and editing text and search tokens.
- [UISearchToken](uisearchtoken.md): Search criteria in a search text field, represented by text and an optional icon.
