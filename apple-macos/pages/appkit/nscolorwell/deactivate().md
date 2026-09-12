> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorwell/deactivate()](https://developer.apple.com/documentation/appkit/nscolorwell/deactivate())

# deactivate() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deactivates the color well.

## Declaration

```swift
func deactivate()
```

<a id="Discussion"></a>

## Discussion

This method detaches the color well from the system color panel. Future selections in the color panel don’t update the color well’s current color.

## See Also

### Activating and deactivating color wells

- [activate(\_:)](activate%28__%29.md): Activates the color well, displays the color panel, and synchronizes the two UI elements.
- [isActive](isactive.md): A Boolean value that indicates whether the color well is currently active.

# deactivate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Deactivates the color well.

## Declaration

```objectivec
- (void) deactivate;
```

<a id="Discussion"></a>

## Discussion

This method detaches the color well from the system color panel. Future selections in the color panel don’t update the color well’s current color.

## See Also

### Activating and deactivating color wells

- [activate:](activate%28__%29.md): Activates the color well, displays the color panel, and synchronizes the two UI elements.
- [active](isactive.md): A Boolean value that indicates whether the color well is currently active.
