> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/buttonmask-swift.struct/button(_:)](https://developer.apple.com/documentation/uikit/uievent/buttonmask-swift.struct/button(_:))

# button(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Creates a button mask from the specified button index.

## Declaration

```swift
static func button(_ buttonNumber: Int) -> UIEvent.ButtonMask
```

## Parameters

- `buttonNumber`: The index of the button on the input device. Pass `1` to represent [primary](primary.md), and `2` to represent [secondary](secondary.md).

## See Also

### Creating button masks

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a button mask with the specified raw value.

# UIEventButtonMaskForButtonNumber (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Creates a button mask from the specified button index.

## Declaration

```objectivec
extern UIEventButtonMask UIEventButtonMaskForButtonNumber(NSInteger buttonNumber);
```

## Parameters

- `buttonNumber`: The index of the button on the input device. Pass `1` to represent [UIEventButtonMaskPrimary](primary.md), and `2` to represent [UIEventButtonMaskSecondary](secondary.md).
