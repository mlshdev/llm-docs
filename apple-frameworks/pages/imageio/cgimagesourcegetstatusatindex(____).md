> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourcegetstatusatindex(_:_:)](https://developer.apple.com/documentation/imageio/cgimagesourcegetstatusatindex(_:_:))

# CGImageSourceGetStatusAtIndex(\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current status of an image at the specified location in the image source.

## Declaration

```swift
func CGImageSourceGetStatusAtIndex(_ isrc: CGImageSource, _ index: Int) -> CGImageSourceStatus
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.

<a id="return-value"></a>

## Return Value

Returns the current status of the image. See [CGImageSourceStatus](cgimagesourcestatus.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Status information is particularly informative for incremental image sources, but you may also use it on image sources that contain non-incremental data.

## See Also

### Getting the Image Status

- [CGImageSourceGetStatus(\_:)](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.

# CGImageSourceGetStatusAtIndex (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the current status of an image at the specified location in the image source.

## Declaration

```objectivec
extern CGImageSourceStatus CGImageSourceGetStatusAtIndex(CGImageSourceRef isrc, size_t index);
```

## Parameters

- `isrc`: The image source that contains the image data.
- `index`: The zero-based index into the images of the image source. If the index is invalid, this method returns `NULL`.

<a id="return-value"></a>

## Return Value

Returns the current status of the image. See [CGImageSourceStatus](cgimagesourcestatus.md) for a list of possible values.

<a id="Discussion"></a>

## Discussion

Status information is particularly informative for incremental image sources, but you may also use it on image sources that contain non-incremental data.

## See Also

### Getting the Image Status

- [CGImageSourceGetStatus](cgimagesourcegetstatus%28__%29.md): Return the status of an image source.
- [CGImageSourceStatus](cgimagesourcestatus.md): The set of status values for images and image sources.
