> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/multipeerconnectivity/mcbrowserviewcontroller/delegate](https://developer.apple.com/documentation/multipeerconnectivity/mcbrowserviewcontroller/delegate)

# delegate (Swift)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles browser-view-controller-related events.

> Use Network Framework instead

## Declaration

```swift
weak var delegate: (any MCBrowserViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A browser view controller notifies the delegate:

- When the user presses the “Done” button, which is enabled when the specified minimum number of peers are connected in a session.
- When the user cancels the view controller.

Also, as new peers are discovered, the delegate can choose whether to present them in the user interface.

## See Also

### Initializing a Browser View Controller

- [init(serviceType:session:)](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [init(browser:session:)](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.

# delegate (Objective-C)

**Framework:** Multipeer Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The delegate object that handles browser-view-controller-related events.

> Use Network Framework instead

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MCBrowserViewControllerDelegate> delegate;
```

```objectivec
@property (atomic, weak, nullable) id<MCBrowserViewControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A browser view controller notifies the delegate:

- When the user presses the “Done” button, which is enabled when the specified minimum number of peers are connected in a session.
- When the user cancels the view controller.

Also, as new peers are discovered, the delegate can choose whether to present them in the user interface.

## See Also

### Initializing a Browser View Controller

- [initWithServiceType:session:](init%28servicetype_session_%29.md): Deprecated. Initializes a browser view controller using the provided service type and session.
- [initWithBrowser:session:](init%28browser_session_%29.md): Deprecated. Initializes a browser view controller with the provided browser and session.
- [browser](browser.md): Deprecated. The browser object that is used for discovering peers.
- [session](session.md): Deprecated. The multipeer session to which the invited peers are connected.
