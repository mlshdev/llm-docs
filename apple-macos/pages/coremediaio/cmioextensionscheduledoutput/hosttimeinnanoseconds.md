> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionscheduledoutput/hosttimeinnanoseconds](https://developer.apple.com/documentation/coremediaio/cmioextensionscheduledoutput/hosttimeinnanoseconds)

# hostTimeInNanoseconds (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The host time in nanoseconds when the buffer was output.

## Declaration

```swift
var hostTimeInNanoseconds: UInt64 { get }
```

## See Also

### Inspecting the Output

- [sequenceNumber](sequencenumber.md): The buffer sequence number that was output.

# hostTimeInNanoseconds (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The host time in nanoseconds when the buffer was output.

## Declaration

```objectivec
@property (atomic, readonly) uint64_t hostTimeInNanoseconds;
```

## See Also

### Inspecting the Output

- [sequenceNumber](sequencenumber.md): The buffer sequence number that was output.
