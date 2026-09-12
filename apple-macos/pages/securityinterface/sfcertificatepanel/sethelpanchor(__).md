> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/sethelpanchor(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/sethelpanchor(_:))

# setHelpAnchor(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the help anchor string for the sheet or modal panel.

## Declaration

```swift
func setHelpAnchor(_ anchor: String!)
```

## Parameters

- `anchor`: The new help anchor string.

<a id="Discussion"></a>

## Discussion

You may call this function to set a help anchor string if you display a help button in the sheet or modal panel and do not implement the delegate method [certificatePanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29), or if the delegate method returns [false](https://developer.apple.com/documentation/swift/false). If you display a help button, do not set a help anchor string, and do not implement a delegate, the certificate panel displays a default help page (“Why isn’t a certificate being accepted?”).

## See Also

### Related Documentation

- [helpAnchor()](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [setShowsHelp(\_:)](setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [certificatePanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

### Providing Help

- [setShowsHelp(\_:)](setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor()](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp()](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

# setHelpAnchor: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Sets the help anchor string for the sheet or modal panel.

## Declaration

```objectivec
- (void) setHelpAnchor:(NSString *) anchor;
```

## Parameters

- `anchor`: The new help anchor string.

<a id="Discussion"></a>

## Discussion

You may call this function to set a help anchor string if you display a help button in the sheet or modal panel and do not implement the delegate method [certificatePanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29), or if the delegate method returns [false](https://developer.apple.com/documentation/swift/false). If you display a help button, do not set a help anchor string, and do not implement a delegate, the certificate panel displays a default help page (“Why isn’t a certificate being accepted?”).

## See Also

### Related Documentation

- [helpAnchor](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [setShowsHelp:](setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [certificatePanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

### Providing Help

- [setShowsHelp:](setshowshelp%28__%29.md): Displays a Help button in the sheet or panel.
- [helpAnchor](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.
