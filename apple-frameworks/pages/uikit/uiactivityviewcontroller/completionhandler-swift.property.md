> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/completionhandler-swift.property](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/completionhandler-swift.property)

# completionHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The completion handler to execute after the activity view controller is dismissed.

> Use the [completionWithItemsHandler](completionwithitemshandler-swift.property.md) property instead.

## Declaration

```swift
var completionHandler: UIActivityViewController.CompletionHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user-selected service finishes operating on the data, or when the user dismisses the view controller, the view controller executes this completion handler to let your app know the final result of the operation.

## See Also

### Deprecated

- [UIActivityViewController.CompletionHandler](completionhandler-swift.typealias.md): Deprecated. A completion handler to execute after the activity view controller is dismissed.

# completionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The completion handler to execute after the activity view controller is dismissed.

> Use the [completionWithItemsHandler](completionwithitemshandler-swift.property.md) property instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIActivityViewControllerCompletionHandler completionHandler;
```

<a id="Discussion"></a>

## Discussion

When the user-selected service finishes operating on the data, or when the user dismisses the view controller, the view controller executes this completion handler to let your app know the final result of the operation.

## See Also

### Deprecated

- [UIActivityViewControllerCompletionHandler](completionhandler-swift.typealias.md): Deprecated. A completion handler to execute after the activity view controller is dismissed.
