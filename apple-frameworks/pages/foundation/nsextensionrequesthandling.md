> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionrequesthandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)

# NSExtensionRequestHandling (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface an app extension uses to respond to a request from a host app.

## Declaration

```swift
protocol NSExtensionRequestHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [NSExtensionRequestHandling](nsextensionrequesthandling.md) protocol provides a life cycle hook into an app extension. An extension’s principal object can implement this protocol and use [beginRequest(with:)](nsextensionrequesthandling/beginrequest%28with_%29.md) to keep track of the request from a host app.

## Topics

### Preparing for a request

- [beginRequest(with:)](nsextensionrequesthandling/beginrequest%28with_%29.md): Tells the extension to prepare for a host app’s request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Extension Support

- [NSExtensionContext](nsextensioncontext.md): The host app context from which an app extension is invoked.

# NSExtensionRequestHandling (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface an app extension uses to respond to a request from a host app.

## Declaration

```objectivec
@protocol NSExtensionRequestHandling <NSObject>
```

<a id="overview"></a>

## Overview

The [NSExtensionRequestHandling](nsextensionrequesthandling.md) protocol provides a life cycle hook into an app extension. An extension’s principal object can implement this protocol and use [beginRequestWithExtensionContext:](nsextensionrequesthandling/beginrequest%28with_%29.md) to keep track of the request from a host app.

## Topics

### Preparing for a request

- [beginRequestWithExtensionContext:](nsextensionrequesthandling/beginrequest%28with_%29.md): Tells the extension to prepare for a host app’s request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Extension Support

- [NSExtensionContext](nsextensioncontext.md): The host app context from which an app extension is invoked.
