> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenwatcher/setinsertionhandler(_:)](https://developer.apple.com/documentation/cryptotokenkit/tktokenwatcher/setinsertionhandler(_:))

# setInsertionHandler(\_:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets an insertion handler closure to be called when a new token is inserted into the system.

## Declaration

```swift
func setInsertionHandler(_ insertionHandler: @escaping (String) -> Void)
```

## Parameters

- `insertionHandler`: A closure to be called whenever a token is added to the system. The closure takes a single argument, the tokenID, that identifies the added token.

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

## See Also

### Configuring Handlers

- [addRemovalHandler(\_:forTokenID:)](addremovalhandler%28__fortokenid_%29.md): Adds a removal handler for the specified token ID.

# setInsertionHandler: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Sets an insertion handler closure to be called when a new token is inserted into the system.

## Declaration

```objectivec
- (void) setInsertionHandler:(void (^)(NSString *tokenID)) insertionHandler;
```

## Parameters

- `insertionHandler`: A closure to be called whenever a token is added to the system. The closure takes a single argument, the tokenID, that identifies the added token.

## Mentioned In

- [Using Cryptographic Assets Stored on a Smart Card](../using-cryptographic-assets-stored-on-a-smart-card.md)

## See Also

### Configuring Handlers

- [addRemovalHandler:forTokenID:](addremovalhandler%28__fortokenid_%29.md): Adds a removal handler for the specified token ID.
