> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/preferredmediachunksize](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/preferredmediachunksize)

# preferredMediaChunkSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

## Declaration

```swift
var preferredMediaChunkSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The total size of the samples in a chunk can be no greater than the preferred chunk size, or the size of a single sample if the single sample’s size is greater than the preferred chunk size. The default media chunk duration is `1024 * 1024` bytes. Setting a negative value for the chunk duration will cause an error.

A larger chunk size can result in fewer reads from the storage container, at the potential expense of a larger memory footprint.

## See Also

### Accessing media chunks

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.

# preferredMediaChunkSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredMediaChunkSize;
```

<a id="Discussion"></a>

## Discussion

The total size of the samples in a chunk can be no greater than the preferred chunk size, or the size of a single sample if the single sample’s size is greater than the preferred chunk size. The default media chunk duration is `1024 * 1024` bytes. Setting a negative value for the chunk duration will cause an error.

A larger chunk size can result in fewer reads from the storage container, at the potential expense of a larger memory footprint.

## See Also

### Accessing media chunks

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkDuration](preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.
