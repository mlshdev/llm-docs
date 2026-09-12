> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/applicationshouldautomaticallylocalizekeycommands(_:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/applicationshouldautomaticallylocalizekeycommands(_:))

# applicationShouldAutomaticallyLocalizeKeyCommands(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

## Declaration

```swift
optional func applicationShouldAutomaticallyLocalizeKeyCommands(_ application: UIApplication) -> Bool
```

## Parameters

- `application`: The singleton app object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to enable automatic shortcut localization for all app-specific menus, or [false](https://developer.apple.com/documentation/swift/false) to handle shortcut localization yourself.

<a id="Discussion"></a>

## Discussion

A keyboard shortcut you specify in one language might be difficult or impossible to reproduce on a keyboard with a different character set or layout. Localized keyboards sometimes rearrange punctuation marks or replace them altogether to make room for a language’s required characters. The new locations of those keys might make it difficult to use your current shortcuts. To ensure your shortcuts are always usable, the system can automatically remap shortcuts, as needed, to accommodate the connected keyboard.

If you don’t implement this method, or if you implement it and return [true](https://developer.apple.com/documentation/swift/true), the system automatically remaps all app-specific key-command shortcuts that are unreachable on the current keyboard. The system doesn’t remap shortcuts when the input keys have identical positions on both keyboards, or when a shortcut is still easily reachable on the current keyboard. The remapping is transparent to your app.

If you already localize your app’s key-command shortcuts for different languages, or if you allow someone to customize your app’s shortcuts, you can return [false](https://developer.apple.com/documentation/swift/false) to disable the automatic remapping behavior. When you return [false](https://developer.apple.com/documentation/swift/false), the system doesn’t change your app’s shortcuts. Instead, you are responsible to make any required changes to support localized keyboards.

During the final activation of your app at launch time, the app object calls this method once to record your app’s response.

# applicationShouldAutomaticallyLocalizeKeyCommands: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a Boolean value that tells the system whether to remap menu shortcuts to support localized keyboards.

## Declaration

```objectivec
- (BOOL) applicationShouldAutomaticallyLocalizeKeyCommands:(UIApplication *) application;
```

## Parameters

- `application`: The singleton app object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to enable automatic shortcut localization for all app-specific menus, or [false](https://developer.apple.com/documentation/swift/false) to handle shortcut localization yourself.

<a id="Discussion"></a>

## Discussion

A keyboard shortcut you specify in one language might be difficult or impossible to reproduce on a keyboard with a different character set or layout. Localized keyboards sometimes rearrange punctuation marks or replace them altogether to make room for a language’s required characters. The new locations of those keys might make it difficult to use your current shortcuts. To ensure your shortcuts are always usable, the system can automatically remap shortcuts, as needed, to accommodate the connected keyboard.

If you don’t implement this method, or if you implement it and return [true](https://developer.apple.com/documentation/swift/true), the system automatically remaps all app-specific key-command shortcuts that are unreachable on the current keyboard. The system doesn’t remap shortcuts when the input keys have identical positions on both keyboards, or when a shortcut is still easily reachable on the current keyboard. The remapping is transparent to your app.

If you already localize your app’s key-command shortcuts for different languages, or if you allow someone to customize your app’s shortcuts, you can return [false](https://developer.apple.com/documentation/swift/false) to disable the automatic remapping behavior. When you return [false](https://developer.apple.com/documentation/swift/false), the system doesn’t change your app’s shortcuts. Instead, you are responsible to make any required changes to support localized keyboards.

During the final activation of your app at launch time, the app object calls this method once to record your app’s response.
