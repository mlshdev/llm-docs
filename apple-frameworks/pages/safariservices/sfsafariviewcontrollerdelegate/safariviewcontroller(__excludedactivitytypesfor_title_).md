> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:excludedactivitytypesfor:title:)](https://developer.apple.com/documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:excludedactivitytypesfor:title:))

# safariViewController(\_:excludedActivityTypesFor:title:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
optional func safariViewController(_ controller: SFSafariViewController, excludedActivityTypesFor URL: URL, title: String?) -> [UIActivity.ActivityType]
```

## See Also

### Working with the View Controller

- [safariViewController(\_:didCompleteInitialLoad:)](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController(\_:activityItemsFor:title:)](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish(\_:)](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.

# safariViewController:excludedActivityTypesForURL:title: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
- (NSArray<NSString *> *) safariViewController:(SFSafariViewController *) controller excludedActivityTypesForURL:(NSURL *) URL title:(NSString *) title;
```

## See Also

### Working with the View Controller

- [safariViewController:didCompleteInitialLoad:](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController:activityItemsForURL:title:](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish:](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
