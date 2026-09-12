> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource](https://developer.apple.com/documentation/mediaextension/mesamplecursor/decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource)

# decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The duration of the playable content starting from the cursor position.

## Declaration

```swift
optional var decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

Indicates the time difference between the current cursor decode timestamp (DTS) and the last reachable sample DTS. This is necessary to play certain assets such as those with HTTP URLs, because it indicates what samples the byte source has already loaded.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.

# decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The duration of the playable content starting from the cursor position.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource;
```

<a id="Discussion"></a>

## Discussion

Indicates the time difference between the current cursor decode timestamp (DTS) and the last reachable sample DTS. This is necessary to play certain assets such as those with HTTP URLs, because it indicates what samples the byte source has already loaded.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
