> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/metadata](https://developer.apple.com/documentation/avfoundation/avassetwriter/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An array of metadata items to write to the output file.

## Declaration

```swift
var metadata: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

You can’t modify this property value after writing starts.

## See Also

### Configuring output

- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to write the output file to make it more suitable for playback over a network.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory to contain temporary files that the export process generates.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An array of metadata items to write to the output file.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

You can’t modify this property value after writing starts.

## See Also

### Configuring output

- [shouldOptimizeForNetworkUse](shouldoptimizefornetworkuse.md): A Boolean value that indicates whether to write the output file to make it more suitable for playback over a network.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory to contain temporary files that the export process generates.
