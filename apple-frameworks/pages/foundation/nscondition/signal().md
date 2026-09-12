> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscondition/signal()](https://developer.apple.com/documentation/foundation/nscondition/signal())

# signal() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Signals the condition, waking up one thread waiting on it.

## Declaration

```swift
func signal()
```

<a id="Discussion"></a>

## Discussion

You use this method to wake up one thread that is waiting on the condition. You may call this method multiple times to wake up multiple threads. If no threads are waiting on the condition, this method does nothing.

To avoid race conditions, you should invoke this method only while the receiver is locked.

## See Also

### Signaling Waiting Threads

- [broadcast()](broadcast%28%29.md): Signals the condition, waking up all threads waiting on it.

# signal (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Signals the condition, waking up one thread waiting on it.

## Declaration

```objectivec
- (void) signal;
```

<a id="Discussion"></a>

## Discussion

You use this method to wake up one thread that is waiting on the condition. You may call this method multiple times to wake up multiple threads. If no threads are waiting on the condition, this method does nothing.

To avoid race conditions, you should invoke this method only while the receiver is locked.

## See Also

### Signaling Waiting Threads

- [broadcast](broadcast%28%29.md): Signals the condition, waking up all threads waiting on it.
