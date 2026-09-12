> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/suspend()](https://developer.apple.com/documentation/foundation/nsxpclistener/suspend())

# suspend() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suspends the listener.

## Declaration

```swift
func suspend()
```

<a id="Discussion"></a>

## Discussion

As you cannot invalidate a suspended listener, every call to [suspend()](suspend%28%29.md) that you make must be balanced by a call to [resume()](resume%28%29.md).

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the listener.
- [resume()](resume%28%29.md): Starts processing of incoming requests.
- [invalidate()](invalidate%28%29.md): Invalidates the listener.

# suspend (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Suspends the listener.

## Declaration

```objectivec
- (void) suspend;
```

<a id="Discussion"></a>

## Discussion

As you cannot invalidate a suspended listener, every call to [suspend](suspend%28%29.md) that you make must be balanced by a call to [resume](resume%28%29.md).

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the listener.
- [resume](resume%28%29.md): Starts processing of incoming requests.
- [invalidate](invalidate%28%29.md): Invalidates the listener.
