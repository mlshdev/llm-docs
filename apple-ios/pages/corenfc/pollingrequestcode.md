> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/pollingrequestcode](https://developer.apple.com/documentation/corenfc/pollingrequestcode)

# PollingRequestCode (Swift)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Codes that specify the type of the data to request when polling.

## Declaration

```swift
typealias PollingRequestCode = NFCFeliCaPollingRequestCode
```

## Topics

### Request Codes

- [PollingRequestCodeNoRequest](nfcfelicapollingrequestcode/pollingrequestcodenorequest.md): Deprecated. A code that indicates no request.
- [PollingRequestCodeSystemCode](nfcfelicapollingrequestcode/pollingrequestcodesystemcode.md): Deprecated. A code that indicates a system code request.
- [PollingRequestCodeCommunicationPerformance](nfcfelicapollingrequestcode/pollingrequestcodecommunicationperformance.md): Deprecated. A code that indicates a communication performance request.

## See Also

### Polling

- [polling(systemCode:requestCode:timeSlot:completionHandler:)](nfcfelicatag/polling%28systemcode_requestcode_timeslot_completionhandler_%29.md): Sends the Polling command as defined by FeliCa card specification to the tag.
- [PollingTimeSlot](pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.

# PollingRequestCode (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ (deprecated in 14.0) · iPadOS 13.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Codes that specify the type of the data to request when polling.

## Declaration

```objectivec
typedef NFCFeliCaPollingRequestCode PollingRequestCode;
```

## Topics

### Request Codes

- [PollingRequestCodeNoRequest](nfcfelicapollingrequestcode/pollingrequestcodenorequest.md): Deprecated. A code that indicates no request.
- [PollingRequestCodeSystemCode](nfcfelicapollingrequestcode/pollingrequestcodesystemcode.md): Deprecated. A code that indicates a system code request.
- [PollingRequestCodeCommunicationPerformance](nfcfelicapollingrequestcode/pollingrequestcodecommunicationperformance.md): Deprecated. A code that indicates a communication performance request.

## See Also

### Polling

- [pollingWithSystemCode:requestCode:timeSlot:completionHandler:](nfcfelicatag/polling%28systemcode_requestcode_timeslot_completionhandler_%29.md): Sends the Polling command as defined by FeliCa card specification to the tag.
- [PollingTimeSlot](pollingtimeslot.md): Deprecated. Constants that specify the maximum number of time slots.
