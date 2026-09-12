> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/setshowshelp(_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setshowshelp(_:))

# setShowsHelp(\_:) (Swift)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays a Help button in the sheet or panel.

## Declaration

```swift
func setShowsHelp(_ showsHelp: Bool)
```

## Parameters

- `showsHelp`: Set to [true](https://developer.apple.com/documentation/swift/true) to display the help button. The help button is hidden by default.

<a id="Discussion"></a>

## Discussion

When a user clicks the help button, the certificate panel first checks the delegate for a [certificatePanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29) method. If the delegate does not implement such a method, or the delegate method returns [false](https://developer.apple.com/documentation/swift/false), then the [NSHelpManager](../../appkit/nshelpmanager.md) method [openHelpAnchor(\_:inBook:)](../../appkit/nshelpmanager/openhelpanchor%28__inbook_%29.md) is called with a `nil` book and the anchor specified by the [setHelpAnchor(\_:)](sethelpanchor%28__%29.md) method. An exception is raised if the delegate returns [false](https://developer.apple.com/documentation/swift/false) and there is no help anchor set.

## See Also

### Related Documentation

- [openHelpAnchor(\_:inBook:)](../../appkit/nshelpmanager/openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [showsHelp()](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.
- [certificatePanelShowHelp(\_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

### Providing Help

- [setHelpAnchor(\_:)](sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [helpAnchor()](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp()](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.

# setShowsHelp: (Objective-C)

**Framework:** Security Interface  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Displays a Help button in the sheet or panel.

## Declaration

```objectivec
- (void) setShowsHelp:(BOOL) showsHelp;
```

## Parameters

- `showsHelp`: Set to [true](https://developer.apple.com/documentation/swift/true) to display the help button. The help button is hidden by default.

<a id="Discussion"></a>

## Discussion

When a user clicks the help button, the certificate panel first checks the delegate for a [certificatePanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29) method. If the delegate does not implement such a method, or the delegate method returns [false](https://developer.apple.com/documentation/swift/false), then the [NSHelpManager](../../appkit/nshelpmanager.md) method [openHelpAnchor:inBook:](../../appkit/nshelpmanager/openhelpanchor%28__inbook_%29.md) is called with a `nil` book and the anchor specified by the [setHelpAnchor:](sethelpanchor%28__%29.md) method. An exception is raised if the delegate returns [false](https://developer.apple.com/documentation/swift/false) and there is no help anchor set.

## See Also

### Related Documentation

- [openHelpAnchor:inBook:](../../appkit/nshelpmanager/openhelpanchor%28__inbook_%29.md): Finds and displays the text at the given anchor location in the given book.
- [showsHelp](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.
- [certificatePanelShowHelp:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp%28_:%29): Implements custom help behavior for the modal panel.

### Providing Help

- [setHelpAnchor:](sethelpanchor%28__%29.md): Sets the help anchor string for the sheet or modal panel.
- [helpAnchor](helpanchor%28%29.md): Returns the current help anchor string for the sheet or panel.
- [showsHelp](showshelp%28%29.md): Indicates whether the help button is currently set to be displayed.
