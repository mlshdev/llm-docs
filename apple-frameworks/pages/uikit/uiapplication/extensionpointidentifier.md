> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/extensionpointidentifier](https://developer.apple.com/documentation/uikit/uiapplication/extensionpointidentifier)

# UIApplication.ExtensionPointIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A structure that identifies types of extensions.

## Declaration

```swift
struct ExtensionPointIdentifier
```

## Topics

### Constants

- [keyboard](extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

### Initializers

- [init(rawValue:)](extensionpointidentifier/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Disallowing specified app extension types

- [application(\_:shouldAllowExtensionPointIdentifier:)](../uiapplicationdelegate/application%28__shouldallowextensionpointidentifier_%29.md): Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.
- [keyboard](extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

# UIApplicationExtensionPointIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A structure that identifies types of extensions.

## Declaration

```objectivec
typedef NSString * UIApplicationExtensionPointIdentifier;
```

## Topics

### Constants

- [UIApplicationKeyboardExtensionPointIdentifier](extensionpointidentifier/keyboard.md): The identifier for custom keyboards.

## See Also

### Disallowing specified app extension types

- [application:shouldAllowExtensionPointIdentifier:](../uiapplicationdelegate/application%28__shouldallowextensionpointidentifier_%29.md): Asks the delegate to grant permission to use app extensions that are based on a specified extension point identifier.
- [UIApplicationKeyboardExtensionPointIdentifier](extensionpointidentifier/keyboard.md): The identifier for custom keyboards.
