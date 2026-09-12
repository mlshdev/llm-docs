> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivideoeditorcontroller/caneditvideo(atpath:)](https://developer.apple.com/documentation/uikit/uivideoeditorcontroller/caneditvideo(atpath:))

# canEditVideo(atPath:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether a video file can be edited.

## Declaration

```swift
class func canEditVideo(atPath videoPath: String) -> Bool
```

## Parameters

- `videoPath`: The filesystem path to the video file you want to edit.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified video file can be edited on the current device or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Video editing requires the presence of specific hardware and is available only for specific file formats. Use this method to check whether video editing is available for a given video file, before you create a video editor.

# canEditVideoAtPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether a video file can be edited.

## Declaration

```objectivec
+ (BOOL) canEditVideoAtPath:(NSString *) videoPath;
```

## Parameters

- `videoPath`: The filesystem path to the video file you want to edit.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified video file can be edited on the current device or [false](https://developer.apple.com/documentation/swift/false) if it cannot.

<a id="Discussion"></a>

## Discussion

Video editing requires the presence of specific hardware and is available only for specific file formats. Use this method to check whether video editing is available for a given video file, before you create a video editor.
