> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:applicationactivitiesfordocumenturls:)](https://developer.apple.com/documentation/uikit/uidocumentbrowserviewcontrollerdelegate/documentbrowser(_:applicationactivitiesfordocumenturls:))

# documentBrowser(\_:applicationActivitiesForDocumentURLs:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for additional activities when displaying an activity view.

## Declaration

```swift
optional func documentBrowser(_ controller: UIDocumentBrowserViewController, applicationActivitiesForDocumentURLs documentURLs: [URL]) -> [UIActivity]
```

## Parameters

- `controller`: The current document browser.
- `documentURLs`: The URL of one or more documents to share.

<a id="return-value"></a>

## Return Value

An array of custom [UIActivity](../uiactivity.md) objects.

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

The document browser displays an activity view when the user shares a document (for example, when the user long presses a document and then chooses Share from the Edit Menu).

Implement this method to add custom activities to the activity view. Create and return an array containing your custom [UIActivity](../uiactivity.md) subclasses. Your [UIActivity](../uiactivity.md) subclasses should perform actions on the URLs passed to this method.

> **Note**

>  Do not assume that the URL array contains only one URL. The user can place the document browser into Select mode and select multiple documents to share, even if the document browser’s [allowsPickingMultipleItems](../uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the browser’s activity view

- [documentBrowser(\_:willPresent:)](documentbrowser%28__willpresent_%29.md): Tells the delegate that the document browser will display an activity view.

# documentBrowser:applicationActivitiesForDocumentURLs: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate for additional activities when displaying an activity view.

## Declaration

```objectivec
- (NSArray<__kindof UIActivity *> *) documentBrowser:(UIDocumentBrowserViewController *) controller applicationActivitiesForDocumentURLs:(NSArray<NSURL *> *) documentURLs;
```

## Parameters

- `controller`: The current document browser.
- `documentURLs`: The URL of one or more documents to share.

<a id="return-value"></a>

## Return Value

An array of custom [UIActivity](../uiactivity.md) objects.

## Mentioned In

- [Adding custom actions and activities](../adding-custom-actions-and-activities.md)

<a id="Discussion"></a>

## Discussion

The document browser displays an activity view when the user shares a document (for example, when the user long presses a document and then chooses Share from the Edit Menu).

Implement this method to add custom activities to the activity view. Create and return an array containing your custom [UIActivity](../uiactivity.md) subclasses. Your [UIActivity](../uiactivity.md) subclasses should perform actions on the URLs passed to this method.

> **Note**

>  Do not assume that the URL array contains only one URL. The user can place the document browser into Select mode and select multiple documents to share, even if the document browser’s [allowsPickingMultipleItems](../uidocumentbrowserviewcontroller/allowspickingmultipleitems.md) property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Working with the browser’s activity view

- [documentBrowser:willPresentActivityViewController:](documentbrowser%28__willpresent_%29.md): Tells the delegate that the document browser will display an activity view.
