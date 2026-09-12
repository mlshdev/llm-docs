> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:willpresent:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:willpresent:))

# documentBrowser(\_:willPresent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the document browser will display an activity view.

## Declaration

```swift
optional func documentBrowser(_ controller: UIDocumentBrowserViewController, willPresent activityViewController: UIActivityViewController)
```

## Parameters

- `controller`: The current document browser.
- `activityViewController`: The activity view controller to be displayed.

<a id="Discussion"></a>

## Discussion

The document browser displays an activity view when the user shares a document (for example, when the user long presses a document and then chooses Share from the Edit Menu).

Implement this method to customize the activity view before it is displayed. For example, you could exclude any system-provided activities that are inappropriate for your app (see the [UIActivityViewController](../uiactivityviewcontroller.md) class’s [excludedActivityTypes](../uiactivityviewcontroller/excludedactivitytypes.md) property).

## See Also

### Working with the browser’s activity view

- [documentBrowser(\_:applicationActivitiesForDocumentURLs:)](documentbrowser%28__applicationactivitiesfordocumenturls_%29.md): Asks the delegate for additional activities when displaying an activity view.

# documentBrowser:willPresentActivityViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the document browser will display an activity view.

## Declaration

```objectivec
- (void) documentBrowser:(UIDocumentBrowserViewController *) controller willPresentActivityViewController:(UIActivityViewController *) activityViewController;
```

## Parameters

- `controller`: The current document browser.
- `activityViewController`: The activity view controller to be displayed.

<a id="Discussion"></a>

## Discussion

The document browser displays an activity view when the user shares a document (for example, when the user long presses a document and then chooses Share from the Edit Menu).

Implement this method to customize the activity view before it is displayed. For example, you could exclude any system-provided activities that are inappropriate for your app (see the [UIActivityViewController](../uiactivityviewcontroller.md) class’s [excludedActivityTypes](../uiactivityviewcontroller/excludedactivitytypes.md) property).

## See Also

### Working with the browser’s activity view

- [documentBrowser:applicationActivitiesForDocumentURLs:](documentbrowser%28__applicationactivitiesfordocumenturls_%29.md): Asks the delegate for additional activities when displaying an activity view.
