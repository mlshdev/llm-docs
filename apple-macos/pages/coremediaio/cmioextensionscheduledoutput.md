> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionscheduledoutput](https://developer.apple.com/documentation/coremediaio/cmioextensionscheduledoutput)

# CMIOExtensionScheduledOutput (Swift)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents scheduled output.

## Declaration

```swift
class CMIOExtensionScheduledOutput
```

## Topics

### Creating a Scheduled Output

- [init(sequenceNumber:hostTimeInNanoseconds:)](cmioextensionscheduledoutput/init%28sequencenumber_hosttimeinnanoseconds_%29.md): Creates a scheduled output object.

### Inspecting the Output

- [sequenceNumber](cmioextensionscheduledoutput/sequencenumber.md): The buffer sequence number that was output.
- [hostTimeInNanoseconds](cmioextensionscheduledoutput/hosttimeinnanoseconds.md): The host time in nanoseconds when the buffer was output.

### Initializers

- [init(coder:)](cmioextensionscheduledoutput/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing Scheduled Output

- [notifyScheduledOutputChanged(\_:)](cmioextensionstream/notifyscheduledoutputchanged%28__%29.md): Notifies clients when a particular buffer is output.

# CMIOExtensionScheduledOutput (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Class  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

An object that represents scheduled output.

## Declaration

```objectivec
@interface CMIOExtensionScheduledOutput : NSObject
```

## Topics

### Creating a Scheduled Output

- [scheduledOutputWithSequenceNumber:hostTimeInNanoseconds:](cmioextensionscheduledoutput/scheduledoutputwithsequencenumber_hosttimeinnanoseconds_.md): Returns a new scheduled output object.
- [initWithSequenceNumber:hostTimeInNanoseconds:](cmioextensionscheduledoutput/init%28sequencenumber_hosttimeinnanoseconds_%29.md): Creates a scheduled output object.

### Inspecting the Output

- [sequenceNumber](cmioextensionscheduledoutput/sequencenumber.md): The buffer sequence number that was output.
- [hostTimeInNanoseconds](cmioextensionscheduledoutput/hosttimeinnanoseconds.md): The host time in nanoseconds when the buffer was output.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing Scheduled Output

- [notifyScheduledOutputChanged:](cmioextensionstream/notifyscheduledoutputchanged%28__%29.md): Notifies clients when a particular buffer is output.
