> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowwillbeginsheet(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowwillbeginsheet(_:))

# windowWillBeginSheet(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Notifies the delegate that the window is about to open a sheet.

## Declaration

```swift
@MainActor optional func windowWillBeginSheet(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [willBeginSheetNotification](../nswindow/willbeginsheetnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Sheets

- [window(\_:willPositionSheet:using:)](window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowDidEndSheet(\_:)](windowdidendsheet%28__%29.md): Tells the delegate that the window has closed a sheet.

# windowWillBeginSheet: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Notifies the delegate that the window is about to open a sheet.

## Declaration

```objectivec
- (void) windowWillBeginSheet:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowWillBeginSheetNotification](../nswindow/willbeginsheetnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Sheets

- [window:willPositionSheet:usingRect:](window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowDidEndSheet:](windowdidendsheet%28__%29.md): Tells the delegate that the window has closed a sheet.
