> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenwatcher/addremovalhandler(_:fortokenid:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenwatcher/addremovalhandler(_:fortokenid:))

# addRemovalHandler(\_:forTokenID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Adds a removal handler for the specified token ID.

## Declaration

```swift
func addRemovalHandler(_ removalHandler: @escaping (String) -> Void, forTokenID tokenID: String)
```

## Parameters

- `removalHandler`: A block to be called when the specified token is removed. This block takes a single argument:

  - **tokenID**: The identifier of the removed token.
- `tokenID`: The identifier of the token to watch for removal.

  If [tokenIDs](tokenids.md) doesn’t contain `tokenID`, `insertionHandler` is executed immediately.

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="Discussion"></a>

## Discussion

You typically call this method in the `insertionHandler` passed to the token watcher initializer.

Adding a removal handler will remove any existing removal handlers for the specified token ID.

## See Also

### Configuring Handlers

- [setInsertionHandler(\_:)](setinsertionhandler%28__%29.md): Sets an insertion handler closure to be called when a new token is inserted into the system.

# addRemovalHandler:forTokenID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Adds a removal handler for the specified token ID.

## Declaration

```objectivec
- (void) addRemovalHandler:(void (^)(NSString *tokenID)) removalHandler forTokenID:(NSString *) tokenID;
```

## Parameters

- `removalHandler`: A block to be called when the specified token is removed. This block takes a single argument:

  - **tokenID**: The identifier of the removed token.
- `tokenID`: The identifier of the token to watch for removal.

  If [tokenIDs](tokenids.md) doesn’t contain `tokenID`, `insertionHandler` is executed immediately.

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

<a id="Discussion"></a>

## Discussion

You typically call this method in the `insertionHandler` passed to the token watcher initializer.

Adding a removal handler will remove any existing removal handlers for the specified token ID.

## See Also

### Configuring Handlers

- [setInsertionHandler:](setinsertionhandler%28__%29.md): Sets an insertion handler closure to be called when a new token is inserted into the system.
