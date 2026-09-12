> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/setimage:](https://developer.apple.com/documentation/appkit/nsslider/setimage:)

# setImage:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Sets the image the slider displays in the bar behind its knob.

> No replacement needed.

## Declaration

```objectivec
- (void) setImage:(NSImage *) backgroundImage;
```

## Parameters

- `backgroundImage`: The image to set.

<a id="Discussion"></a>

## Discussion

The slider may scale and distort `barImage` to fit inside the bar.

The knob may cover part of the image. If you want the image to be visible all the time, you’re better off placing it near the slider.

## See Also

### Managing the slider’s image

- [image](image.md): Deprecated. Returns `nil`.
