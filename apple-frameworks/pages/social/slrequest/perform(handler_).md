> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slrequest/perform(handler:)](https://developer.apple.com/documentation/social/slrequest/perform(handler:))

# perform(handler:) (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Performs an asynchronous request and calls the specified handler when done.

## Declaration

```swift
func perform(handler: SLRequestHandler!)
```

## Parameters

- `handler`: The handler to call when the request is done. The parameters for this handler are described in [SLRequestHandler](../slrequesthandler.md). This handler is not guaranteed to be called on any particular thread and should not be nil.

## See Also

### Sending a Request

- [SLRequestHandler](../slrequesthandler.md): The callback handler for a request.

# performRequestWithHandler: (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+

Performs an asynchronous request and calls the specified handler when done.

## Declaration

```objectivec
- (void) performRequestWithHandler:(SLRequestHandler) handler;
```

## Parameters

- `handler`: The handler to call when the request is done. The parameters for this handler are described in [SLRequestHandler](../slrequesthandler.md). This handler is not guaranteed to be called on any particular thread and should not be nil.

## See Also

### Sending a Request

- [SLRequestHandler](../slrequesthandler.md): The callback handler for a request.
