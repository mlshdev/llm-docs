> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbufferqueuesize-4kpug](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbufferqueuesize-4kpug)

# sinkBufferQueueSize

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The buffer queue size.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * sinkBufferQueueSize;
```

<a id="Discussion"></a>

## Discussion

This property translates to the [kCMIOStreamPropertyOutputBufferQueueSize](../kcmiostreampropertyoutputbufferqueuesize.md) property.

## See Also

### Configuring Sink Properties

- [sinkBuffersRequiredForStartup](sinkbuffersrequiredforstartup-4b5te.md): The number of buffers the stream requires for startup.
- [sinkBufferUnderrunCount](sinkbufferunderruncount-9sph5.md): The buffer underrun count.
- [sinkEndOfData](sinkendofdata-30he9.md): A value that indicates whether the stream has reached its end.
