> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventinteraction/init(handler:)](https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/init(handler:))

# init(handler:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Creates a capture event interaction with a handler that responds to presses of hardware buttons.

## Declaration

```swift
init(handler: @escaping (AVCaptureEvent) -> Void)
```

## Parameters

- `handler`: An event handler the system calls when a person performs a primary or secondary capture event.

## See Also

### Creating an interaction

- [init(primary:secondary:)](init%28primary_secondary_%29.md): Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.

# initWithEventHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Creates a capture event interaction with a handler that responds to presses of hardware buttons.

## Declaration

```objectivec
- (instancetype) initWithEventHandler:(void (^)(AVCaptureEvent *event)) handler;
```

## Parameters

- `handler`: An event handler the system calls when a person performs a primary or secondary capture event.

## See Also

### Creating an interaction

- [initWithPrimaryEventHandler:secondaryEventHandler:](init%28primary_secondary_%29.md): Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.
