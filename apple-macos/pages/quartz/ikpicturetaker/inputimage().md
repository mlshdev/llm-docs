> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikpicturetaker/inputimage()](https://developer.apple.com/documentation/quartz/ikpicturetaker/inputimage())

# inputImage() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the  input  image associated with the picture taker.

## Declaration

```swift
func inputImage() -> NSImage!
```

<a id="return-value"></a>

## Return Value

The input image.

<a id="Discussion"></a>

## Discussion

The input image is never modified by the picture taker.

## See Also

### Getting and Setting Images

- [setInputImage(\_:)](setinputimage%28__%29.md): Set the image input for the picture taker.
- [outputImage()](outputimage%28%29.md): Returns the edited image.

# inputImage (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the  input  image associated with the picture taker.

## Declaration

```objectivec
- (NSImage *) inputImage;
```

<a id="return-value"></a>

## Return Value

The input image.

<a id="Discussion"></a>

## Discussion

The input image is never modified by the picture taker.

## See Also

### Getting and Setting Images

- [setInputImage:](setinputimage%28__%29.md): Set the image input for the picture taker.
- [outputImage](outputimage%28%29.md): Returns the edited image.
