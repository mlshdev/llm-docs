> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontextdelegate](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontextdelegate)

# CXCallDirectoryExtensionContextDelegate (Swift)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

A collection of methods a Call Directory extension context object calls when a request fails.

## Declaration

```swift
protocol CXCallDirectoryExtensionContextDelegate : NSObjectProtocol
```

## Topics

### Handling Request Failures

- [requestFailed(for:withError:)](cxcalldirectoryextensioncontextdelegate/requestfailed%28for_witherror_%29.md): Called when a Call Directory app extension request fails.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.

# CXCallDirectoryExtensionContextDelegate (Objective-C)

**Framework:** CallKit  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A collection of methods a Call Directory extension context object calls when a request fails.

## Declaration

```objectivec
@protocol CXCallDirectoryExtensionContextDelegate <NSObject>
```

## Topics

### Handling Request Failures

- [requestFailedForExtensionContext:withError:](cxcalldirectoryextensioncontextdelegate/requestfailed%28for_witherror_%29.md): Called when a Call Directory app extension request fails.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryProvider](cxcalldirectoryprovider.md): The principal object for a Call Directory app extension for a host app.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.
