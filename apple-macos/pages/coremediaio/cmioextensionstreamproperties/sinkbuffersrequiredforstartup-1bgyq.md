> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbuffersrequiredforstartup-1bgyq](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbuffersrequiredforstartup-1bgyq)

# sinkBuffersRequiredForStartup

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

The number of buffers the stream requires for startup.

## Declaration

```swift
@nonobjc var sinkBuffersRequiredForStartup: Int? { get set }
```

<a id="Discussion"></a>

## Discussion

This property translates to the [kCMIOStreamPropertyOutputBuffersRequiredForStartup](../kcmiostreampropertyoutputbuffersrequiredforstartup.md) property.

## See Also

### Configuring Sink Properties

- [sinkBufferQueueSize](sinkbufferqueuesize-9b80c.md): The buffer queue size.
- [sinkBufferUnderrunCount](sinkbufferunderruncount-1qmbb.md): The buffer underrun count.
- [sinkEndOfData](sinkendofdata-8fswu.md): A value that indicates whether the stream has reached its end.
