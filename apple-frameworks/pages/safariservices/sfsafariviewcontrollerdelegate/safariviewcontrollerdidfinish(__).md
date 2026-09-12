> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontrollerdidfinish(_:)](https://developer.apple.com/documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontrollerdidfinish(_:))

# safariViewControllerDidFinish(\_:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the user dismissed the view.

## Declaration

```swift
optional func safariViewControllerDidFinish(_ controller: SFSafariViewController)
```

## Parameters

- `controller`: The view controller.

<a id="Discussion"></a>

## Discussion

You can perform any necessary cleanup here. The view controller is dismissed afterwards.

## See Also

### Working with the View Controller

- [safariViewController(\_:didCompleteInitialLoad:)](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController(\_:activityItemsFor:title:)](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewController(\_:excludedActivityTypesFor:title:)](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)

# safariViewControllerDidFinish: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the user dismissed the view.

## Declaration

```objectivec
- (void) safariViewControllerDidFinish:(SFSafariViewController *) controller;
```

## Parameters

- `controller`: The view controller.

<a id="Discussion"></a>

## Discussion

You can perform any necessary cleanup here. The view controller is dismissed afterwards.

## See Also

### Working with the View Controller

- [safariViewController:didCompleteInitialLoad:](safariviewcontroller%28__didcompleteinitialload_%29.md): Tells the delegate that the initial URL load completed.
- [safariViewController:activityItemsForURL:title:](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewController:excludedActivityTypesForURL:title:](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)
