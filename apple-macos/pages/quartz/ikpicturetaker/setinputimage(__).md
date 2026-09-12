> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/setinputimage(_:)](https://developer.apple.com/documentation/quartz/ikpicturetaker/setinputimage(_:))

# setInputImage(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Set the image input for the picture taker.

## Declaration

```swift
func setInputImage(_ image: NSImage!)
```

## Parameters

- `image`: An `NSImage` object.

<a id="Discussion"></a>

## Discussion

The input image is never modified by the picture taker.

## See Also

### Getting and Setting Images

- [inputImage()](inputimage%28%29.md): Returns the input image associated with the picture taker.
- [outputImage()](outputimage%28%29.md): Returns the edited image.

# setInputImage: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Set the image input for the picture taker.

## Declaration

```objectivec
- (void) setInputImage:(NSImage *) image;
```

## Parameters

- `image`: An `NSImage` object.

<a id="Discussion"></a>

## Discussion

The input image is never modified by the picture taker.

## See Also

### Getting and Setting Images

- [inputImage](inputimage%28%29.md): Returns the input image associated with the picture taker.
- [outputImage](outputimage%28%29.md): Returns the edited image.
