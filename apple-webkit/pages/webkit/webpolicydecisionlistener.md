> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpolicydecisionlistener](https://developer.apple.com/documentation/webkit/webpolicydecisionlistener)

# WebPolicyDecisionListener (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol enables [WebView](webview-swift.class.md) policy delegates to communicate with listener objects. A listener object conforming to this protocol is passed as one of the arguments to web view policy delegate methods.

## Declaration

```swift
protocol WebPolicyDecisionListener : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol allows delegates to handle download decisions asynchronously. For example, the policy delegate may display a sheet, and the listener object gets notified only after the user clicks an OK or Cancel button. You do not directly create objects that conform to this protocol.

## Topics

### Making Resource-Usage Decisions

- [download()](webpolicydecisionlistener/download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [ignore()](webpolicydecisionlistener/ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.
- [use()](webpolicydecisionlistener/use%28%29.md): Deprecated. Tells the listener to use the resource.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Setting Policies (Legacy)

- [WebPolicyDelegate](webpolicydelegate.md): Deprecated.

# WebPolicyDecisionListener (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol enables [WebView](webview-swift.class.md) policy delegates to communicate with listener objects. A listener object conforming to this protocol is passed as one of the arguments to web view policy delegate methods.

## Declaration

```objectivec
@protocol WebPolicyDecisionListener <NSObject>
```

<a id="overview"></a>

## Overview

This protocol allows delegates to handle download decisions asynchronously. For example, the policy delegate may display a sheet, and the listener object gets notified only after the user clicks an OK or Cancel button. You do not directly create objects that conform to this protocol.

## Topics

### Making Resource-Usage Decisions

- [download](webpolicydecisionlistener/download%28%29.md): Deprecated. Tells the listener to download the resource instead of displaying it.
- [ignore](webpolicydecisionlistener/ignore%28%29.md): Deprecated. Tells the listener to ignore the resource.
- [use](webpolicydecisionlistener/use%28%29.md): Deprecated. Tells the listener to use the resource.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Setting Policies (Legacy)

- [WebPolicyDelegate](webpolicydelegate.md): Deprecated.
