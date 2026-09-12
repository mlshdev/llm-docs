> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfauthorizationview/setdelegate(_:)](https://developer.apple.com/documentation/securityinterface/sfauthorizationview/setdelegate(_:))

# setDelegate(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the delegate for this authorization view.

## Declaration

```swift
func setDelegate(_ delegate: Any!)
```

## Parameters

- `delegate`: The object to which messages about the state of the authorization object should be sent.

<a id="Discussion"></a>

## Discussion

If you want to be notified of state changes (for example, when the user clicks the button), set a delegate and implement the delegate methods described in the delegate methods section.

## See Also

### Setting and getting the delegate for the view

- [delegate()](delegate%28%29.md): Returns the delegate for this view.

# setDelegate: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the delegate for this authorization view.

## Declaration

```objectivec
- (void) setDelegate:(id) delegate;
```

## Parameters

- `delegate`: The object to which messages about the state of the authorization object should be sent.

<a id="Discussion"></a>

## Discussion

If you want to be notified of state changes (for example, when the user clicks the button), set a delegate and implement the delegate methods described in the delegate methods section.

## See Also

### Setting and getting the delegate for the view

- [delegate](delegate%28%29.md): Returns the delegate for this view.
