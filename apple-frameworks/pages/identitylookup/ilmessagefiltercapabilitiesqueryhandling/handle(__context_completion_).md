> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookup/ilmessagefiltercapabilitiesqueryhandling/handle(_:context:completion:)

# handle(\_:context:completion:) (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Evaluates a query request and provides a response describing how the system should handle the message it represents.

## Declaration

```swift
func handle(_ capabilitiesQueryRequest: ILMessageFilterCapabilitiesQueryRequest, context: ILMessageFilterExtensionContext, completion: @escaping @Sendable (ILMessageFilterCapabilitiesQueryResponse) -> Void)
```

```swift
func handle(_ capabilitiesQueryRequest: ILMessageFilterCapabilitiesQueryRequest, context: ILMessageFilterExtensionContext) async -> ILMessageFilterCapabilitiesQueryResponse
```

## Parameters

- `capabilitiesQueryRequest`: A query request that describes a received message.
- `context`: The app extension context that defines APIs to defer the request to a server, if necessary.
- `completion`: A completion block used to return a response that describes how to handle the message. You can invoke this block asynchronously.

# handleCapabilitiesQueryRequest:context:completion: (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Evaluates a query request and provides a response describing how the system should handle the message it represents.

## Declaration

```objectivec
- (void) handleCapabilitiesQueryRequest:(ILMessageFilterCapabilitiesQueryRequest *) capabilitiesQueryRequest context:(ILMessageFilterExtensionContext *) context completion:(void (^)(ILMessageFilterCapabilitiesQueryResponse *)) completion;
```

## Parameters

- `capabilitiesQueryRequest`: A query request that describes a received message.
- `context`: The app extension context that defines APIs to defer the request to a server, if necessary.
- `completion`: A completion block used to return a response that describes how to handle the message. You can invoke this block asynchronously.
