> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/hevcdependencyinfo](https://developer.apple.com/documentation/mediaextension/mesamplecursor/hevcdependencyinfo)

# hevcDependencyInfo (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Additional information that’s necessary to recover complete sample dependency information.

## Declaration

```swift
@NSCopying optional var hevcDependencyInfo: MEHEVCDependencyInfo { get }
```

<a id="Discussion"></a>

## Discussion

This is an optional property that provides additional sample dependency information that [syncInfo](syncinfo.md) and [dependencyInfo](dependencyinfo.md) don’t provide. Examples of this are the NAL unit type of an HEVC sync sample or the number of samples necessary to refresh the decoder after a USAC independent frame. Don’t implement this property for formats where this information doesn’t make sense.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.

# hevcDependencyInfo (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Additional information that’s necessary to recover complete sample dependency information.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MEHEVCDependencyInfo * hevcDependencyInfo;
```

<a id="Discussion"></a>

## Discussion

This is an optional property that provides additional sample dependency information that [syncInfo](syncinfo.md) and [dependencyInfo](dependencyinfo.md) don’t provide. Examples of this are the NAL unit type of an HEVC sync sample or the number of samples necessary to refresh the decoder after a USAC independent frame. Don’t implement this property for formats where this information doesn’t make sense.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [syncInfo](syncinfo.md): Decoder synchronization information about the sample the cursor points to.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.
