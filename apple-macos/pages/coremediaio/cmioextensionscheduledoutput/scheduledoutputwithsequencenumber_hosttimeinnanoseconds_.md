> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionscheduledoutput/scheduledoutputwithsequencenumber:hosttimeinnanoseconds:](https://developer.apple.com/documentation/coremediaio/cmioextensionscheduledoutput/scheduledoutputwithsequencenumber:hosttimeinnanoseconds:)

# scheduledOutputWithSequenceNumber:hostTimeInNanoseconds:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new scheduled output object.

## Declaration

```objectivec
+ (instancetype) scheduledOutputWithSequenceNumber:(uint64_t) sequenceNumber hostTimeInNanoseconds:(uint64_t) hostTimeInNanoseconds;
```

## Parameters

- `sequenceNumber`: The buffer sequence number that was output.
- `hostTimeInNanoseconds`: The host time in nanoseconds when the buffer was output.

<a id="return-value"></a>

## Return Value

A scheduled output object that describes the state of the stream.

## See Also

### Creating a Scheduled Output

- [initWithSequenceNumber:hostTimeInNanoseconds:](init%28sequencenumber_hosttimeinnanoseconds_%29.md): Creates a scheduled output object.
