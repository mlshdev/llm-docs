> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessageencoder/getencodingstatus(for:composecontext:completionhandler:)](https://developer.apple.com/documentation/mailkit/memessageencoder/getencodingstatus(for:composecontext:completionhandler:))

# getEncodingStatus(for:composeContext:completionHandler:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```swift
func getEncodingStatus(for message: MEMessage, composeContext: MEComposeContext, completionHandler: @escaping @Sendable (MEOutgoingMessageEncodingStatus) -> Void)
```

```swift
func encodingStatus(for message: MEMessage, composeContext: MEComposeContext) async -> MEOutgoingMessageEncodingStatus
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encodingStatus(for message: MEMessage, composeContext: MEComposeContext) async -> MEOutgoingMessageEncodingStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [encode(\_:composeContext:completionHandler:)](encode%28__composecontext_completionhandler_%29.md)

# getEncodingStatusForMessage:composeContext:completionHandler: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
- (void) getEncodingStatusForMessage:(MEMessage *) message composeContext:(MEComposeContext *) composeContext completionHandler:(void (^)(MEOutgoingMessageEncodingStatus *status)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func encodingStatus(for message: MEMessage, composeContext: MEComposeContext) async -> MEOutgoingMessageEncodingStatus
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Instance Methods

- [encodeMessage:composeContext:completionHandler:](encode%28__composecontext_completionhandler_%29.md)
