> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetsessionticketsenabled(_:_:)](https://developer.apple.com/documentation/security/sslsetsessionticketsenabled(_:_:))

# SSLSetSessionTicketsEnabled(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15)

Enables or disables session ticket resumption.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetSessionTicketsEnabled(_ context: SSLContext, _ enabled: Bool) -> OSStatus
```

## Parameters

- `context`: A session context.
- `enabled`: A Boolean set to [true](https://developer.apple.com/documentation/swift/true) to enable session ticket resumption, or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

By default, session tickets are disabled.

# SSLSetSessionTicketsEnabled (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Enables or disables session ticket resumption.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetSessionTicketsEnabled(SSLContextRef context, Boolean enabled);
```

## Parameters

- `context`: A session context.
- `enabled`: A Boolean set to [true](https://developer.apple.com/documentation/swift/true) to enable session ticket resumption, or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

By default, session tickets are disabled.
