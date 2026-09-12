> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/preferredmediachunkduration](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/preferredmediachunkduration)

# preferredMediaChunkDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.

## Declaration

```swift
var preferredMediaChunkDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

The total duration of the samples in a chunk can be no greater than the preferred chunk duration, or the duration of a single sample if the single sample’s duration is greater than the preferred chunk duration. The default media chunk duration is `1.0` second. Setting a negative or non-numeric value for the chunk duration will cause an error.

## See Also

### Accessing media chunks

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkSize](preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

# preferredMediaChunkDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.

## Declaration

```objectivec
@property (nonatomic) CMTime preferredMediaChunkDuration;
```

<a id="Discussion"></a>

## Discussion

The total duration of the samples in a chunk can be no greater than the preferred chunk duration, or the duration of a single sample if the single sample’s duration is greater than the preferred chunk duration. The default media chunk duration is `1.0` second. Setting a negative or non-numeric value for the chunk duration will cause an error.

## See Also

### Accessing media chunks

- [preferredMediaChunkAlignment](preferredmediachunkalignment.md): The boundary for media chunk alignment for file types that support media chunk alignment.
- [preferredMediaChunkSize](preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.
