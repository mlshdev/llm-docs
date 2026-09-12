> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffergetdisplaysize(_:)](https://developer.apple.com/documentation/corevideo/cvimagebuffergetdisplaysize(_:))

# CVImageBufferGetDisplaySize(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the nominal output display size, in square pixels, of a Core Video image buffer.

## Declaration

```swift
func CVImageBufferGetDisplaySize(_ imageBuffer: CVImageBuffer) -> CGSize
```

## Parameters

- `imageBuffer`: The image buffer containing the display size to retrieve.

<a id="return-value"></a>

## Return Value

A [CGSize](../corefoundation/cgsize.md) structure defining the nominal display size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBuffer](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

For example, for an NTSC DV frame, this function returns a size of 640 x 480.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect(\_:)](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace(\_:)](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetEncodedSize(\_:)](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped(\_:)](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.

# CVImageBufferGetDisplaySize (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the nominal output display size, in square pixels, of a Core Video image buffer.

## Declaration

```objectivec
extern CGSize CVImageBufferGetDisplaySize(CVImageBufferRef imageBuffer);
```

## Parameters

- `imageBuffer`: The image buffer containing the display size to retrieve.

<a id="return-value"></a>

## Return Value

A [CGSize](../corefoundation/cgsize.md) structure defining the nominal display size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBufferRef](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

For example, for an NTSC DV frame, this function returns a size of 640 x 480.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetEncodedSize](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.
