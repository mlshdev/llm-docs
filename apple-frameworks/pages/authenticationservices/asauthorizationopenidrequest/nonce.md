> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationopenidrequest/nonce](https://developer.apple.com/documentation/authenticationservices/asauthorizationopenidrequest/nonce)

# nonce (Swift)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A string value to pass to the identity provider.

## Declaration

```swift
var nonce: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You can verify this value with the identity token provided as part of a successful ASAuthorization response.

The nonce size may depend on the actual technology used, and an error might be returned by the request execution.

# nonce (Objective-C)

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A string value to pass to the identity provider.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * nonce;
```

<a id="Discussion"></a>

## Discussion

You can verify this value with the identity token provided as part of a successful ASAuthorization response.

The nonce size may depend on the actual technology used, and an error might be returned by the request execution.
