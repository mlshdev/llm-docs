> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemoviefileoutput/metadata](https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The metadata for the output file.

## Declaration

```swift
var metadata: [AVMetadataItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

This array contains [AVMetadataItem](../avmetadataitem.md) objects. You use it to add metadata, such as copyright, creation date, and so on, to the recorded movie file.

## See Also

### Configuring movies

- [movieFragmentInterval](moviefragmentinterval.md): The number of seconds of output that are written per fragment.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The metadata for the output file.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<AVMetadataItem *> * metadata;
```

<a id="Discussion"></a>

## Discussion

This array contains [AVMetadataItem](../avmetadataitem.md) objects. You use it to add metadata, such as copyright, creation date, and so on, to the recorded movie file.

## See Also

### Configuring movies

- [movieFragmentInterval](moviefragmentinterval.md): The number of seconds of output that are written per fragment.
