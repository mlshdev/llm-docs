> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbufferqueuesize-9b80c](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbufferqueuesize-9b80c)

# sinkBufferQueueSize

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

The buffer queue size.

## Declaration

```swift
@nonobjc var sinkBufferQueueSize: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

This property translates to the [kCMIOStreamPropertyOutputBufferQueueSize](../kcmiostreampropertyoutputbufferqueuesize.md) property.

## See Also

### Configuring Sink Properties

- [sinkBuffersRequiredForStartup](sinkbuffersrequiredforstartup-1bgyq.md): The number of buffers the stream requires for startup.
- [sinkBufferUnderrunCount](sinkbufferunderruncount-1qmbb.md): The buffer underrun count.
- [sinkEndOfData](sinkendofdata-8fswu.md): A value that indicates whether the stream has reached its end.
