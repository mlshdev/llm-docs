> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/delegate](https://developer.apple.com/documentation/uikit/uiapplication/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the app object.

## Declaration

```swift
unowned(unsafe) var delegate: (any UIApplicationDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Every app must have an app delegate object to respond to app-related messages. For example, the app notifies its delegate when the app finishes launching and when its foreground or background execution status changes. Similarly, app-related messages coming from the system are often routed to the app delegate for handling. Xcode provides an initial app delegate for every app and you should not need to change this delegate later.

The delegate must adopt the [UIApplicationDelegate](../uiapplicationdelegate.md) formal protocol.

## See Also

### Configuring your app’s behavior

- [UIApplicationDelegate](../uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate of the app object.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<UIApplicationDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Every app must have an app delegate object to respond to app-related messages. For example, the app notifies its delegate when the app finishes launching and when its foreground or background execution status changes. Similarly, app-related messages coming from the system are often routed to the app delegate for handling. Xcode provides an initial app delegate for every app and you should not need to change this delegate later.

The delegate must adopt the [UIApplicationDelegate](../uiapplicationdelegate.md) formal protocol.

## See Also

### Configuring your app’s behavior

- [UIApplicationDelegate](../uiapplicationdelegate.md): A set of methods to manage shared behaviors for your app.
