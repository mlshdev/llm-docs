> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setbackgroundimage(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setbackgroundimage(_:))

# setBackgroundImage(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the specified image.

## Declaration

```swift
func setBackgroundImage(_ image: UIImage?)
```

## Parameters

- `image`: The background image to be displayed behind all items in the group. Specifying `nil` removes the existing image, causing the background color to show through. You may specify an image object that contains multiple images running as an animation.

## See Also

### Setting the Group’s Content

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.

# setBackgroundImage: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the specified image.

## Declaration

```objectivec
- (void) setBackgroundImage:(UIImage *) image;
```

## Parameters

- `image`: The background image to be displayed behind all items in the group. Specifying `nil` removes the existing image, causing the background color to show through. You may specify an image object that contains multiple images running as an animation.

## See Also

### Setting the Group’s Content

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.
