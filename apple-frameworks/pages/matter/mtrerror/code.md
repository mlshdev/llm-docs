> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrerror/code](https://developer.apple.com/documentation/matter/mtrerror/code)

# MTRError.Code (Swift)

**Framework:** Matter  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [MTRError.Code.bufferTooSmall](code/buffertoosmall.md)
- [MTRError.Code.cancelled](code/cancelled.md)
- [MTRError.Code.dnssdUnauthorized](code/dnssdunauthorized.md)
- [MTRError.Code.fabricExists](code/fabricexists.md)
- [MTRError.Code.generalError](code/generalerror.md)
- [MTRError.Code.integrityCheckFailed](code/integritycheckfailed.md)
- [MTRError.Code.invalidArgument](code/invalidargument.md)
- [MTRError.Code.invalidIntegerValue](code/invalidintegervalue.md)
- [MTRError.Code.invalidMessageLength](code/invalidmessagelength.md)
- [MTRError.Code.invalidState](code/invalidstate.md)
- [MTRError.Code.invalidStringLength](code/invalidstringlength.md)
- [MTRError.Code.schemaMismatch](code/schemamismatch.md)
- [MTRError.Code.timeout](code/timeout.md)
- [MTRError.Code.tlvDecodeFailed](code/tlvdecodefailed.md)
- [MTRError.Code.unknownSchema](code/unknownschema.md)
- [MTRError.Code.wrongAddressType](code/wrongaddresstype.md)
- [MTRError.Code.accessDenied](code/accessdenied.md): Access to some resource was denied.
- [MTRError.Code.busy](code/busy.md): A request was made to some entity, and that entity cannot handle the request right now, but might be able to at a different point in time.
- [MTRError.Code.notFound](code/notfound.md): Something was requested that could not be located.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTRErrorCode (Objective-C)

**Framework:** Matter  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
enum MTRErrorCode : NSInteger;
```

## Topics

### Enumeration Cases

- [MTRErrorCodeBufferTooSmall](code/buffertoosmall.md)
- [MTRErrorCodeCancelled](code/cancelled.md)
- [MTRErrorCodeDNSSDUnauthorized](code/dnssdunauthorized.md)
- [MTRErrorCodeFabricExists](code/fabricexists.md)
- [MTRErrorCodeGeneralError](code/generalerror.md)
- [MTRErrorCodeIntegrityCheckFailed](code/integritycheckfailed.md)
- [MTRErrorCodeInvalidArgument](code/invalidargument.md)
- [MTRErrorCodeInvalidIntegerValue](code/invalidintegervalue.md)
- [MTRErrorCodeInvalidMessageLength](code/invalidmessagelength.md)
- [MTRErrorCodeInvalidState](code/invalidstate.md)
- [MTRErrorCodeInvalidStringLength](code/invalidstringlength.md)
- [MTRErrorCodeSchemaMismatch](code/schemamismatch.md)
- [MTRErrorCodeTimeout](code/timeout.md)
- [MTRErrorCodeTLVDecodeFailed](code/tlvdecodefailed.md)
- [MTRErrorCodeUnknownSchema](code/unknownschema.md)
- [MTRErrorCodeWrongAddressType](code/wrongaddresstype.md)
- [MTRErrorCodeAccessDenied](code/accessdenied.md): Access to some resource was denied.
- [MTRErrorCodeBusy](code/busy.md): A request was made to some entity, and that entity cannot handle the request right now, but might be able to at a different point in time.
- [MTRErrorCodeNotFound](code/notfound.md): Something was requested that could not be located.
