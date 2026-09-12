> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextensionmanager/reloadcontentblocker(withidentifier:completionhandler:)](https://developer.apple.com/documentation/mailkit/meextensionmanager/reloadcontentblocker(withidentifier:completionhandler:))

# reloadContentBlocker(withIdentifier:completionHandler:) (Swift)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```swift
class func reloadContentBlocker(withIdentifier identifier: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func reloadContentBlocker(withIdentifier identifier: String) async throws
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reloadContentBlocker(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [reloadVisibleMessages(completionHandler:)](reloadvisiblemessages%28completionhandler_%29.md)

# reloadContentBlockerWithIdentifier:completionHandler: (Objective-C)

**Framework:** MailKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
+ (void) reloadContentBlockerWithIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> class func reloadContentBlocker(withIdentifier identifier: String) async throws
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Type Methods

- [reloadVisibleMessagesWithCompletionHandler:](reloadvisiblemessages%28completionhandler_%29.md)
