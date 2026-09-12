> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpclistener/activate()](https://developer.apple.com/documentation/xpc/xpclistener/activate())

# activate()

**Framework:** XPC  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 17.0+ · macOS 14.0+

Activates an inactive listener.

## Declaration

```swift
func activate() throws
```

<a id="Discussion"></a>

## Discussion

If you create an inactive listener using the [inactive](initializationoptions/inactive.md) flag, be sure to activate it before releasing the last reference to the listener. Releasing the last reference to an inactive listener crashes.

If activation fails, the system automatically cancels the listener.

## See Also

### Managing the life cycle

- [cancel()](cancel%28%29.md): Cancels a listener.
