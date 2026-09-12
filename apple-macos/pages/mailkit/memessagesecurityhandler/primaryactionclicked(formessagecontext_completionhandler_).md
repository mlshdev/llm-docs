> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityhandler/primaryactionclicked(formessagecontext:completionhandler:)](https://developer.apple.com/documentation/mailkit/memessagesecurityhandler/primaryactionclicked(formessagecontext:completionhandler:))

# primaryActionClicked(forMessageContext:completionHandler:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```swift
func primaryActionClicked(forMessageContext context: Data, completionHandler: @escaping (MEExtensionViewController?) -> Void)
```

```swift
func primaryActionClicked(forMessageContext context: Data) async -> MEExtensionViewController?
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func primaryActionClicked(forMessageContext context: Data) async -> MEExtensionViewController?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [extensionViewController(messageContext:)](extensionviewcontroller%28messagecontext_%29.md)

# primaryActionClickedForMessageContext:completionHandler: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (void) primaryActionClickedForMessageContext:(NSData *) context completionHandler:(void (^)(MEExtensionViewController *result)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func primaryActionClicked(forMessageContext context: Data) async -> MEExtensionViewController?
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [extensionViewControllerForMessageContext:](extensionviewcontroller%28messagecontext_%29.md)
