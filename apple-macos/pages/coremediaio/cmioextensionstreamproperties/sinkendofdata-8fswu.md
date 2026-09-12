> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkendofdata-8fswu](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkendofdata-8fswu)

# sinkEndOfData

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

A value that indicates whether the stream has reached its end.

## Declaration

```swift
@nonobjc var sinkEndOfData: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `1` indicates that the stream has reached the end, and a value of `0` indicates that more data is available. This property translates to the [kCMIOStreamPropertyEndOfData](../kcmiostreampropertyendofdata.md) property.

## See Also

### Configuring Sink Properties

- [sinkBufferQueueSize](sinkbufferqueuesize-9b80c.md): The buffer queue size.
- [sinkBuffersRequiredForStartup](sinkbuffersrequiredforstartup-1bgyq.md): The number of buffers the stream requires for startup.
- [sinkBufferUnderrunCount](sinkbufferunderruncount-1qmbb.md): The buffer underrun count.
