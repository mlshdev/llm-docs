> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiswitch/onimage

# onImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image displayed when the switch is in the on position.

## Declaration

```swift
var onImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, this property has no effect.

In iOS 6, this image represents the interior contents of the switch. The image you specify is composited with the switch’s rounded bezel and thumb to create the final appearance.

## See Also

### Deprecated

- [offImage](offimage.md): The image displayed when the switch is in the off position.

# onImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image displayed when the switch is in the on position.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * onImage;
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, this property has no effect.

In iOS 6, this image represents the interior contents of the switch. The image you specify is composited with the switch’s rounded bezel and thumb to create the final appearance.

## See Also

### Deprecated

- [offImage](offimage.md): The image displayed when the switch is in the off position.
