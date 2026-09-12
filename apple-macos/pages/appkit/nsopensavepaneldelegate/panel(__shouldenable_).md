> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:shouldenable:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:shouldenable:))

# panel(\_:shouldEnable:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the specified URL should be enabled in the Open panel.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, shouldEnable url: URL) -> Bool
```

## Parameters

- `sender`: The panel that asks whether the URL should be enabled.
- `url`: The URL for you to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want the panel to display the item at the specifed URL as enabled, or [false](https://developer.apple.com/documentation/swift/false) to display it as disabled.

<a id="Discussion"></a>

## Discussion

Save panels do not call this method; they always disable URLs. Implementations of this method should be fast to avoid stalling the user interface. Use [panel(\_:validate:)](panel%28__validate_%29.md) instead if processing will take a long time.

## See Also

### Validating the Panel Content

- [panel(\_:validate:)](panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.

# panel:shouldEnableURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the delegate whether the specified URL should be enabled in the Open panel.

## Declaration

```objectivec
- (BOOL) panel:(id) sender shouldEnableURL:(NSURL *) url;
```

## Parameters

- `sender`: The panel that asks whether the URL should be enabled.
- `url`: The URL for you to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if you want the panel to display the item at the specifed URL as enabled, or [false](https://developer.apple.com/documentation/swift/false) to display it as disabled.

<a id="Discussion"></a>

## Discussion

Save panels do not call this method; they always disable URLs. Implementations of this method should be fast to avoid stalling the user interface. Use [panel:validateURL:error:](panel%28__validate_%29.md) instead if processing will take a long time.

## See Also

### Validating the Panel Content

- [panel:validateURL:error:](panel%28__validate_%29.md): Asks the delegate to validate the URL for a file that the user selected.
