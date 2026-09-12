> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller/browser](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller/browser)

# browser (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The browser object that is used for discovering peers.

> Use Network Framework instead

## Declaration

```swift
var browser: MCNearbyServiceBrowser? { get }
```

```swift
var browser: MCNearbyServiceBrowser { get }
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Initializing a Browser View Controller

- [init(serviceType:session:)](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [init(browser:session:)](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.

# browser (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The browser object that is used for discovering peers.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MCNearbyServiceBrowser * browser;
```

```objectivec
@property (atomic, readonly) MCNearbyServiceBrowser * browser;
```

<a id="Discussion"></a>

## Discussion

This value is set when you initialize the object, and cannot be changed later.

## See Also

### Initializing a Browser View Controller

- [initWithServiceType:session:](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [initWithBrowser:session:](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [delegate](delegate.md): Deprecated. The delegate object that handles browser-view-controller-related events.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.
