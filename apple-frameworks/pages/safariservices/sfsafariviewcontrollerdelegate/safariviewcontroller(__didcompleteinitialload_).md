> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:didcompleteinitialload:)](https://developer.apple.com/documentation/safariservices/sfsafariviewcontrollerdelegate/safariviewcontroller(_:didcompleteinitialload:))

# safariViewController(\_:didCompleteInitialLoad:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the initial URL load completed.

## Declaration

```swift
optional func safariViewController(_ controller: SFSafariViewController, didCompleteInitialLoad didLoadSuccessfully: Bool)
```

## Parameters

- `controller`: The view controller.
- `didLoadSuccessfully`: [true](https://developer.apple.com/documentation/swift/true) if loading completed successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when [SFSafariViewController](../sfsafariviewcontroller.md) completes the loading of the URL that you pass to its initializer. The method is not invoked for any subsequent page loads in the same [SFSafariViewController](../sfsafariviewcontroller.md) instance.

## See Also

### Working with the View Controller

- [safariViewController(\_:activityItemsFor:title:)](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish(\_:)](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController(\_:excludedActivityTypesFor:title:)](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)

# safariViewController:didCompleteInitialLoad: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+

Tells the delegate that the initial URL load completed.

## Declaration

```objectivec
- (void) safariViewController:(SFSafariViewController *) controller didCompleteInitialLoad:(BOOL) didLoadSuccessfully;
```

## Parameters

- `controller`: The view controller.
- `didLoadSuccessfully`: [true](https://developer.apple.com/documentation/swift/true) if loading completed successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked when [SFSafariViewController](../sfsafariviewcontroller.md) completes the loading of the URL that you pass to its initializer. The method is not invoked for any subsequent page loads in the same [SFSafariViewController](../sfsafariviewcontroller.md) instance.

## See Also

### Working with the View Controller

- [safariViewController:activityItemsForURL:title:](safariviewcontroller%28__activityitemsfor_title_%29.md): Tells the delegate that the user tapped an Action button.
- [safariViewControllerDidFinish:](safariviewcontrollerdidfinish%28__%29.md): Tells the delegate that the user dismissed the view.
- [safariViewController:excludedActivityTypesForURL:title:](safariviewcontroller%28__excludedactivitytypesfor_title_%29.md)
