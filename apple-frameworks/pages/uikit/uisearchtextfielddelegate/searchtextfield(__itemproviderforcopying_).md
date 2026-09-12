> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchtextfielddelegate/searchtextfield(_:itemproviderforcopying:)](https://developer.apple.com/documentation/uikit/uisearchtextfielddelegate/searchtextfield(_:itemproviderforcopying:))

# searchTextField(\_:itemProviderForCopying:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for an object that can provide a token when the copied token is pasted.

## Declaration

```swift
optional func searchTextField(_ searchTextField: UISearchTextField, itemProviderForCopying token: UISearchToken) -> NSItemProvider
```

## Parameters

- `searchTextField`: The search field that contains the token the user is copying or dragging.
- `token`: The token the user is copying or dragging.

<a id="return-value"></a>

## Return Value

An item provider that provides a token if the user pastes or drops the token.

<a id="Discussion"></a>

## Discussion

To support drag and drop and the Cut and Copy commands, your delegate must implement this method and return an [NSItemProvider](../../foundation/nsitemprovider.md) for the requested token. Your delegate can provide a plain text representation for pasting in other contexts, but should register a custom type identifier so it can recognize and reconstruct the token when pasted into the same field.

The system only calls this delegate method if either [allowsCopyingTokens](../uisearchtextfield/allowscopyingtokens.md) or [allowsDeletingTokens](../uisearchtextfield/allowsdeletingtokens.md) is [true](https://developer.apple.com/documentation/swift/true).

# searchTextField:itemProviderForCopyingToken: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Asks the delegate for an object that can provide a token when the copied token is pasted.

## Declaration

```objectivec
- (NSItemProvider *) searchTextField:(UISearchTextField *) searchTextField itemProviderForCopyingToken:(UISearchToken *) token;
```

## Parameters

- `searchTextField`: The search field that contains the token the user is copying or dragging.
- `token`: The token the user is copying or dragging.

<a id="return-value"></a>

## Return Value

An item provider that provides a token if the user pastes or drops the token.

<a id="Discussion"></a>

## Discussion

To support drag and drop and the Cut and Copy commands, your delegate must implement this method and return an [NSItemProvider](../../foundation/nsitemprovider.md) for the requested token. Your delegate can provide a plain text representation for pasting in other contexts, but should register a custom type identifier so it can recognize and reconstruct the token when pasted into the same field.

The system only calls this delegate method if either [allowsCopyingTokens](../uisearchtextfield/allowscopyingtokens.md) or [allowsDeletingTokens](../uisearchtextfield/allowsdeletingtokens.md) is [true](https://developer.apple.com/documentation/swift/true).
