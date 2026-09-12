> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/resume()](https://developer.apple.com/documentation/foundation/nsxpclistener/resume())

# resume() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts processing of incoming requests.

## Declaration

```swift
func resume()
```

<a id="Discussion"></a>

## Discussion

All listeners start suspended and must be resumed before they begin processing incoming requests.

If called on the [service()](service%28%29.md) object, this method never returns. Therefore, you should call it as the last step inside the XPC service’s `main` function after setting up any desired initial state and configuring the listener itself.

If called on any other [NSXPCListener](../nsxpclistener.md), the connection is resumed, and the method returns immediately.

## See Also

### Managing connection state

- [activate()](activate%28%29.md): Activates the listener.
- [invalidate()](invalidate%28%29.md): Invalidates the listener.
- [suspend()](suspend%28%29.md): Suspends the listener.

# resume (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts processing of incoming requests.

## Declaration

```objectivec
- (void) resume;
```

<a id="Discussion"></a>

## Discussion

All listeners start suspended and must be resumed before they begin processing incoming requests.

If called on the [serviceListener](service%28%29.md) object, this method never returns. Therefore, you should call it as the last step inside the XPC service’s `main` function after setting up any desired initial state and configuring the listener itself.

If called on any other [NSXPCListener](../nsxpclistener.md), the connection is resumed, and the method returns immediately.

## See Also

### Managing connection state

- [activate](activate%28%29.md): Activates the listener.
- [invalidate](invalidate%28%29.md): Invalidates the listener.
- [suspend](suspend%28%29.md): Suspends the listener.
