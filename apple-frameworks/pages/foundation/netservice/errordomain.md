> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/errordomain](https://developer.apple.com/documentation/foundation/netservice/errordomain)

# errorDomain (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.

## Declaration

```swift
class let errorDomain: String
```

## See Also

### Constants

- [errorCode](errorcode-swift.type.property.md): This key identifies the error that occurred during the most recent operation.

# NSNetServicesErrorDomain (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

This key identifies the originator of the error, which is either the `NSNetService` object or the mach network layer. For most errors, you should not need the value provided by this key.

## Declaration

```objectivec
extern NSErrorDomain const NSNetServicesErrorDomain;
```

## See Also

### Constants

- [NSNetServicesErrorCode](errorcode-swift.type.property.md): This key identifies the error that occurred during the most recent operation.
