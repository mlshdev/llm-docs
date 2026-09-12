> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturedescriptor](https://developer.apple.com/documentation/metal/mtlcapturedescriptor)

# MTLCaptureDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A configuration for a Metal capture session.

## Declaration

```swift
class MTLCaptureDescriptor
```

## Topics

### Setting capture parameters

- [captureObject](mtlcapturedescriptor/captureobject.md): The instance whose contents should be captured.
- [destination](mtlcapturedescriptor/destination.md): The destination for any captured command data.
- [outputURL](mtlcapturedescriptor/outputurl.md): A URL for a file to write the capture data into.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Frame capture

- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.

# MTLCaptureDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A configuration for a Metal capture session.

## Declaration

```objectivec
@interface MTLCaptureDescriptor : NSObject
```

## Topics

### Setting capture parameters

- [captureObject](mtlcapturedescriptor/captureobject.md): The instance whose contents should be captured.
- [destination](mtlcapturedescriptor/destination.md): The destination for any captured command data.
- [outputURL](mtlcapturedescriptor/outputurl.md): A URL for a file to write the capture data into.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Frame capture

- [MTLCaptureManager](mtlcapturemanager.md): An instance you use to capture Metal command data in your app.
- [MTLCaptureDestination](mtlcapturedestination.md): The kinds of destinations for captured command data.
- [MTLCaptureScope](mtlcapturescope.md): A type that can programmatically customize a GPU frame capture.
