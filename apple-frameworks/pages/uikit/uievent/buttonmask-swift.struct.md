> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uievent/buttonmask-swift.struct](https://developer.apple.com/documentation/uikit/uievent/buttonmask-swift.struct)

# UIEvent.ButtonMask (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Constants that indicate which input-device buttons are pressed.

## Declaration

```swift
struct ButtonMask
```

## Topics

### Creating button masks

- [init(rawValue:)](buttonmask-swift.struct/init%28rawvalue_%29.md): Creates a button mask with the specified raw value.
- [button(\_:)](buttonmask-swift.struct/button%28__%29.md): Creates a button mask from the specified button index.

### Accessing button masks

- [primary](buttonmask-swift.struct/primary.md): A constant that represents the primary button on the input device.
- [secondary](buttonmask-swift.struct/secondary.md): A constant that represents the secondary button on the input device.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the button mask

- [buttonMask](buttonmask-swift.property.md): A bit mask that represents which input-device buttons are pressed for the current event.

# UIEventButtonMask (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Constants that indicate which input-device buttons are pressed.

## Declaration

```objectivec
enum UIEventButtonMask : NSInteger;
```

## Topics

### Creating button masks

- [UIEventButtonMaskForButtonNumber](buttonmask-swift.struct/button%28__%29.md): Creates a button mask from the specified button index.

### Accessing button masks

- [UIEventButtonMaskPrimary](buttonmask-swift.struct/primary.md): A constant that represents the primary button on the input device.
- [UIEventButtonMaskSecondary](buttonmask-swift.struct/secondary.md): A constant that represents the secondary button on the input device.

## See Also

### Getting the button mask

- [buttonMask](buttonmask-swift.property.md): A bit mask that represents which input-device buttons are pressed for the current event.
