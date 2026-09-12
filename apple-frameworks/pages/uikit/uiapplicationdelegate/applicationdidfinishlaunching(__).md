> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationdidfinishlaunching(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationdidfinishlaunching(_:))

# applicationDidFinishLaunching(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the app has finished launching.

> Use [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) instead.

## Declaration

```swift
optional func applicationDidFinishLaunching(_ application: UIApplication)
```

## Parameters

- `application`: The singleton app object.

<a id="Discussion"></a>

## Discussion

Don’t use this method in your apps; instead, use the [application(\_:willFinishLaunchingWithOptions:)](application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](application%28__didfinishlaunchingwithoptions_%29.md) methods.

Your implementation of this method creates your app’s user interface and initializes the app’s data structures. If your app persists its state between launches, you would also use this method to restore your app to its previous state.

After calling this method, the app also posts a [didFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md) notification to give interested objects a chance to respond to the initialization cycle.

## See Also

### Deprecated

- [Deprecated symbols](../uiapplicationdelegate-deprecated-symbols.md): Symbols that are no longer supported.

# applicationDidFinishLaunching: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when the app has finished launching.

> Use [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) instead.

## Declaration

```objectivec
- (void) applicationDidFinishLaunching:(UIApplication *) application;
```

## Parameters

- `application`: The singleton app object.

<a id="Discussion"></a>

## Discussion

Don’t use this method in your apps; instead, use the [application:willFinishLaunchingWithOptions:](application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](application%28__didfinishlaunchingwithoptions_%29.md) methods.

Your implementation of this method creates your app’s user interface and initializes the app’s data structures. If your app persists its state between launches, you would also use this method to restore your app to its previous state.

After calling this method, the app also posts a [UIApplicationDidFinishLaunchingNotification](../uiapplication/didfinishlaunchingnotification.md) notification to give interested objects a chance to respond to the initialization cycle.

## See Also

### Deprecated

- [Deprecated symbols](../uiapplicationdelegate-deprecated-symbols.md): Symbols that are no longer supported.
