> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setbackgroundimagenamed(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setbackgroundimagenamed(_:))

# setBackgroundImageNamed(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the image in the specified resource file.

## Declaration

```swift
func setBackgroundImageNamed(_ imageName: String?)
```

## Parameters

- `imageName`: The name of the image to be loaded from the WatchKit app’s bundle. For images in the bundle, specify the filename of the image and include the filename extension in the name. You may specify an image file that contains multiple images running as an animation.

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name in the Watch app’s bundle and uses it as the background image for the group. If the specified image cannot be found, the group displays no background image.

## See Also

### Setting the Group’s Content

- [setBackgroundColor(\_:)](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.

# setBackgroundImageNamed: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background image of the group container to the image in the specified resource file.

## Declaration

```objectivec
- (void) setBackgroundImageNamed:(NSString *) imageName;
```

## Parameters

- `imageName`: The name of the image to be loaded from the WatchKit app’s bundle. For images in the bundle, specify the filename of the image and include the filename extension in the name. You may specify an image file that contains multiple images running as an animation.

<a id="Discussion"></a>

## Discussion

This method looks for an image with the specified name in the Watch app’s bundle and uses it as the background image for the group. If the specified image cannot be found, the group displays no background image.

## See Also

### Setting the Group’s Content

- [setBackgroundColor:](setbackgroundcolor%28__%29.md): Changes the background color for the group container.
- [setBackgroundImage:](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.
