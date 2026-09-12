> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokenregistrationmanager/unregistersmartcard(tokenid:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokenregistrationmanager/unregistersmartcard(tokenid:))

# unregisterSmartCard(tokenID:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Unregisters a smartcard for the provided token ID.

## Declaration

```swift
func unregisterSmartCard(tokenID: String) throws
```

## Parameters

- `tokenID`: ID of the smartcard

<a id="discussion"></a>

## Discussion

In case the tokenID is not found, failure is returned.

# unregisterSmartCardWithTokenID:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Unregisters a smartcard for the provided token ID.

## Declaration

```objectivec
- (BOOL) unregisterSmartCardWithTokenID:(NSString *) tokenID error:(NSError **) error;
```

## Parameters

- `tokenID`: ID of the smartcard
- `error`: On failure, this parameter is set to error describing the failure. On success, it is set to ‘nil’.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

In case the tokenID is not found, failure is returned.
