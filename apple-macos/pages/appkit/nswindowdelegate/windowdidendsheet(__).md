> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidendsheet(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidendsheet(_:))

# windowDidEndSheet(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Tells the delegate that the window has closed a sheet.

## Declaration

```swift
@MainActor optional func windowDidEndSheet(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didEndSheetNotification](../nswindow/didendsheetnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Sheets

- [window(\_:willPositionSheet:using:)](window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowWillBeginSheet(\_:)](windowwillbeginsheet%28__%29.md): Notifies the delegate that the window is about to open a sheet.

# windowDidEndSheet: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the window has closed a sheet.

## Declaration

```objectivec
- (void) windowDidEndSheet:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSWindowDidEndSheetNotification](../nswindow/didendsheetnotification.md).

<a id="Discussion"></a>

## Discussion

You can retrieve the window object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

## See Also

### Managing Sheets

- [window:willPositionSheet:usingRect:](window%28__willpositionsheet_using_%29.md): Tells the delegate that the window is about to show a sheet at the specified location, giving it the opportunity to return a custom location for the attachment of the sheet to the window.
- [windowWillBeginSheet:](windowwillbeginsheet%28__%29.md): Notifies the delegate that the window is about to open a sheet.
