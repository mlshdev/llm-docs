> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/decodetimestamp](https://developer.apple.com/documentation/mediaextension/mesamplecursor/decodetimestamp)

# decodeTimeStamp (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The decode timestamp (DTS) of the sample at the current position of the cursor.

## Declaration

```swift
var decodeTimeStamp: CMTime { get }
```

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.

# decodeTimeStamp (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The decode timestamp (DTS) of the sample at the current position of the cursor.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime decodeTimeStamp;
```

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.
