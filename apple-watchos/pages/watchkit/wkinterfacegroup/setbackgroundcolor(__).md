> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacegroup/setbackgroundcolor(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacegroup/setbackgroundcolor(_:))

# setBackgroundColor(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background color for the group container.

## Declaration

```swift
func setBackgroundColor(_ color: UIColor?)
```

## Parameters

- `color`: The solid background color to be displayed behind all items in the group. Specify `nil` to remove the custom color you previously set using this method.

<a id="Discussion"></a>

## Discussion

If you do not specify a custom background color or if you set the custom color to `nil`, the group uses the color assigned to the group object in your storyboard file. The default background color is clear.

If you set a custom background image for the group, the image is displayed on top of the background color. If the image contains any transparency, the background color shows through the transparent portions of the image.

Changes to the background color of a group are animatable.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Group’s Content

- [setBackgroundImage(\_:)](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageData(\_:)](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.
- [setBackgroundImageNamed(\_:)](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.

# setBackgroundColor: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Changes the background color for the group container.

## Declaration

```objectivec
- (void) setBackgroundColor:(UIColor *) color;
```

## Parameters

- `color`: The solid background color to be displayed behind all items in the group. Specify `nil` to remove the custom color you previously set using this method.

<a id="Discussion"></a>

## Discussion

If you do not specify a custom background color or if you set the custom color to `nil`, the group uses the color assigned to the group object in your storyboard file. The default background color is clear.

If you set a custom background image for the group, the image is displayed on top of the background color. If the image contains any transparency, the background color shows through the transparent portions of the image.

Changes to the background color of a group are animatable.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Group’s Content

- [setBackgroundImage:](setbackgroundimage%28__%29.md): Changes the background image of the group container to the specified image.
- [setBackgroundImageData:](setbackgroundimagedata%28__%29.md): Changes the background image of the group container to the image in the specified data object.
- [setBackgroundImageNamed:](setbackgroundimagenamed%28__%29.md): Changes the background image of the group container to the image in the specified resource file.
