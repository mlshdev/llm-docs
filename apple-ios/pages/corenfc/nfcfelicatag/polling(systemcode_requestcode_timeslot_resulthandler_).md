> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcfelicatag/polling(systemcode:requestcode:timeslot:resulthandler:)](https://developer.apple.com/documentation/corenfc/nfcfelicatag/polling(systemcode:requestcode:timeslot:resulthandler:))

# polling(systemCode:requestCode:timeSlot:resultHandler:)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

## Declaration

```swift
@preconcurrency func polling(systemCode: Data, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot, resultHandler: @escaping @Sendable (Result<NFCFeliCaPollingResponse, any Error>) -> Void)
```

```swift
func polling(systemCode: Data, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot, resultHandler: @escaping (Result<NFCFeliCaPollingResponse, any Error>) -> Void)
```
