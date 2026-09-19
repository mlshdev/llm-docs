> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsfontpanel/reloaddefaultfontfamilies()

# reloadDefaultFontFamilies() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Triggers a reload to the default state, so that the delegate is called.

## Declaration

```swift
func reloadDefaultFontFamilies()
```

<a id="Discussion"></a>

## Discussion

This reloading provides the delegate opportunity to scrutinize the default list of fonts to be displayed in the panel.

## See Also

### Enabling Font Changes

- [isEnabled](isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.

# reloadDefaultFontFamilies (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Triggers a reload to the default state, so that the delegate is called.

## Declaration

```objectivec
- (void) reloadDefaultFontFamilies;
```

<a id="Discussion"></a>

## Discussion

This reloading provides the delegate opportunity to scrutinize the default list of fonts to be displayed in the panel.

## See Also

### Enabling Font Changes

- [enabled](isenabled.md): A Boolean that shows whether the receiver’s Set button is enabled.
