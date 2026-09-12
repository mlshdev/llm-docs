> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/timer/fire()](https://developer.apple.com/documentation/foundation/timer/fire())

# fire() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the timer’s message to be sent to its target.

## Declaration

```swift
func fire()
```

<a id="Discussion"></a>

## Discussion

You can use this method to fire a repeating timer without interrupting its regular firing schedule. If the timer is non-repeating, it is automatically invalidated after firing, even if its scheduled fire date has not arrived.

## See Also

### Related Documentation

- [invalidate()](invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.

# fire (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Causes the timer’s message to be sent to its target.

## Declaration

```objectivec
- (void) fire;
```

<a id="Discussion"></a>

## Discussion

You can use this method to fire a repeating timer without interrupting its regular firing schedule. If the timer is non-repeating, it is automatically invalidated after firing, even if its scheduled fire date has not arrived.

## See Also

### Related Documentation

- [invalidate](invalidate%28%29.md): Stops the timer from ever firing again and requests its removal from its run loop.
