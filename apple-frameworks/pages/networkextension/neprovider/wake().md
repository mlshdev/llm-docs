> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/wake()](https://developer.apple.com/documentation/networkextension/neprovider/wake())

# wake() (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Handle a wake event.

## Declaration

```swift
func wake()
```

<a id="Discussion"></a>

## Discussion

This method is called by the system when the device wakes up from sleep mode.

`NEProvider` subclasses should override this method if the provider needs to perform any tasks when the device wakes up, such as reconnecting a tunnel connection.

## See Also

### Handling sleep and wake

- [sleep(completionHandler:)](sleep%28completionhandler_%29.md): Handle a sleep event.

# wake (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Handle a wake event.

## Declaration

```objectivec
- (void) wake;
```

<a id="Discussion"></a>

## Discussion

This method is called by the system when the device wakes up from sleep mode.

`NEProvider` subclasses should override this method if the provider needs to perform any tasks when the device wakes up, such as reconnecting a tunnel connection.

## See Also

### Handling sleep and wake

- [sleepWithCompletionHandler:](sleep%28completionhandler_%29.md): Handle a sleep event.
