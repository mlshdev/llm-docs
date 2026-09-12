> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatetrustpanel/setinformativetext(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/setinformativetext(_:))

# setInformativeText(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the (optional) informative text displayed in the panel.

## Declaration

```swift
func setInformativeText(_ informativeText: String!)
```

## Parameters

- `informativeText`: By default, informative text describing the current certificate’s trust status is displayed. Call this method only if your application needs to customize the displayed informative text.

## See Also

### Controlling the Appearance of a Certificate Trust Panel

- [informativeText()](informativetext%28%29.md): Returns the (optional) informative text currently displayed in the panel.

# setInformativeText: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the (optional) informative text displayed in the panel.

## Declaration

```objectivec
- (void) setInformativeText:(NSString *) informativeText;
```

## Parameters

- `informativeText`: By default, informative text describing the current certificate’s trust status is displayed. Call this method only if your application needs to customize the displayed informative text.

## See Also

### Controlling the Appearance of a Certificate Trust Panel

- [informativeText](informativetext%28%29.md): Returns the (optional) informative text currently displayed in the panel.
