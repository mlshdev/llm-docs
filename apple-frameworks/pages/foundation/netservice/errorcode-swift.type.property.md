> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/errorcode-swift.type.property](https://developer.apple.com/documentation/foundation/netservice/errorcode-swift.type.property)

# errorCode (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

This key identifies the error that occurred during the most recent operation.

## Declaration

```swift
class let errorCode: String
```

## See Also

### Constants

- [errorDomain](errordomain.md): This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.

# NSNetServicesErrorCode (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

This key identifies the error that occurred during the most recent operation.

## Declaration

```objectivec
extern NSString * const NSNetServicesErrorCode;
```

## See Also

### Constants

- [NSNetServicesErrorDomain](errordomain.md): This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.
