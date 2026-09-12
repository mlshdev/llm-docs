> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/stretchableimage(withleftcapwidth:topcapheight:)](https://developer.apple.com/documentation/uikit/uiimage/stretchableimage(withleftcapwidth:topcapheight:))

# stretchableImage(withLeftCapWidth:topCapHeight:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS · watchOS

Creates and returns a new image object with the specified cap values.

> Use the [resizableImage(withCapInsets:)](resizableimage%28withcapinsets_%29.md) instead, specifying cap insets such that the interior is a `1x1` area.

## Declaration

```swift
func stretchableImage(withLeftCapWidth leftCapWidth: Int, topCapHeight: Int) -> UIImage
```

## Parameters

- `leftCapWidth`: The value to use for the left cap width. Specify `0` if you want the entire image to be horizontally stretchable. For a discussion of how a non-zero value affects the image, see the [leftCapWidth](leftcapwidth.md) property.
- `topCapHeight`: The value to use for the top cap height. Specify `0` if you want the entire image to be vertically stretchable. For a discussion of how a non-zero value affects the image, see the [topCapHeight](topcapheight.md) property.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap values.

<a id="Discussion"></a>

## Discussion

During scaling or resizing of the image, areas covered by a cap are not scaled or resized. Instead, the 1-pixel wide area not covered by the cap in each direction is what is scaled or resized. This technique is often used to create variable-width buttons, which retain the same rounded corners but whose center region grows or shrinks as needed.

You use this method to add cap values to an image or to change the existing cap values of an image. In both cases, you get back a new image and the original image remains untouched.

## See Also

### Deprecated

- [leftCapWidth](leftcapwidth.md): Deprecated. The horizontal end-cap size.
- [topCapHeight](topcapheight.md): Deprecated. The vertical end-cap size.

# stretchableImageWithLeftCapWidth:topCapHeight: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS · watchOS

Creates and returns a new image object with the specified cap values.

> Use the [resizableImageWithCapInsets:](resizableimage%28withcapinsets_%29.md) instead, specifying cap insets such that the interior is a `1x1` area.

## Declaration

```objectivec
- (UIImage *) stretchableImageWithLeftCapWidth:(NSInteger) leftCapWidth topCapHeight:(NSInteger) topCapHeight;
```

## Parameters

- `leftCapWidth`: The value to use for the left cap width. Specify `0` if you want the entire image to be horizontally stretchable. For a discussion of how a non-zero value affects the image, see the [leftCapWidth](leftcapwidth.md) property.
- `topCapHeight`: The value to use for the top cap height. Specify `0` if you want the entire image to be vertically stretchable. For a discussion of how a non-zero value affects the image, see the [topCapHeight](topcapheight.md) property.

<a id="return-value"></a>

## Return Value

A new image object with the specified cap values.

<a id="Discussion"></a>

## Discussion

During scaling or resizing of the image, areas covered by a cap are not scaled or resized. Instead, the 1-pixel wide area not covered by the cap in each direction is what is scaled or resized. This technique is often used to create variable-width buttons, which retain the same rounded corners but whose center region grows or shrinks as needed.

You use this method to add cap values to an image or to change the existing cap values of an image. In both cases, you get back a new image and the original image remains untouched.

## See Also

### Deprecated

- [leftCapWidth](leftcapwidth.md): Deprecated. The horizontal end-cap size.
- [topCapHeight](topcapheight.md): Deprecated. The vertical end-cap size.
