> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiofileoutput/metadata](https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A collection of metadata to be written to the receiver’s output files.

## Declaration

```swift
var metadata: [AVMetadataItem] { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of `AVMetadataItem` objects representing the collection of top-level metadata to be written in each output file. Only ID3 v2.2, v2.3, or v2.4 style metadata items are supported.

## See Also

### Configuring output

- [audioSettings](audiosettings.md): The settings used to decode or re-encode audio before it is output by the receiver.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A collection of metadata to be written to the receiver’s output files.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an array of `AVMetadataItem` objects representing the collection of top-level metadata to be written in each output file. Only ID3 v2.2, v2.3, or v2.4 style metadata items are supported.

## See Also

### Configuring output

- [audioSettings](audiosettings.md): The settings used to decode or re-encode audio before it is output by the receiver.
