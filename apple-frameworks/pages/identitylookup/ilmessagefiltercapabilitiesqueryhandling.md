> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefiltercapabilitiesqueryhandling](https://developer.apple.com/documentation/identitylookup/ilmessagefiltercapabilitiesqueryhandling)

# ILMessageFilterCapabilitiesQueryHandling (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods implemented by a Message Filter app extension to handle capabilities query requests.

## Declaration

```swift
protocol ILMessageFilterCapabilitiesQueryHandling : NSObjectProtocol
```

## Topics

### Handling a Capabilities Query Request

- [handle(\_:context:completion:)](ilmessagefiltercapabilitiesqueryhandling/handle%28__context_completion_%29.md): Evaluates a query request and provides a response describing how the system should handle the message it represents.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Queries

- [ILMessageFilterCapabilitiesQueryRequest](ilmessagefiltercapabilitiesqueryrequest.md): A request to query a Message Filter extension about sharing its sub-category capabilities.

# ILMessageFilterCapabilitiesQueryHandling (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A set of methods implemented by a Message Filter app extension to handle capabilities query requests.

## Declaration

```objectivec
@protocol ILMessageFilterCapabilitiesQueryHandling <NSObject>
```

## Topics

### Handling a Capabilities Query Request

- [handleCapabilitiesQueryRequest:context:completion:](ilmessagefiltercapabilitiesqueryhandling/handle%28__context_completion_%29.md): Evaluates a query request and provides a response describing how the system should handle the message it represents.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Queries

- [ILMessageFilterCapabilitiesQueryRequest](ilmessagefiltercapabilitiesqueryrequest.md): A request to query a Message Filter extension about sharing its sub-category capabilities.
