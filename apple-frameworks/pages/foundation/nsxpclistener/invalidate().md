> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/invalidate()](https://developer.apple.com/documentation/foundation/nsxpclistener/invalidate())

# invalidate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates the listener.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

After calling this method, no more connections are created. Once a listener is invalidated it may not be resumed or suspended.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the listener.
- [resume()](resume%28%29.md): Starts processing of incoming requests.
- [suspend()](suspend%28%29.md): Suspends the listener.

# invalidate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Invalidates the listener.

## Declaration

```objectivec
- (void) invalidate;
```

<a id="Discussion"></a>

## Discussion

After calling this method, no more connections are created. Once a listener is invalidated it may not be resumed or suspended.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the listener.
- [resume](resume%28%29.md): Starts processing of incoming requests.
- [suspend](suspend%28%29.md): Suspends the listener.
