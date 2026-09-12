> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariwindow/gettoolbaritem(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafariwindow/gettoolbaritem(completionhandler:))

# getToolbarItem(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Gets the extension’s toolbar item from the target window.

## Declaration

```swift
func getToolbarItem(completionHandler: @escaping @Sendable (SFSafariToolbarItem?) -> Void)
```

```swift
func toolbarItem() async -> SFSafariToolbarItem?
```

## Parameters

- `completionHandler`: A block called after the toolbar item is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func toolbarItem() async -> SFSafariToolbarItem?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# getToolbarItemWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Gets the extension’s toolbar item from the target window.

## Declaration

```objectivec
- (void) getToolbarItemWithCompletionHandler:(void (^)(SFSafariToolbarItem *toolbarItem)) completionHandler;
```

## Parameters

- `completionHandler`: A block called after the toolbar item is retrieved.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func toolbarItem() async -> SFSafariToolbarItem?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
