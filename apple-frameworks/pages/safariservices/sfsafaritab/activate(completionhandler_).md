> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaritab/activate(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafaritab/activate(completionhandler:))

# activate(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Activates the tab.

## Declaration

```swift
func activate(completionHandler: (@Sendable () -> Void)? = nil)
```

```swift
func activate() async
```

## Parameters

- `completionHandler`: A block to call when the tab is activated.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activate() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

# activateWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Activates the tab.

## Declaration

```objectivec
- (void) activateWithCompletionHandler:(void (^)()) completionHandler;
```

## Parameters

- `completionHandler`: A block to call when the tab is activated.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func activate() async
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).
