> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/currentsampleduration](https://developer.apple.com/documentation/mediaextension/mesamplecursor/currentsampleduration)

# currentSampleDuration (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The decode duration of the sample at the current position.

## Declaration

```swift
var currentSampleDuration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This value is [indefinite](https://developer.apple.com/documentation/coremedia/cmtime/indefinite) if the system needs to advance the sample past its current position to determine the decode duration. This can occur with streaming formats such as MPEG-2 transport streams.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.

# currentSampleDuration (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

The decode duration of the sample at the current position.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime currentSampleDuration;
```

<a id="Discussion"></a>

## Discussion

This value is [kCMTimeIndefinite](https://developer.apple.com/documentation/coremedia/cmtime/indefinite) if the system needs to advance the sample past its current position to determine the decode duration. This can occur with streaming formats such as MPEG-2 transport streams.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.
