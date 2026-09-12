> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextensionmanager/reloadvisiblemessages(completionhandler:)](https://developer.apple.com/documentation/mailkit/meextensionmanager/reloadvisiblemessages(completionhandler:))

# reloadVisibleMessages(completionHandler:) (Swift)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```swift
class func reloadVisibleMessages(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func reloadVisibleMessages() async throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reloadVisibleMessages() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [reloadContentBlocker(withIdentifier:completionHandler:)](reloadcontentblocker%28withidentifier_completionhandler_%29.md)

# reloadVisibleMessagesWithCompletionHandler: (Objective-C)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
+ (void) reloadVisibleMessagesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reloadVisibleMessages() async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [reloadContentBlockerWithIdentifier:completionHandler:](reloadcontentblocker%28withidentifier_completionhandler_%29.md)
