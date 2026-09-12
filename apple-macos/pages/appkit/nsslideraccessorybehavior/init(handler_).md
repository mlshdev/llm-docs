> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslideraccessorybehavior/init(handler:)](https://developer.apple.com/documentation/appkit/nsslideraccessorybehavior/init(handler:))

# init(handler:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12+

The handler block is invoked on interaction.

## Declaration

```swift
init(handler: @escaping (NSSliderAccessory) -> Void)
```

<a id="discussion"></a>

## Discussion

This variant is not codable and will assert in `-encodeWithCoder:`.

## See Also

### Initializers

- [init(target:action:)](init%28target_action_%29.md): The action is sent to the target on interaction.

# behaviorWithHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12+

The handler block is invoked on interaction.

## Declaration

```objectivec
+ (NSSliderAccessoryBehavior *) behaviorWithHandler:(void (^)(NSSliderAccessory *)) handler;
```

<a id="discussion"></a>

## Discussion

This variant is not codable and will assert in `-encodeWithCoder:`.

## See Also

### Initializers

- [behaviorWithTarget:action:](init%28target_action_%29.md): The action is sent to the target on interaction.
