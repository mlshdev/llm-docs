> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior/init(target:action:)](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior/init(target:action:))

# init(target:action:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The action is sent to the target on interaction.

## Declaration

```swift
init(target: Any?, action: Selector)
```

## Parameters

- `target`: An optional `NSSliderAccessory`.

## See Also

### Initializers

- [init(handler:)](init%28handler_%29.md): The handler block is invoked on interaction.

# behaviorWithTarget:action: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The action is sent to the target on interaction.

## Declaration

```objectivec
+ (NSSliderAccessoryBehavior *) behaviorWithTarget:(id) target action:(SEL) action;
```

## Parameters

- `target`: An optional `NSSliderAccessory`.

## See Also

### Initializers

- [behaviorWithHandler:](init%28handler_%29.md): The handler block is invoked on interaction.
