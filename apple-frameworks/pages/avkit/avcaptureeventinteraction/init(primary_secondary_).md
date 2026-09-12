> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureeventinteraction/init(primary:secondary:)](https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/init(primary:secondary:))

# init(primary:secondary:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.

## Declaration

```swift
init(primary primaryHandler: @escaping (AVCaptureEvent) -> Void, secondary secondaryHandler: @escaping (AVCaptureEvent) -> Void)
```

## Parameters

- `primaryHandler`: An event handler the system calls when a person performs a primary capture event.
- `secondaryHandler`: An event handler the system calls when a person performs a secondary capture event.

## See Also

### Creating an interaction

- [init(handler:)](init%28handler_%29.md): Creates a capture event interaction with a handler that responds to presses of hardware buttons.

# initWithPrimaryEventHandler:secondaryEventHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.

## Declaration

```objectivec
- (instancetype) initWithPrimaryEventHandler:(void (^)(AVCaptureEvent *event)) primaryHandler secondaryEventHandler:(void (^)(AVCaptureEvent *event)) secondaryHandler;
```

## Parameters

- `primaryHandler`: An event handler the system calls when a person performs a primary capture event.
- `secondaryHandler`: An event handler the system calls when a person performs a secondary capture event.

## See Also

### Creating an interaction

- [initWithEventHandler:](init%28handler_%29.md): Creates a capture event interaction with a handler that responds to presses of hardware buttons.
