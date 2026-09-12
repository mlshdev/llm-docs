> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior)

# NSSliderAccessoryBehavior (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

## Declaration

```swift
@MainActor class NSSliderAccessoryBehavior
```

## Topics

### Initializers

- [init(handler:)](nsslideraccessorybehavior/init%28handler_%29.md): The handler block is invoked on interaction.
- [init(target:action:)](nsslideraccessorybehavior/init%28target_action_%29.md): The action is sent to the target on interaction.
- [init(coder:)](nsslideraccessorybehavior/init%28coder_%29.md)

### Type Properties

- [automatic](nsslideraccessorybehavior/automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueReset](nsslideraccessorybehavior/valuereset.md): The value of the slider is reset to the associated value for the accessory.
- [valueStep](nsslideraccessorybehavior/valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

### Instance Methods

- [handleAction(\_:)](nsslideraccessorybehavior/handleaction%28__%29.md): Override point for custom subclasses to handle interaction.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Accessories

- [NSSliderAccessory](nsslideraccessory.md)
- [NSSliderAccessory.Width](nsslideraccessory/width.md)

# NSSliderAccessoryBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

## Declaration

```objectivec
@interface NSSliderAccessoryBehavior : NSObject
```

## Topics

### Initializers

- [behaviorWithHandler:](nsslideraccessorybehavior/init%28handler_%29.md): The handler block is invoked on interaction.
- [behaviorWithTarget:action:](nsslideraccessorybehavior/init%28target_action_%29.md): The action is sent to the target on interaction.

### Type Properties

- [automaticBehavior](nsslideraccessorybehavior/automatic.md): The behavior is automatically picked to be the system standard, given the slider’s current context.
- [valueResetBehavior](nsslideraccessorybehavior/valuereset.md): The value of the slider is reset to the associated value for the accessory.
- [valueStepBehavior](nsslideraccessorybehavior/valuestep.md): The value of the slider moves towards the associated value for the accessory with by a delta of the slider’s `altIncrementValue`.

### Instance Methods

- [handleAction:](nsslideraccessorybehavior/handleaction%28__%29.md): Override point for custom subclasses to handle interaction.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Accessories

- [NSSliderAccessory](nsslideraccessory.md)
- [NSSliderAccessoryWidth](nsslideraccessory/width.md)
