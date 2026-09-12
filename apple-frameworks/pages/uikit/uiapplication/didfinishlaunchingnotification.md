> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/didfinishlaunchingnotification](https://developer.apple.com/documentation/uikit/uiapplication/didfinishlaunchingnotification)

# didFinishLaunchingNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts immediately after the app finishes launching.

## Declaration

```swift
nonisolated class let didFinishLaunchingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

If the app was launched as a result of in remote notification targeted at it or because another app opened a URL resource claimed the posting app (the notification `object`), this notification contains a `userInfo` dictionary. You can access the contents of the dictionary using the [url](launchoptionskey/url.md) and [sourceApplication](launchoptionskey/sourceapplication.md) constants (for URLs), the [remoteNotification](launchoptionskey/remotenotification.md) constant (for remote notifications), and the [localNotification](launchoptionskey/localnotification.md) constant (for local notifications). If the notification was posted for a normal app launch, there is no `userInfo` dictionary.

## See Also

### Initializing the app

- [application(\_:willFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application(\_:didFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplication.LaunchOptionsKey](launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

# UIApplicationDidFinishLaunchingNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A notification that posts immediately after the app finishes launching.

## Declaration

```objectivec
extern NSNotificationName const UIApplicationDidFinishLaunchingNotification;
```

<a id="Discussion"></a>

## Discussion

If the app was launched as a result of in remote notification targeted at it or because another app opened a URL resource claimed the posting app (the notification `object`), this notification contains a `userInfo` dictionary. You can access the contents of the dictionary using the [UIApplicationLaunchOptionsURLKey](launchoptionskey/url.md) and [UIApplicationLaunchOptionsSourceApplicationKey](launchoptionskey/sourceapplication.md) constants (for URLs), the [UIApplicationLaunchOptionsRemoteNotificationKey](launchoptionskey/remotenotification.md) constant (for remote notifications), and the [UIApplicationLaunchOptionsLocalNotificationKey](launchoptionskey/localnotification.md) constant (for local notifications). If the notification was posted for a normal app launch, there is no `userInfo` dictionary.

## See Also

### Initializing the app

- [application:willFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application:didFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplicationLaunchOptionsKey](launchoptionskey.md): The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.
