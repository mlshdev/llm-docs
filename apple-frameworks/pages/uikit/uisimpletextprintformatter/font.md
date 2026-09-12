> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisimpletextprintformatter/font](https://developer.apple.com/documentation/uikit/uisimpletextprintformatter/font)

# font (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The font of the printed text.

## Declaration

```swift
var font: UIFont? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil` (the default), UIKit uses the standard system font, 12 points.

## See Also

### Text attributes for printed content

- [color](color.md): The color of the printed text.
- [textAlignment](textalignment.md): The alignment of the printed text.

# font (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

The font of the printed text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIFont * font;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil` (the default), UIKit uses the standard system font, 12 points.

## See Also

### Text attributes for printed content

- [color](color.md): The color of the printed text.
- [textAlignment](textalignment.md): The alignment of the printed text.
