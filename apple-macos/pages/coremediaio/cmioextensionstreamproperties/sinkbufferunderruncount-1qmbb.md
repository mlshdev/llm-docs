> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbufferunderruncount-1qmbb](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbufferunderruncount-1qmbb)

# sinkBufferUnderrunCount

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

The buffer underrun count.

## Declaration

```swift
@nonobjc var sinkBufferUnderrunCount: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

This value is a number the system increments whenever you’re not servicing buffers fast enough.

This property translates to the [kCMIOStreamPropertyOutputBufferUnderrunCount](../kcmiostreampropertyoutputbufferunderruncount.md) property.

## See Also

### Configuring Sink Properties

- [sinkBufferQueueSize](sinkbufferqueuesize-9b80c.md): The buffer queue size.
- [sinkBuffersRequiredForStartup](sinkbuffersrequiredforstartup-1bgyq.md): The number of buffers the stream requires for startup.
- [sinkEndOfData](sinkendofdata-8fswu.md): A value that indicates whether the stream has reached its end.
