> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller/init(browser:session:)](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller/init(browser:session:))

# init(browser:session:) (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a browser view controller with the provided browser and session.

> Use Network Framework instead

## Declaration

```swift
init(browser: MCNearbyServiceBrowser, session: MCSession)
```

## Parameters

- `browser`: An object that the browser view controller uses for browsing. This is usually an instance of `MCNearbyServiceBrowser`. However, if your app is using a custom discovery scheme, you can instead pass any custom subclass that calls the methods defined in the [MCNearbyServiceBrowserDelegate](../mcnearbyservicebrowserdelegate.md) protocol on its delegate when peers are found and lost.

  > **Important**

  >  If you want the browser view controller to manage the browsing process, the browser object must not be actively browsing, and its delegate must be `nil`.
- `session`: The multipeer session into which the invited peers are connected.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `browser` or `session` parameters do not contain valid objects.

## See Also

### Initializing a Browser View Controller

- [init(serviceType:session:)](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.

# initWithBrowser:session: (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Initializes a browser view controller with the provided browser and session.

> Use Network Framework instead

## Declaration

```objectivec
- (instancetype) initWithBrowser:(MCNearbyServiceBrowser *) browser session:(MCSession *) session;
```

## Parameters

- `browser`: An object that the browser view controller uses for browsing. This is usually an instance of `MCNearbyServiceBrowser`. However, if your app is using a custom discovery scheme, you can instead pass any custom subclass that calls the methods defined in the [MCNearbyServiceBrowserDelegate](../mcnearbyservicebrowserdelegate.md) protocol on its delegate when peers are found and lost.

  > **Important**

  >  If you want the browser view controller to manage the browsing process, the browser object must not be actively browsing, and its delegate must be `nil`.
- `session`: The multipeer session into which the invited peers are connected.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method throws an exception if the `browser` or `session` parameters do not contain valid objects.

## See Also

### Initializing a Browser View Controller

- [initWithServiceType:session:](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.
