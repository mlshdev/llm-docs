> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditingoutput/renderedcontenturl](https://developer.apple.com/documentation/photos/phcontenteditingoutput/renderedcontenturl)

# renderedContentURL (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The URL at which to write a file containing edited asset content.

## Declaration

```swift
var renderedContentURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

Read this property to find a URL for writing edited asset content. Then, if editing a photo asset, write the altered photo image to a file in JPEG format at this URL. If editing a video asset, export the video to a QuickTime (`.mov`) file at this URL.

> **Important**

>  Edited asset content must incorporate (or “bake in”) the intended orientation of the asset. That is, the orientation metadata (if any) that you write in the output image or video file must declare the “up” orientation, and the image or video data must appear right-side up when presented without orientation metadata.

For Live Photo content, you don’t write output to this URL. Instead, pass the editing output object to the [saveLivePhoto(to:options:completionHandler:)](../phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) method.

## See Also

### Providing Edit and Adjustment Data

- [adjustmentData](adjustmentdata.md): An object describing the changes made to the asset.

# renderedContentURL (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.0+ · visionOS 1.0+

The URL at which to write a file containing edited asset content.

## Declaration

```objectivec
@property (copy, readonly) NSURL * renderedContentURL;
```

<a id="Discussion"></a>

## Discussion

Read this property to find a URL for writing edited asset content. Then, if editing a photo asset, write the altered photo image to a file in JPEG format at this URL. If editing a video asset, export the video to a QuickTime (`.mov`) file at this URL.

> **Important**

>  Edited asset content must incorporate (or “bake in”) the intended orientation of the asset. That is, the orientation metadata (if any) that you write in the output image or video file must declare the “up” orientation, and the image or video data must appear right-side up when presented without orientation metadata.

For Live Photo content, you don’t write output to this URL. Instead, pass the editing output object to the [saveLivePhotoToOutput:options:completionHandler:](../phlivephotoeditingcontext/savelivephoto%28to_options_completionhandler_%29.md) method.

## See Also

### Providing Edit and Adjustment Data

- [adjustmentData](adjustmentdata.md): An object describing the changes made to the asset.
