> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/pressurechange(with:)](https://developer.apple.com/documentation/appkit/nsresponder/pressurechange(with:))

# pressureChange(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10.3+

Indicates a pressure change as the result of a user input event on a system that supports pressure sensitivity.

## Declaration

```swift
func pressureChange(with event: NSEvent)
```

## Parameters

- `event`: An `NSEvent` object encapsulating information about the event that invoked the change in pressure.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in response to user actions. `event` is the event that initiated the change in pressure.

## See Also

### Related Documentation

- [NSEvent](../nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.

# pressureChangeWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10.3+

Indicates a pressure change as the result of a user input event on a system that supports pressure sensitivity.

## Declaration

```objectivec
- (void) pressureChangeWithEvent:(NSEvent *) event;
```

## Parameters

- `event`: An `NSEvent` object encapsulating information about the event that invoked the change in pressure.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically in response to user actions. `event` is the event that initiated the change in pressure.

## See Also

### Related Documentation

- [NSEvent](../nsevent.md): An object that contains information about an input action, such as a mouse click or a key press.
