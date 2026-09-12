> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebuffergetcleanrect(_:)](https://developer.apple.com/documentation/corevideo/cvimagebuffergetcleanrect(_:))

# CVImageBufferGetCleanRect(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.

## Declaration

```swift
func CVImageBufferGetCleanRect(_ imageBuffer: CVImageBuffer) -> CGRect
```

## Parameters

- `imageBuffer`: The image buffer containing the clean aperture to retrieve.

<a id="return-value"></a>

## Return Value

A [CGRect](../corefoundation/cgrect.md) structure returning the nominal display size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBuffer](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

The clean aperture size is smaller than the full size of the image. For example, for an NTSC DV frame, this function returns a [CGRect](../corefoundation/cgrect.md) structure with an origin of `(8,0)` and a size of 704 x 480.

> **Note**

>  The origin of this rectangle is always in the lower-left corner. This is the same coordinate system as that used by Quartz and Core Image.

## See Also

### Inspecting image buffers

- [CVImageBufferGetColorSpace(\_:)](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize(\_:)](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize(\_:)](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped(\_:)](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.

# CVImageBufferGetCleanRect (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.

## Declaration

```objectivec
extern CGRect CVImageBufferGetCleanRect(CVImageBufferRef imageBuffer);
```

## Parameters

- `imageBuffer`: The image buffer containing the clean aperture to retrieve.

<a id="return-value"></a>

## Return Value

A [CGRect](../corefoundation/cgrect.md) structure returning the nominal display size of the image buffer. The size is zero if you pass a value for the image buffer that isn’t a [CVImageBufferRef](cvimagebuffer.md) type.

<a id="Discussion"></a>

## Discussion

The clean aperture size is smaller than the full size of the image. For example, for an NTSC DV frame, this function returns a [CGRect](../corefoundation/cgrect.md) structure with an origin of `(8,0)` and a size of 704 x 480.

> **Note**

>  The origin of this rectangle is always in the lower-left corner. This is the same coordinate system as that used by Quartz and Core Image.

## See Also

### Inspecting image buffers

- [CVImageBufferGetColorSpace](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
- [CVImageBufferIsFlipped](cvimagebufferisflipped%28__%29.md): Returns a Boolean value indicating whether the image is vertically flipped.
