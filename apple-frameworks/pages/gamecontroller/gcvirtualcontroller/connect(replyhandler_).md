> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/connect(replyhandler:)](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/connect(replyhandler:))

# connect(replyHandler:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Connects the virtual controller to the device and displays it on the screen.

## Declaration

```swift
func connect(replyHandler reply: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func connect() async throws
```

## Parameters

- `reply`: A closure that the method calls upon completion with the following parameter:

  - **`error`**: Describes an error if it occurs, or returns `nil` if the operation completes.

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="Discussion"></a>

## Discussion

After you invoke this method, the framework calls any input handlers you set for the elements, or you can poll the elements for their values.

## See Also

### Connecting and displaying virtual controllers

- [disconnect()](disconnect%28%29.md): Disconnects the virtual controller from the device and removes it from the screen.

# connectWithReplyHandler: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Connects the virtual controller to the device and displays it on the screen.

## Declaration

```objectivec
- (void) connectWithReplyHandler:(void (^)(NSError *error)) reply;
```

## Parameters

- `reply`: A closure that the method calls upon completion with the following parameter:

  - **`error`**: Describes an error if it occurs, or returns `nil` if the operation completes.

## Mentioned In

- [Adding virtual controls to games that support game controllers in iOS](../adding-virtual-controls-to-games-that-support-game-controllers-in-ios.md)

<a id="Discussion"></a>

## Discussion

After you invoke this method, the framework calls any input handlers you set for the elements, or you can poll the elements for their values.

## See Also

### Connecting and displaying virtual controllers

- [disconnect](disconnect%28%29.md): Disconnects the virtual controller from the device and removes it from the screen.
