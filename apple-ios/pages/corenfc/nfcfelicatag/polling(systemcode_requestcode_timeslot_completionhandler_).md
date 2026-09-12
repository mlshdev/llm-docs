> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/polling(systemcode:requestcode:timeslot:completionhandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/polling(systemcode:requestcode:timeslot:completionhandler:))

# polling(systemCode:requestCode:timeSlot:completionHandler:) (Swift)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Polling command as defined by FeliCa card specification to the tag.

## Declaration

```swift
func polling(systemCode: Data, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot, completionHandler: @escaping @Sendable (Data, Data, (any Error)?) -> Void)
```

```swift
func polling(systemCode: Data, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot) async throws -> (Data, Data)
```

## See Also

### Polling

- [PollingRequestCode](../pollingrequestcode.md): Deprecated. Codes that specify the type of the data to request when polling.
- [PollingTimeSlot](../pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.

# pollingWithSystemCode:requestCode:timeSlot:completionHandler: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Sends the Polling command as defined by FeliCa card specification to the tag.

## Declaration

```objectivec
- (void) pollingWithSystemCode:(NSData *) systemCode requestCode:(NFCFeliCaPollingRequestCode) requestCode timeSlot:(NFCFeliCaPollingTimeSlot) timeSlot completionHandler:(void (^)(NSData *pmm, NSData *requestData, NSError *error)) completionHandler;
```

## See Also

### Polling

- [PollingRequestCode](../pollingrequestcode.md): Deprecated. Codes that specify the type of the data to request when polling.
- [PollingTimeSlot](../pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.
