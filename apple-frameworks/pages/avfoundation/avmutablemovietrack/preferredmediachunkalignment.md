> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablemovietrack/preferredmediachunkalignment](https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/preferredmediachunkalignment)

# preferredMediaChunkAlignment (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The boundary for media chunk alignment for file types that support media chunk alignment.

## Declaration

```swift
var preferredMediaChunkAlignment: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates to use no padding should to achieve chunk alignment. Setting a negative chunk alignment value causes an error.

## See Also

### Accessing media chunks

- [preferredMediaChunkDuration](preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.
- [preferredMediaChunkSize](preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.

# preferredMediaChunkAlignment (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The boundary for media chunk alignment for file types that support media chunk alignment.

## Declaration

```objectivec
@property (nonatomic) NSInteger preferredMediaChunkAlignment;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`, which indicates to use no padding should to achieve chunk alignment. Setting a negative chunk alignment value causes an error.

## See Also

### Accessing media chunks

- [preferredMediaChunkDuration](preferredmediachunkduration.md): The maximum duration to use for each chunk of sample data written to the file for file types that support media chunk duration.
- [preferredMediaChunkSize](preferredmediachunksize.md): The maximum size to use for each chunk of sample data written to the file for file types that support media chunk duration.
