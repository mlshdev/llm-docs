> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetproviding/widgetperformupdate(completionhandler:)](https://developer.apple.com/documentation/notificationcenter/ncwidgetproviding/widgetperformupdate(completionhandler:))

# widgetPerformUpdate(completionHandler:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

Called to give a widget an opportunity to update its contents.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
optional func widgetPerformUpdate(completionHandler: @escaping @Sendable (NCUpdateResult) -> Void)
```

```swift
optional func widgetPerformUpdate() async -> NCUpdateResult
```

## Parameters

- `completionHandler`: A block to be called when the widget’s content has been updated.

  The block takes the following parameter:

  - **result**: A value of type `NCUpdateResult` that describes the result of the update procedure. ([NCUpdateResult](../ncupdateresult.md) lists the possible values of `result`.)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func widgetPerformUpdate() async -> NCUpdateResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called to give a widget an opportunity to update its contents and redraw its view prior to an operation such as a snapshot. When the widget is finished updating its contents (and redrawing, if necessary), the widget should call the completion handler block, passing the appropriate `NCUpdateResult` value.

## See Also

### Updating a Widget’s Contents

- [NCUpdateResult](../ncupdateresult.md): Deprecated. The result of updating a widget’s state.

# widgetPerformUpdateWithCompletionHandler: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 10.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

Called to give a widget an opportunity to update its contents.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetPerformUpdateWithCompletionHandler:(void (^)(NCUpdateResult result)) completionHandler;
```

## Parameters

- `completionHandler`: A block to be called when the widget’s content has been updated.

  The block takes the following parameter:

  - **result**: A value of type `NCUpdateResult` that describes the result of the update procedure. ([NCUpdateResult](../ncupdateresult.md) lists the possible values of `result`.)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> optional func widgetPerformUpdate() async -> NCUpdateResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method is called to give a widget an opportunity to update its contents and redraw its view prior to an operation such as a snapshot. When the widget is finished updating its contents (and redrawing, if necessary), the widget should call the completion handler block, passing the appropriate `NCUpdateResult` value.

## See Also

### Updating a Widget’s Contents

- [NCUpdateResult](../ncupdateresult.md): Deprecated. The result of updating a widget’s state.
