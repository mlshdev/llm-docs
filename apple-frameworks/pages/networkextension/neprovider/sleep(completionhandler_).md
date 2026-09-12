> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/sleep(completionhandler:)](https://developer.apple.com/documentation/networkextension/neprovider/sleep(completionhandler:))

# sleep(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Handle a sleep event.

## Declaration

```swift
func sleep(completionHandler: @escaping @Sendable () -> Void)
```

```swift
func sleep() async
```

## Parameters

- `completionHandler`: Implementations of this method must execute this block when the provider is finished handling the sleep event.

<a id="Discussion"></a>

## Discussion

This method is called by the system when the device is about to go to sleep.

`NEProvider` subclasses should override this method if the provider needs to perform any tasks before the device sleeps, such as disconnecting a tunnel connection.

## See Also

### Handling sleep and wake

- [wake()](wake%28%29.md): Handle a wake event.

# sleepWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Handle a sleep event.

## Declaration

```objectivec
- (void) sleepWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: Implementations of this method must execute this block when the provider is finished handling the sleep event.

<a id="Discussion"></a>

## Discussion

This method is called by the system when the device is about to go to sleep.

`NEProvider` subclasses should override this method if the provider needs to perform any tasks before the device sleeps, such as disconnecting a tunnel connection.

## See Also

### Handling sleep and wake

- [wake](wake%28%29.md): Handle a wake event.
