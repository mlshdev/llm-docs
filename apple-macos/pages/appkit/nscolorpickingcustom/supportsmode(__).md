> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingcustom/supportsmode(_:)](https://developer.apple.com/documentation/appkit/nscolorpickingcustom/supportsmode(_:))

# supportsMode(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.

## Declaration

```swift
@MainActor func supportsMode(_ mode: NSColorPanel.Mode) -> Bool
```

## Parameters

- `mode`: The color picking mode.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color picker supports the specified color picking mode; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when the `NSColorPanel` is first initialized: It is used to attempt to restore the user’s previously selected mode. It is also invoked by `NSColorPanel`‘s [mode](../nscolorpanel/mode-swift.property.md) method to find the color picker that supports a particular mode. See this protocol description’s list of the unique mode values for the standard color pickers used by the Application Kit.

## See Also

### Getting Color Picker Information

- [currentMode()](currentmode%28%29.md): Returns the receiver’s current mode (or submode, if applicable).

# supportsMode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.

## Declaration

```objectivec
- (BOOL) supportsMode:(NSColorPanelMode) mode;
```

## Parameters

- `mode`: The color picking mode.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the color picker supports the specified color picking mode; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when the `NSColorPanel` is first initialized: It is used to attempt to restore the user’s previously selected mode. It is also invoked by `NSColorPanel`‘s [mode](../nscolorpanel/mode-swift.property.md) method to find the color picker that supports a particular mode. See this protocol description’s list of the unique mode values for the standard color pickers used by the Application Kit.

## See Also

### Getting Color Picker Information

- [currentMode](currentmode%28%29.md): Returns the receiver’s current mode (or submode, if applicable).
