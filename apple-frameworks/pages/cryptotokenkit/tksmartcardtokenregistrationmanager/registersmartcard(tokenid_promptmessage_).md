> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokenregistrationmanager/registersmartcard(tokenid:promptmessage:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokenregistrationmanager/registersmartcard(tokenid:promptmessage:))

# registerSmartCard(tokenID:promptMessage:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Registers a smartcard with a specific token ID.

## Declaration

```swift
func registerSmartCard(tokenID: String, promptMessage: String) throws
```

## Parameters

- `tokenID`: ID of the smartcard
- `promptMessage`: Message that will be shown in the presented system UI when an operation with this smartcard is requested.

<a id="discussion"></a>

## Discussion

In case the same tokenID is already registered, the registration data are overwritten. In case the smartcard with provided tokenID isn’t found in the system, failure is returned.

# registerSmartCardWithTokenID:promptMessage:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Registers a smartcard with a specific token ID.

## Declaration

```objectivec
- (BOOL) registerSmartCardWithTokenID:(NSString *) tokenID promptMessage:(NSString *) promptMessage error:(NSError **) error;
```

## Parameters

- `tokenID`: ID of the smartcard
- `promptMessage`: Message that will be shown in the presented system UI when an operation with this smartcard is requested.
- `error`: On failure, this parameter is set to error describing the failure. On success, it is set to ‘nil’.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

In case the same tokenID is already registered, the registration data are overwritten. In case the smartcard with provided tokenID isn’t found in the system, failure is returned.
