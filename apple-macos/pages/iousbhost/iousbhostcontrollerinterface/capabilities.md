> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterface/capabilities

# capabilities (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
var capabilities: UnsafePointer<IOUSBHostCIMessage> { get }
```

## See Also

### Instance Properties

- [controllerStateMachine](controllerstatemachine.md)
- [interruptRateHz](interruptratehz.md)
- [queue](queue.md)
- [uuid](uuid.md)

# capabilities (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@property (nonatomic, readonly) const IOUSBHostCIMessage * capabilities;
```

## See Also

### Instance Properties

- [controllerStateMachine](controllerstatemachine.md)
- [interruptRateHz](interruptratehz.md)
- [queue](queue.md)
- [uuid](uuid.md)
