> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/syncinfo](https://developer.apple.com/documentation/mediaextension/mesamplecursor/syncinfo)

# syncInfo (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Decoder synchronization information about the sample the cursor points to.

## Declaration

```swift
optional var syncInfo: AVSampleCursorSyncInfo { get }
```

<a id="Discussion"></a>

## Discussion

This value includes any valid flags set. Don’t implement this property if this kind of synchronization information doesn’t make sense for the sequence of samples.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.

# syncInfo (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

Decoder synchronization information about the sample the cursor points to.

## Declaration

```objectivec
@property (nonatomic, readonly) AVSampleCursorSyncInfo syncInfo;
```

<a id="Discussion"></a>

## Discussion

This value includes any valid flags set. Don’t implement this property if this kind of synchronization information doesn’t make sense for the sequence of samples.

## See Also

### Inspecting a sample cursor

- [presentationTimeStamp](presentationtimestamp.md): The presentation timestamp (PTS) of the sample at the current position of the cursor.
- [decodeTimeStamp](decodetimestamp.md): The decode timestamp (DTS) of the sample at the current position of the cursor.
- [currentSampleDuration](currentsampleduration.md): The decode duration of the sample at the current position.
- [currentSampleFormatDescription](currentsampleformatdescription.md): The format description for the sample at the current position of the cursor.
- [dependencyInfo](dependencyinfo.md): Dependency information about the sample the cursor points to.
- [hevcDependencyInfo](hevcdependencyinfo.md): Additional information that’s necessary to recover complete sample dependency information.
- [decodeTimeOfLastSampleReachableByForwardSteppingThatIsAlreadyLoadedByByteSource](decodetimeoflastsamplereachablebyforwardsteppingthatisalreadyloadedbybytesource.md): The duration of the playable content starting from the cursor position.
