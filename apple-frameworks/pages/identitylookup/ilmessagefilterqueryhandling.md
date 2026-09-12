> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterqueryhandling](https://developer.apple.com/documentation/identitylookup/ilmessagefilterqueryhandling)

# ILMessageFilterQueryHandling (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A set of methods implemented by a Message Filter app extension to handle query requests.

## Declaration

```swift
protocol ILMessageFilterQueryHandling : NSObjectProtocol
```

## Mentioned In

- [Creating a Message Filter App Extension](creating-a-message-filter-app-extension.md)

<a id="overview"></a>

## Overview

A Message Filter app extension that adopts this protocol forms a response about the message described in the query, based on information that it either stores locally or receives from an associated network service.

When the app extension defers a query request to a server, the system handles all network communication, passing the request to the server and passing the server’s response back to the app extension.

## Topics

### Handling a Query Request

- [handle(\_:context:completion:)](ilmessagefilterqueryhandling/handle%28__context_completion_%29.md): Evaluates a query request and tells the system how to handle the message represented in the request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Queries

- [ILMessageFilterQueryRequest](ilmessagefilterqueryrequest.md): A request for a Message Filter app extension to determine the status of a message received from an unknown sender.

# ILMessageFilterQueryHandling (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A set of methods implemented by a Message Filter app extension to handle query requests.

## Declaration

```objectivec
@protocol ILMessageFilterQueryHandling <NSObject>
```

## Mentioned In

- [Creating a Message Filter App Extension](creating-a-message-filter-app-extension.md)

<a id="overview"></a>

## Overview

A Message Filter app extension that adopts this protocol forms a response about the message described in the query, based on information that it either stores locally or receives from an associated network service.

When the app extension defers a query request to a server, the system handles all network communication, passing the request to the server and passing the server’s response back to the app extension.

## Topics

### Handling a Query Request

- [handleQueryRequest:context:completion:](ilmessagefilterqueryhandling/handle%28__context_completion_%29.md): Evaluates a query request and tells the system how to handle the message represented in the request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Queries

- [ILMessageFilterQueryRequest](ilmessagefilterqueryrequest.md): A request for a Message Filter app extension to determine the status of a message received from an unknown sender.
