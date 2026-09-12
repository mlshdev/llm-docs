> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffergetencodedsize(_:)](https://developer.apple.com/documentation/corevideo/cvimagebuffergetencodedsize(_:))

# CVImageBufferGetEncodedSize(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full encoded dimensions of a Core Video image buffer.

## Declaration

```swift
func CVImageBufferGetEncodedSize(_ imageBuffer: CVImageBuffer) -> CGSize
```

## Parameters

- `imageBuffer`: The image buffer containing the encoded size to retrieve.

<a id="return-value"></a>

## Return Value

A [CGSize](../corefoundation/cgsize.md) structure defining the full encoded size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBuffer](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

For example, for an NTSC DV frame, this function returns an encoded size of 720 x 480. When you create a [CIImage](../coreimage/ciimage.md) object from a Core Video image buffer, use this call to retrieve the image size.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect(\_:)](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace(\_:)](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize(\_:)](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferIsFlipped(\_:)](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.

# CVImageBufferGetEncodedSize (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the full encoded dimensions of a Core Video image buffer.

## Declaration

```objectivec
extern CGSize CVImageBufferGetEncodedSize(CVImageBufferRef imageBuffer);
```

## Parameters

- `imageBuffer`: The image buffer containing the encoded size to retrieve.

<a id="return-value"></a>

## Return Value

A [CGSize](../corefoundation/cgsize.md) structure defining the full encoded size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBufferRef](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

For example, for an NTSC DV frame, this function returns an encoded size of 720 x 480. When you create a [CIImage](../coreimage/ciimage.md) object from a Core Video image buffer, use this call to retrieve the image size.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferIsFlipped](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.
