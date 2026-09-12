> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssavepanel/ok(_:)](https://developer.apple.com/documentation/appkit/nssavepanel/ok(_:))

# ok(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method that the panel calls when the user clicks the OK button.

## Declaration

```swift
@IBAction func ok(_ sender: Any?)
```

## Parameters

- `sender`: The [NSSavePanel](../nssavepanel.md) object that contains the OK button.

<a id="Discussion"></a>

## Discussion

In macOS 10.15 and later, you cannot call this method programmatically to trigger the OK action. Prior to macOS 10.15, AppKit prevented only sandboxed apps from calling this method.

## See Also

### Handling Actions

- [cancel(\_:)](cancel%28__%29.md): The action method that the panel calls when the user clicks the Cancel button.

# ok: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

The action method that the panel calls when the user clicks the OK button.

## Declaration

```objectivec
- (void) ok:(id) sender;
```

## Parameters

- `sender`: The [NSSavePanel](../nssavepanel.md) object that contains the OK button.

<a id="Discussion"></a>

## Discussion

In macOS 10.15 and later, you cannot call this method programmatically to trigger the OK action. Prior to macOS 10.15, AppKit prevented only sandboxed apps from calling this method.

## See Also

### Handling Actions

- [cancel:](cancel%28__%29.md): The action method that the panel calls when the user clicks the Cancel button.
