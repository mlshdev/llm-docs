> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencoder/encode(_:composecontext:completionhandler:)](https://developer.apple.com/documentation/mailkit/memessageencoder/encode(_:composecontext:completionhandler:))

# encode(\_:composeContext:completionHandler:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```swift
func encode(_ message: MEMessage, composeContext: MEComposeContext, completionHandler: @escaping @Sendable (MEMessageEncodingResult) -> Void)
```

```swift
func encode(_ message: MEMessage, composeContext: MEComposeContext) async -> MEMessageEncodingResult
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encode(_ message: MEMessage, composeContext: MEComposeContext) async -> MEMessageEncodingResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getEncodingStatus(for:composeContext:completionHandler:)](getencodingstatus%28for_composecontext_completionhandler_%29.md)

# encodeMessage:composeContext:completionHandler: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (void) encodeMessage:(MEMessage *) message composeContext:(MEComposeContext *) composeContext completionHandler:(void (^)(MEMessageEncodingResult *result)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encode(_ message: MEMessage, composeContext: MEComposeContext) async -> MEMessageEncodingResult
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [getEncodingStatusForMessage:composeContext:completionHandler:](getencodingstatus%28for_composecontext_completionhandler_%29.md)
