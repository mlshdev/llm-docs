> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbufferunderruncount-9sph5](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbufferunderruncount-9sph5)

# sinkBufferUnderrunCount

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The buffer underrun count.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * sinkBufferUnderrunCount;
```

<a id="Discussion"></a>

## Discussion

This value is a number the system increments whenever you’re not servicing buffers fast enough.

This property translates to the [kCMIOStreamPropertyOutputBufferUnderrunCount](../kcmiostreampropertyoutputbufferunderruncount.md) property.

## See Also

### Configuring Sink Properties

- [sinkBufferQueueSize](sinkbufferqueuesize-4kpug.md): The buffer queue size.
- [sinkBuffersRequiredForStartup](sinkbuffersrequiredforstartup-4b5te.md): The number of buffers the stream requires for startup.
- [sinkEndOfData](sinkendofdata-30he9.md): A value that indicates whether the stream has reached its end.
