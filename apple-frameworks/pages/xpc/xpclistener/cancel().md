> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/cancel()](https://developer.apple.com/documentation/xpc/xpclistener/cancel())

# cancel()

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Cancels a listener.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Typically you don’t need to explicitly cancel a listener. When the server process exits, the system automatically cancels the listener. In rare circumstances, such as part of a testing infrastructure, you may want to cancel a listener to ensure it doesn’t receive any new messages. Be aware that canceling a listener causes peers attempting to connect to the service to hang.

## See Also

### Managing the life cycle

- [activate()](activate%28%29.md): Activates an inactive listener.
