> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfcontentblockermanager/reloadcontentblocker(withidentifier:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfcontentblockermanager/reloadcontentblocker(withidentifier:completionhandler:))

# reloadContentBlocker(withIdentifier:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Tells Safari to reload the specified extension’s content-blocking rules.

## Declaration

```swift
class func reloadContentBlocker(withIdentifier identifier: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func reloadContentBlocker(withIdentifier identifier: String) async throws
```

## Parameters

- `identifier`: The bundle identifier of your content blocker extension.
- `completionHandler`: The code to run after the content-blocking rules are reloaded.

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

Call this method when your extension’s content-blocking rules change.

# reloadContentBlockerWithIdentifier:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Tells Safari to reload the specified extension’s content-blocking rules.

## Declaration

```objectivec
+ (void) reloadContentBlockerWithIdentifier:(NSString *) identifier completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `identifier`: The bundle identifier of your content blocker extension.
- `completionHandler`: The code to run after the content-blocking rules are reloaded.

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

Call this method when your extension’s content-blocking rules change.
