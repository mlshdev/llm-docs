> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setbackgroundimagedata(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setbackgroundimagedata(_:))

# setBackgroundImageData(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the image in the specified data object.

## Declaration

```swift
func setBackgroundImageData(_ imageData: Data?)
```

## Parameters

- `imageData`: A data object containing the image data in its native format. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

Use this method when you already have image data in the raw PNG or JPG format. This method sends the data as-is, which lets you send the data in a compressed format. Sending compressed data is often more efficient than sending a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) object.

## See Also

### Setting the Group’s Content

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.

# setBackgroundImageData: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the image in the specified data object.

## Declaration

```objectivec
- (void) setBackgroundImageData:(NSData *) imageData;
```

## Parameters

- `imageData`: A data object containing the image data in its native format. Specifying `nil` removes the existing image, causing the watch interface to display nothing in the space previously occupied by the image.

<a id="Discussion"></a>

## Discussion

Use this method when you already have image data in the raw PNG or JPG format. This method sends the data as-is, which lets you send the data in a compressed format. Sending compressed data is often more efficient than sending a [UIImage](https://developer.apple.com/documentation/uikit/uiimage) object.

## See Also

### Setting the Group’s Content

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImage:](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.
