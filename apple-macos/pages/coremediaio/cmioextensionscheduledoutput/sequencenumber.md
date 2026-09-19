> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionscheduledoutput/sequencenumber

# sequenceNumber (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The buffer sequence number that was output.

## Declaration

```swift
var sequenceNumber: UInt64 { get }
```

## See Also

### Inspecting the Output

- [hostTimeInNanoseconds](hosttimeinnanoseconds.md): The host time in nanoseconds when the buffer was output.

# sequenceNumber (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The buffer sequence number that was output.

## Declaration

```objectivec
@property (atomic, readonly) uint64_t sequenceNumber;
```

## See Also

### Inspecting the Output

- [hostTimeInNanoseconds](hosttimeinnanoseconds.md): The host time in nanoseconds when the buffer was output.
