> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswitch/offimage](https://developer.apple.com/documentation/uikit/uiswitch/offimage)

# offImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image displayed when the switch is in the off position.

## Declaration

```swift
var offImage: UIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, this property has no effect.

In iOS 6, this image represents the interior contents of the switch. The image you specify is composited with the switch’s rounded bezel and thumb to create the final appearance.

## See Also

### Deprecated

- [onImage](onimage.md): The image displayed when the switch is in the on position.

# offImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The image displayed when the switch is in the off position.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIImage * offImage;
```

<a id="Discussion"></a>

## Discussion

In iOS 7 and later, this property has no effect.

In iOS 6, this image represents the interior contents of the switch. The image you specify is composited with the switch’s rounded bezel and thumb to create the final appearance.

## See Also

### Deprecated

- [onImage](onimage.md): The image displayed when the switch is in the on position.
