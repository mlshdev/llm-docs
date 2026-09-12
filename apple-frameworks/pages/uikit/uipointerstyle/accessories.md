> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerstyle/accessories](https://developer.apple.com/documentation/uikit/uipointerstyle/accessories)

# accessories (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Accessories to display alongside the pointer.

## Declaration

```swift
var accessories: [UIPointerAccessory] { get set }
```

<a id="Discussion"></a>

## Discussion

This property supports up to four pointer accessories. The system animates between neighboring or similar accessories.

## See Also

### Specifying pointer accessories

- [UIPointerAccessory](../uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.

# accessories (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Accessories to display alongside the pointer.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UIPointerAccessory *> * accessories;
```

<a id="Discussion"></a>

## Discussion

This property supports up to four pointer accessories. The system animates between neighboring or similar accessories.

## See Also

### Specifying pointer accessories

- [UIPointerAccessory](../uipointeraccessory.md): Constants that describe accessories to display alongside the primary pointer.
