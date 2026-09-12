> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/completionwithitemshandler-swift.property](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/completionwithitemshandler-swift.property)

# completionWithItemsHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The completion handler to execute after the activity view controller is dismissed.

## Declaration

```swift
var completionWithItemsHandler: UIActivityViewController.CompletionWithItemsHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

When the user-selected service finishes operating on the data, or when the user dismisses the view controller, the view controller executes this completion handler to let your app know the final result of the operation.

## See Also

### Accessing the completion handler

- [UIActivityViewController.CompletionWithItemsHandler](completionwithitemshandler-swift.typealias.md): A completion handler to execute after the activity view controller is dismissed.

# completionWithItemsHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The completion handler to execute after the activity view controller is dismissed.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIActivityViewControllerCompletionWithItemsHandler completionWithItemsHandler;
```

<a id="Discussion"></a>

## Discussion

When the user-selected service finishes operating on the data, or when the user dismisses the view controller, the view controller executes this completion handler to let your app know the final result of the operation.

## See Also

### Accessing the completion handler

- [UIActivityViewControllerCompletionWithItemsHandler](completionwithitemshandler-swift.typealias.md): A completion handler to execute after the activity view controller is dismissed.
