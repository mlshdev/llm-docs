> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/protectionspace

# protectionSpace (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s protection space.

## Declaration

```swift
@NSCopying var protectionSpace: URLProtectionSpace { get }
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

A protection space object provides additional information about the authentication request, such as the host, port, authentication realm, and so on. The protection space also tells you whether the authentication challenge is asking you to provide the user’s credentials or to verify the TLS credentials provided by the server.

# protectionSpace (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The receiver’s protection space.

## Declaration

```objectivec
@property (copy, readonly) NSURLProtectionSpace * protectionSpace;
```

## Mentioned In

- [Performing manual server trust authentication](../performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

A protection space object provides additional information about the authentication request, such as the host, port, authentication realm, and so on. The protection space also tells you whether the authentication challenge is asking you to provide the user’s credentials or to verify the TLS credentials provided by the server.
