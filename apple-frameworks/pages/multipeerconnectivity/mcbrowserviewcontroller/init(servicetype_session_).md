> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller/init(servicetype:session:)](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller/init(servicetype:session:))

# init(serviceType:session:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a browser view controller using the provided service type and session.

> Use Network Framework instead

## Declaration

```swift
convenience init(serviceType: String, session: MCSession)
```

## Parameters

- `serviceType`: The type of service to search for. This should be a *short* text string that describes the app’s networking protocol, in the same format as a Bonjour service type (without the transport protocol) and meeting the restrictions of [RFC 6335](https://tools.ietf.org/html/rfc6335) (section 5.1) governing Service Name Syntax. In particular, the string:

  - Must be 1–15 characters long
  - Can contain only ASCII lowercase letters, numbers, and hyphens
  - Must contain at least one ASCII letter
  - Must not begin or end with a hyphen
  - Must not contain hyphens adjacent to other hyphens.

  This name should be easily distinguished from unrelated services. For example, a text chat app made by ABC company could use the service type `abc-txtchat`.

  For more details, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).
- `session`: The multipeer session that any user-chosen peers should be invited to join.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `session` or `serviceType` parameters do not contain valid objects or the specified Bonjour service type is not valid.

## See Also

### Initializing a Browser View Controller

- [init(browser:session:)](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.

# initWithServiceType:session: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a browser view controller using the provided service type and session.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithServiceType:(NSString *) serviceType session:(MCSession *) session;
```

## Parameters

- `serviceType`: The type of service to search for. This should be a *short* text string that describes the app’s networking protocol, in the same format as a Bonjour service type (without the transport protocol) and meeting the restrictions of [RFC 6335](https://tools.ietf.org/html/rfc6335) (section 5.1) governing Service Name Syntax. In particular, the string:

  - Must be 1–15 characters long
  - Can contain only ASCII lowercase letters, numbers, and hyphens
  - Must contain at least one ASCII letter
  - Must not begin or end with a hyphen
  - Must not contain hyphens adjacent to other hyphens.

  This name should be easily distinguished from unrelated services. For example, a text chat app made by ABC company could use the service type `abc-txtchat`.

  For more details, read [Domain Naming Conventions](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NetServices/Articles/domainnames.html#//apple_ref/doc/uid/TP40002460).
- `session`: The multipeer session that any user-chosen peers should be invited to join.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `session` or `serviceType` parameters do not contain valid objects or the specified Bonjour service type is not valid.

## See Also

### Initializing a Browser View Controller

- [initWithBrowser:session:](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.
