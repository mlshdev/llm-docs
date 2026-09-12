> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotmanager/createnfcslot(message:completion:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotmanager/createnfcslot(message:completion:))

# createNFCSlot(message:completion:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an NFC smart card slot using the device’s hardware and presents a system UI.

## Declaration

```swift
func createNFCSlot(message: String?, completion: @escaping @Sendable (TKSmartCardSlotNFCSession?, (any Error)?) -> Void)
```

```swift
func createNFCSlot(message: String?) async throws -> TKSmartCardSlotNFCSession
```

## Parameters

- `message`: Message shown in the system-presented UI
- `completion`: Completion handler which returns the NFC session of the created slot or an error on failure. If an NFC slot already exists and current caller is not the initial creator `TKErrorCodeObjectNotFound` error is returned.

<a id="discussion"></a>

## Discussion

To finish the NFC session and dismiss the system-presented UI use `TKSmartCardSlotNFCSession.endSession`.

# createNFCSlotWithMessage:completion: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Creates an NFC smart card slot using the device’s hardware and presents a system UI.

## Declaration

```objectivec
- (void) createNFCSlotWithMessage:(NSString *) message completion:(void (^)(TKSmartCardSlotNFCSession *session, NSError *error)) completion;
```

## Parameters

- `message`: Message shown in the system-presented UI
- `completion`: Completion handler which returns the NFC session of the created slot or an error on failure. If an NFC slot already exists and current caller is not the initial creator `TKErrorCodeObjectNotFound` error is returned.

<a id="discussion"></a>

## Discussion

To finish the NFC session and dismiss the system-presented UI use `TKSmartCardSlotNFCSession.endSession`.
