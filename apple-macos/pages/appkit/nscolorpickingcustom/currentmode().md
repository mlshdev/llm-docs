> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickingcustom/currentmode()](https://developer.apple.com/documentation/appkit/nscolorpickingcustom/currentmode())

# currentMode() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s current mode (or submode, if applicable).

## Declaration

```swift
@MainActor func currentMode() -> NSColorPanel.Mode
```

<a id="return-value"></a>

## Return Value

The current color picker mode. The returned value should be unique to your color picker. See this protocol description’s list of the unique values for the standard color pickers used by the Application Kit.

## See Also

### Getting Color Picker Information

- [supportsMode(\_:)](supportsmode%28__%29.md): Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.

# currentMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the receiver’s current mode (or submode, if applicable).

## Declaration

```objectivec
- (NSColorPanelMode) currentMode;
```

<a id="return-value"></a>

## Return Value

The current color picker mode. The returned value should be unique to your color picker. See this protocol description’s list of the unique values for the standard color pickers used by the Application Kit.

## See Also

### Getting Color Picker Information

- [supportsMode:](supportsmode%28__%29.md): Returns a Boolean value indicating whether or not the receiver supports the specified picking mode.
