> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplatedelegate/listtemplate(_:didselect:completionhandler:)](https://developer.apple.com/documentation/carplay/cplisttemplatedelegate/listtemplate(_:didselect:completionhandler:))

# listTemplate(\_:didSelect:completionHandler:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Tells the delegate when the user selects a list item.

## Declaration

```swift
func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem) async
```

## Parameters

- `listTemplate`: The list template that contains the selected item.
- `item`: The item that the user selects.
- `completionHandler`: The block that your app must call after handling the selected item.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When implementing this method, perform any necessary operations to prepare for completing the item selection, including updating your user interface. You must call `completionHandler` after handling the selected item to tell the system that it can continue. The list template displays an activity indicator—after a short delay—while it waits for your implementation to call the completion handler.

# listTemplate:didSelectListItem:completionHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Tells the delegate when the user selects a list item.

## Declaration

```objectivec
- (void) listTemplate:(CPListTemplate *) listTemplate didSelectListItem:(CPListItem *) item completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `listTemplate`: The list template that contains the selected item.
- `item`: The item that the user selects.
- `completionHandler`: The block that your app must call after handling the selected item.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func listTemplate(_ listTemplate: CPListTemplate, didSelect item: CPListItem) async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

When implementing this method, perform any necessary operations to prepare for completing the item selection, including updating your user interface. You must call `completionHandler` after handling the selected item to tell the system that it can continue. The list template displays an activity indicator—after a short delay—while it waits for your implementation to call the completion handler.
