> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/sinkbuffersrequiredforstartup-4b5te](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/sinkbuffersrequiredforstartup-4b5te)

# sinkBuffersRequiredForStartup

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The number of buffers the stream requires for startup.

## Declaration

```objectivec
@property (atomic, strong, nullable) NSNumber * sinkBuffersRequiredForStartup;
```

<a id="Discussion"></a>

## Discussion

This property translates to the [kCMIOStreamPropertyOutputBuffersRequiredForStartup](../kcmiostreampropertyoutputbuffersrequiredforstartup.md) property.

## See Also

### Configuring Sink Properties

- [sinkBufferQueueSize](sinkbufferqueuesize-4kpug.md): The buffer queue size.
- [sinkBufferUnderrunCount](sinkbufferunderruncount-9sph5.md): The buffer underrun count.
- [sinkEndOfData](sinkendofdata-30he9.md): A value that indicates whether the stream has reached its end.
