> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/certificatepanelshowhelp(_:))

# certificatePanelShowHelp(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Implements custom help behavior for the modal panel.

## Declaration

```swift
func certificatePanelShowHelp(_ sender: SFCertificatePanel!) -> Bool
```

## Parameters

- `sender`: The certificate panel for which to implement custom help.

<a id="Discussion"></a>

## Discussion

You can use this delegate method to implement custom help if you call the [setShowsHelp(\_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setshowshelp%28_:%29) method to display a help button in the sheet or panel. If you are not implementing custom help, do not implement this method.

## See Also

### Related Documentation

- [delegate](https://developer.apple.com/documentation/appkit/nswindow/delegate): The window’s delegate.
- [setShowsHelp(\_:)](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setshowshelp%28_:%29): Displays a Help button in the sheet or panel.

# certificatePanelShowHelp: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Implements custom help behavior for the modal panel.

## Declaration

```objectivec
- (BOOL) certificatePanelShowHelp:(SFCertificatePanel *) sender;
```

## Parameters

- `sender`: The certificate panel for which to implement custom help.

<a id="Discussion"></a>

## Discussion

You can use this delegate method to implement custom help if you call the [setShowsHelp:](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setshowshelp%28_:%29) method to display a help button in the sheet or panel. If you are not implementing custom help, do not implement this method.

## See Also

### Related Documentation

- [delegate](https://developer.apple.com/documentation/appkit/nswindow/delegate): The window’s delegate.
- [setShowsHelp:](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/setshowshelp%28_:%29): Displays a Help button in the sheet or panel.
