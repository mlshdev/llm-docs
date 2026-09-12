> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcnearbyservicebrowser/init(peer:servicetype:)](https://developer.apple.com/documentation/multipeerconnectivity/mcnearbyservicebrowser/init(peer:servicetype:))

# init(peer:serviceType:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes the nearby service browser object.

> Use Network Framework instead

## Declaration

```swift
init(peer myPeerID: MCPeerID, serviceType: String)
```

## Parameters

- `myPeerID`: The local peer ID for this instance.
- `serviceType`: The type of service to search for. This should be a *short* text string that describes the app’s networking protocol, in the same format as a Bonjour service type (without the transport protocol) and meeting the restrictions of [RFC 6335](https://tools.ietf.org/html/rfc6335) (section 5.1) governing Service Name Syntax. In particular, the string:

  - Must be 1–15 characters long
  - Can contain only ASCII lowercase letters, numbers, and hyphens
  - Must contain at least one ASCII letter
  - Must not begin or end with a hyphen
  - Must not contain hyphens adjacent to other hyphens.

  This name should be easily distinguished from unrelated services. For example, a text chat app made by ABC company could use the service type `abc-txtchat`.

  For more details, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).

<a id="return-value"></a>

## Return Value

Returns an initialized nearby service browser object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `session` or `serviceType` parameters do not contain valid objects or the specified Bonjour service type is not valid.

## See Also

### Initializing the Browser

- [delegate](delegate.md): Deprecated. The delegate object that handles browser-related events.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](servicetype.md): Deprecated. The service type to browse for.

# initWithPeer:serviceType: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes the nearby service browser object.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithPeer:(MCPeerID *) myPeerID serviceType:(NSString *) serviceType;
```

## Parameters

- `myPeerID`: The local peer ID for this instance.
- `serviceType`: The type of service to search for. This should be a *short* text string that describes the app’s networking protocol, in the same format as a Bonjour service type (without the transport protocol) and meeting the restrictions of [RFC 6335](https://tools.ietf.org/html/rfc6335) (section 5.1) governing Service Name Syntax. In particular, the string:

  - Must be 1–15 characters long
  - Can contain only ASCII lowercase letters, numbers, and hyphens
  - Must contain at least one ASCII letter
  - Must not begin or end with a hyphen
  - Must not contain hyphens adjacent to other hyphens.

  This name should be easily distinguished from unrelated services. For example, a text chat app made by ABC company could use the service type `abc-txtchat`.

  For more details, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).

<a id="return-value"></a>

## Return Value

Returns an initialized nearby service browser object, or `nil` if an error occurs.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `session` or `serviceType` parameters do not contain valid objects or the specified Bonjour service type is not valid.

## See Also

### Initializing the Browser

- [delegate](delegate.md): Deprecated. The delegate object that handles browser-related events.
- [myPeerID](mypeerid.md): Deprecated. The local peer ID for this instance.
- [serviceType](servicetype.md): Deprecated. The service type to browse for.
