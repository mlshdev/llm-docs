> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscondition/broadcast()](https://developer.apple.com/documentation/foundation/nscondition/broadcast())

# broadcast() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Signals the condition, waking up all threads waiting on it.

## Declaration

```swift
func broadcast()
```

<a id="Discussion"></a>

## Discussion

If no threads are waiting on the condition, this method does nothing.

To avoid race conditions, you should invoke this method only while the receiver is locked.

## See Also

### Signaling Waiting Threads

- [signal()](signal%28%29.md): Signals the condition, waking up one thread waiting on it.

# broadcast (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Signals the condition, waking up all threads waiting on it.

## Declaration

```objectivec
- (void) broadcast;
```

<a id="Discussion"></a>

## Discussion

If no threads are waiting on the condition, this method does nothing.

To avoid race conditions, you should invoke this method only while the receiver is locked.

## See Also

### Signaling Waiting Threads

- [signal](signal%28%29.md): Signals the condition, waking up one thread waiting on it.
