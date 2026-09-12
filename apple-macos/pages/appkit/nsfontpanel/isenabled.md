> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontpanel/isenabled](https://developer.apple.com/documentation/appkit/nsfontpanel/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that shows whether the receiver’s Set button is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The receiver continues to reflect the font of the selection for cooperating text objects regardless of this setting.

## See Also

### Enabling Font Changes

- [reloadDefaultFontFamilies()](reloaddefaultfontfamilies%28%29.md): Triggers a reload to the default state, so that the delegate is called.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that shows whether the receiver’s Set button is enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The receiver continues to reflect the font of the selection for cooperating text objects regardless of this setting.

## See Also

### Enabling Font Changes

- [reloadDefaultFontFamilies](reloaddefaultfontfamilies%28%29.md): Triggers a reload to the default state, so that the delegate is called.
