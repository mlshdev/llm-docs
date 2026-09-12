> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegetstatus(_:)](https://developer.apple.com/documentation/imageio/cgimagesourcegetstatus(_:))

# CGImageSourceGetStatus(\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Return the status of an image source.

## Declaration

```swift
func CGImageSourceGetStatus(_ isrc: CGImageSource) -> CGImageSourceStatus
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

Returns the current status of the image source. See [CGImageSourceStatus](cgimagesourcestatus.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Status information is particularly informative for incremental image sources, but it may also be useful on image sources that contain non-incremental data.

## See Also

### Getting the Image Status

- [CGImageSourceGetStatusAtIndex(\_:\_:)](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.

# CGImageSourceGetStatus (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Return the status of an image source.

## Declaration

```objectivec
extern CGImageSourceStatus CGImageSourceGetStatus(CGImageSourceRef isrc);
```

## Parameters

- `isrc`: The image source that contains the image data.

<a id="return-value"></a>

## Return Value

Returns the current status of the image source. See [CGImageSourceStatus](cgimagesourcestatus.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Status information is particularly informative for incremental image sources, but it may also be useful on image sources that contain non-incremental data.

## See Also

### Getting the Image Status

- [CGImageSourceGetStatusAtIndex](cgimagesourcegetstatusatindex%28____%29.md): Returns the current status of an image at the specified location in the image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.
