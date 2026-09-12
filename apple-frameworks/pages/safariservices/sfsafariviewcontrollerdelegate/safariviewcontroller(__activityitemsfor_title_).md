> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:activityitemsfor:title:)](https://developer.apple.com/documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:activityitemsfor:title:))

# safariViewController(\_:activityItemsFor:title:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the user tapped an Action button.

## Declaration

```swift
optional func safariViewController(_ controller: SFSafariViewController, activityItemsFor URL: URL, title: String?) -> [UIActivity]
```

## Parameters

- `controller`: The view controller.
- `URL`: The URL of the web page that was active when the Action button was tapped.
- `title`: The title of the web page.

<a id="return-value"></a>

## Return Value

An array of application-specific services you have chosen to include in the [UIActivityViewController](../../uikit/uiactivityviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The view controller calls this method when the view is about to show an activity view controller. Your delegate can provide unique, application-specific services (such as a social media service) to be included with the system-provided sharing services. See [UIActivity](../../uikit/uiactivity.md).

## See Also

### Working with the View Controller

- [safariViewController(\_:didCompleteInitialLoad:)](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewControllerDidFinish(\_:)](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController(\_:excludedActivityTypesFor:title:)](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)

# safariViewController:activityItemsForURL:title: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the user tapped an Action button.

## Declaration

```objectivec
- (NSArray<UIActivity *> *) safariViewController:(SFSafariViewController *) controller activityItemsForURL:(NSURL *) URL title:(NSString *) title;
```

## Parameters

- `controller`: The view controller.
- `URL`: The URL of the web page that was active when the Action button was tapped.
- `title`: The title of the web page.

<a id="return-value"></a>

## Return Value

An array of application-specific services you have chosen to include in the [UIActivityViewController](../../uikit/uiactivityviewcontroller.md) object.

<a id="Discussion"></a>

## Discussion

The view controller calls this method when the view is about to show an activity view controller. Your delegate can provide unique, application-specific services (such as a social media service) to be included with the system-provided sharing services. See [UIActivity](../../uikit/uiactivity.md).

## See Also

### Working with the View Controller

- [safariViewController:didCompleteInitialLoad:](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewControllerDidFinish:](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController:excludedActivityTypesForURL:title:](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)
