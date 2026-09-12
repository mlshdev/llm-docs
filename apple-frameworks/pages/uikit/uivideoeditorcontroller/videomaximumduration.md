> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontroller/videomaximumduration](https://developer.apple.com/documentation/uikit/uivideoeditorcontroller/videomaximumduration)

# videoMaximumDuration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum duration, in seconds, permitted for trimmed movies saved by the video editor.

## Declaration

```swift
var videoMaximumDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The system-enforced maximum duration for a video recording is 10 minutes; you can set this value to 10 minutes or less. The default value for this property is also 10 minutes.

The video editor user interface forces the user to trim a loaded movie to fit within this property’s value prior to saving.

## See Also

### Configuring the editor

- [videoPath](videopath.md): The filesystem path to the movie to be loaded by the video editor.
- [videoQuality](videoquality.md): The video quality to use when saving a trimmed movie.

# videoMaximumDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum duration, in seconds, permitted for trimmed movies saved by the video editor.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval videoMaximumDuration;
```

<a id="Discussion"></a>

## Discussion

The system-enforced maximum duration for a video recording is 10 minutes; you can set this value to 10 minutes or less. The default value for this property is also 10 minutes.

The video editor user interface forces the user to trim a loaded movie to fit within this property’s value prior to saving.

## See Also

### Configuring the editor

- [videoPath](videopath.md): The filesystem path to the movie to be loaded by the video editor.
- [videoQuality](videoquality.md): The video quality to use when saving a trimmed movie.
