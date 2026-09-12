> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/shouldoptimizefornetworkuse](https://developer.apple.com/documentation/avfoundation/avassetwriter/shouldoptimizefornetworkuse)

# shouldOptimizeForNetworkUse (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether to write the output file to make it more suitable for playback over a network.

## Declaration

```swift
var shouldOptimizeForNetworkUse: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) writes the output file in a form that enables a player to begin playing the media after downloading only a small portion of it.

## See Also

### Configuring output

- [metadata](metadata.md): An array of metadata items to write to the output file.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory to contain temporary files that the export process generates.

# shouldOptimizeForNetworkUse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether to write the output file to make it more suitable for playback over a network.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldOptimizeForNetworkUse;
```

<a id="Discussion"></a>

## Discussion

Setting this value to [true](https://developer.apple.com/documentation/swift/true) writes the output file in a form that enables a player to begin playing the media after downloading only a small portion of it.

## See Also

### Configuring output

- [metadata](metadata.md): An array of metadata items to write to the output file.
- [directoryForTemporaryFiles](directoryfortemporaryfiles.md): A directory to contain temporary files that the export process generates.
