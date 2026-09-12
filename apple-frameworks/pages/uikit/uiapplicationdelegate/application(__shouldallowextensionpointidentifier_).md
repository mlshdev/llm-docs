> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:shouldallowextensionpointidentifier:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:shouldallowextensionpointidentifier:))

# application(\_:shouldAllowExtensionPointIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.

## Declaration

```swift
optional func application(_ application: UIApplication, shouldAllowExtensionPointIdentifier extensionPointIdentifier: UIApplication.ExtensionPointIdentifier) -> Bool
```

## Parameters

- `application`: Your shared app object.
- `extensionPointIdentifier`: A constant identifying an extension point.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to disallow use of a specified app extension type, or [true](https://developer.apple.com/documentation/swift/true) to allow use of the type.

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

You can implement this method to reject a specified type of app extension, based on its extension point identifier, from use in your app. See Extension Point Identifier Constants in [UIApplication](../uiapplication.md).

If you do not implement this method, all app extension types are available for use in your app.

In iOS 8.0, the only type of app extension you can reject is the custom keyboard. For information on app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## See Also

### Disallowing specified app extension types

- [UIApplication.ExtensionPointIdentifier](../uiapplication/extensionpointidentifier.md): A structure that identifies types of extensions.
- [keyboard](../uiapplication/extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

# application:shouldAllowExtensionPointIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.

## Declaration

```objectivec
- (BOOL) application:(UIApplication *) application shouldAllowExtensionPointIdentifier:(UIApplicationExtensionPointIdentifier) extensionPointIdentifier;
```

## Parameters

- `application`: Your shared app object.
- `extensionPointIdentifier`: A constant identifying an extension point.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) to disallow use of a specified app extension type, or [true](https://developer.apple.com/documentation/swift/true) to allow use of the type.

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

You can implement this method to reject a specified type of app extension, based on its extension point identifier, from use in your app. See Extension Point Identifier Constants in [UIApplication](../uiapplication.md).

If you do not implement this method, all app extension types are available for use in your app.

In iOS 8.0, the only type of app extension you can reject is the custom keyboard. For information on app extensions, see [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214).

## See Also

### Disallowing specified app extension types

- [UIApplicationExtensionPointIdentifier](../uiapplication/extensionpointidentifier.md): A structure that identifies types of extensions.
- [UIApplicationKeyboardExtensionPointIdentifier](../uiapplication/extensionpointidentifier/keyboard.md): The identifier for custom keyboards.
