> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/chooseidentitypanelshowhelp(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/chooseidentitypanelshowhelp(_:))

# chooseIdentityPanelShowHelp(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Implements custom help behavior for the modal panel.

## Declaration

```swift
func chooseIdentityPanelShowHelp(_ sender: SFChooseIdentityPanel!) -> Bool
```

## Parameters

- `sender`: The choose identity panel for which to implement custom help.

<a id="Discussion"></a>

## Discussion

You can use this delegate method to implement custom help if you call the [setShowsHelp(\_:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setshowshelp%28_:%29) method to display a help button in the sheet or panel. If you are not implementing custom help, do not implement this method.

## See Also

### Related Documentation

- [setShowsHelp(\_:)](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setshowshelp%28_:%29): Displays a Help button in the sheet or panel.
- [delegate](https://developer.apple.com/documentation/appkit/nswindow/delegate): The window’s delegate.

# chooseIdentityPanelShowHelp: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Implements custom help behavior for the modal panel.

## Declaration

```objectivec
- (BOOL) chooseIdentityPanelShowHelp:(SFChooseIdentityPanel *) sender;
```

## Parameters

- `sender`: The choose identity panel for which to implement custom help.

<a id="Discussion"></a>

## Discussion

You can use this delegate method to implement custom help if you call the [setShowsHelp:](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setshowshelp%28_:%29) method to display a help button in the sheet or panel. If you are not implementing custom help, do not implement this method.

## See Also

### Related Documentation

- [setShowsHelp:](https://developer.apple.com/documentation/securityinterface/sfchooseidentitypanel/setshowshelp%28_:%29): Displays a Help button in the sheet or panel.
- [delegate](https://developer.apple.com/documentation/appkit/nswindow/delegate): The window’s delegate.
