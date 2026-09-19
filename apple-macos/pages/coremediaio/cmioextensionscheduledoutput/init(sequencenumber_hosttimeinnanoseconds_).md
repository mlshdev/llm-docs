> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionscheduledoutput/init(sequencenumber:hosttimeinnanoseconds:)

# init(sequenceNumber:hostTimeInNanoseconds:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a scheduled output object.

## Declaration

```swift
init(sequenceNumber: UInt64, hostTimeInNanoseconds: UInt64)
```

## Parameters

- `sequenceNumber`: The buffer sequence number that was output.
- `hostTimeInNanoseconds`: The host time in nanoseconds when the buffer was output.

# initWithSequenceNumber:hostTimeInNanoseconds: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a scheduled output object.

## Declaration

```objectivec
- (instancetype) initWithSequenceNumber:(uint64_t) sequenceNumber hostTimeInNanoseconds:(uint64_t) hostTimeInNanoseconds;
```

## Parameters

- `sequenceNumber`: The buffer sequence number that was output.
- `hostTimeInNanoseconds`: The host time in nanoseconds when the buffer was output.

## See Also

### Creating a Scheduled Output

- [scheduledOutputWithSequenceNumber:hostTimeInNanoseconds:](scheduledoutputwithsequencenumber_hosttimeinnanoseconds_.md): Returns a new scheduled output object.
