> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscolorpanel/shared

# shared (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared `NSColorPanel` instance, creating it if necessary.

## Declaration

```swift
class var shared: NSColorPanel { get }
```

<a id="return-value"></a>

## Return Value

The shared `NSColorPanel` instance.

## See Also

### Related Documentation

- [NSColorPanel](../nscolorpanel.md): A standard user interface for selecting color in an app.

### Obtaining the shared color panel

- [sharedColorPanelExists](sharedcolorpanelexists.md): Returns a Boolean value indicating whether the `NSColorPanel` has been created already.

# sharedColorPanel (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the shared `NSColorPanel` instance, creating it if necessary.

## Declaration

```objectivec
@property (class, strong, readonly) NSColorPanel * sharedColorPanel;
```

<a id="return-value"></a>

## Return Value

The shared `NSColorPanel` instance.

## See Also

### Related Documentation

- [NSColorPanel](../nscolorpanel.md): A standard user interface for selecting color in an app.

### Obtaining the shared color panel

- [sharedColorPanelExists](sharedcolorpanelexists.md): Returns a Boolean value indicating whether the `NSColorPanel` has been created already.
