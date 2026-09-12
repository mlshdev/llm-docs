> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagebufferisflipped(_:)](https://developer.apple.com/documentation/corevideo/cvimagebufferisflipped(_:))

# CVImageBufferIsFlipped(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the image is vertically flipped.

## Declaration

```swift
func CVImageBufferIsFlipped(_ imageBuffer: CVImageBuffer) -> Bool
```

## Parameters

- `imageBuffer`: An image buffer.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if `{0,0}` represents the upper left of the image, or [false](https://developer.apple.com/documentation/swift/false) if `{0,0}` represents the lower left of the image.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect(\_:)](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace(\_:)](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize(\_:)](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize(\_:)](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.

# CVImageBufferIsFlipped (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the image is vertically flipped.

## Declaration

```objectivec
extern Boolean CVImageBufferIsFlipped(CVImageBufferRef imageBuffer);
```

## Parameters

- `imageBuffer`: An image buffer.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if `{0,0}` represents the upper left of the image, or [false](https://developer.apple.com/documentation/swift/false) if `{0,0}` represents the lower left of the image.

## See Also

### Inspecting image buffers

- [CVImageBufferGetCleanRect](cvimagebuffergetcleanrect%28__%29.md): Returns the source rectangle of a Core Video image buffer that represents the clean aperture of the buffer in encoded pixels.
- [CVImageBufferGetColorSpace](cvimagebuffergetcolorspace%28__%29.md): Returns the color space of a Core Video image buffer.
- [CVImageBufferGetDisplaySize](cvimagebuffergetdisplaysize%28__%29.md): Returns the nominal output display size, in square pixels, of a Core Video image buffer.
- [CVImageBufferGetEncodedSize](cvimagebuffergetencodedsize%28__%29.md): Returns the full encoded dimensions of a Core Video image buffer.
