> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefstatus](https://developer.apple.com/documentation/corenfc/nfcndefstatus)

# NFCNDEFStatus (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Constants that indicate status for an NDEF tag.

## Declaration

```swift
enum NFCNDEFStatus
```

## Topics

### Statuses

- [NFCNDEFStatus.notSupported](nfcndefstatus/notsupported.md): A status indicating that that tag isn’t an NDEF-formatted tag.
- [NFCNDEFStatus.readOnly](nfcndefstatus/readonly.md): A status indicating that the tag supports reading NDEF message data only.
- [NFCNDEFStatus.readWrite](nfcndefstatus/readwrite.md): A status indicating that the tag supports reading and writing NDEF message data.

### Initializers

- [init(rawValue:)](nfcndefstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Tag Status

- [isAvailable](nfcndeftag/isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [queryNDEFStatus(completionHandler:)](nfcndeftag/queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.

# NFCNDEFStatus (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Constants that indicate status for an NDEF tag.

## Declaration

```objectivec
enum NFCNDEFStatus : NSUInteger;
```

## Topics

### Statuses

- [NFCNDEFStatusNotSupported](nfcndefstatus/notsupported.md): A status indicating that that tag isn’t an NDEF-formatted tag.
- [NFCNDEFStatusReadOnly](nfcndefstatus/readonly.md): A status indicating that the tag supports reading NDEF message data only.
- [NFCNDEFStatusReadWrite](nfcndefstatus/readwrite.md): A status indicating that the tag supports reading and writing NDEF message data.

## See Also

### Getting the Tag Status

- [available](nfcndeftag/isavailable.md): A Boolean value that determines whether the NDEF tag is available in the current reader session.
- [queryNDEFStatusWithCompletionHandler:](nfcndeftag/queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.
