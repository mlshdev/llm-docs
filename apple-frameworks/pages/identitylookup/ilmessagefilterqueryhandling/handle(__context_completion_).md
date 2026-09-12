> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryhandling/handle(_:context:completion:)](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryhandling/handle(_:context:completion:))

# handle(\_:context:completion:) (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Evaluates a query request and tells the system how to handle the message represented in the request.

## Declaration

```swift
func handle(_ queryRequest: ILMessageFilterQueryRequest, context: ILMessageFilterExtensionContext, completion: @escaping @Sendable (ILMessageFilterQueryResponse) -> Void)
```

```swift
func handle(_ queryRequest: ILMessageFilterQueryRequest, context: ILMessageFilterExtensionContext) async -> ILMessageFilterQueryResponse
```

## Parameters

- `queryRequest`: A query request that describes a received message.
- `context`: The app extension context that defines APIs to defer the request to a server, if necessary.
- `completion`: A completion block used to return a response that describes how to handle the message. You can invoke this block asynchronously.

# handleQueryRequest:context:completion: (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Evaluates a query request and tells the system how to handle the message represented in the request.

## Declaration

```objectivec
- (void) handleQueryRequest:(ILMessageFilterQueryRequest *) queryRequest context:(ILMessageFilterExtensionContext *) context completion:(void (^)(ILMessageFilterQueryResponse *)) completion;
```

## Parameters

- `queryRequest`: A query request that describes a received message.
- `context`: The app extension context that defines APIs to defer the request to a server, if necessary.
- `completion`: A completion block used to return a response that describes how to handle the message. You can invoke this block asynchronously.
