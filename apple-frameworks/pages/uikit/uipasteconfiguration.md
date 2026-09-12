> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteconfiguration](https://developer.apple.com/documentation/uikit/uipasteconfiguration)

# UIPasteConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.

## Declaration

```swift
@MainActor class UIPasteConfiguration
```

## Topics

### Initializing a paste configuration

- [init()](uipasteconfiguration/init%28%29.md): Initializes a new paste configuration.
- [init(acceptableTypeIdentifiers:)](uipasteconfiguration/init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [init(forAccepting:)](uipasteconfiguration/init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.
- [init(forAccepting:)](uipasteconfiguration/init%28foraccepting_%29-84r2r.md)

### Getting acceptable type identifiers

- [acceptableTypeIdentifiers](uipasteconfiguration/acceptabletypeidentifiers.md): An array of UTI strings that specify the types accepted by the paste configuration.

### Adding acceptable type identifiers

- [addAcceptableTypeIdentifiers(\_:)](uipasteconfiguration/addacceptabletypeidentifiers%28__%29.md): Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.
- [addTypeIdentifiers(forAccepting:)](uipasteconfiguration/addtypeidentifiers%28foraccepting_%29-4fvd6.md): Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.
- [addTypeIdentifiers(forAccepting:)](uipasteconfiguration/addtypeidentifiers%28foraccepting_%29-8af7o.md)

### Initializers

- [init(coder:)](uipasteconfiguration/init%28coder_%29.md)
- [init(typeIdentifiersForAcceptingClass:)](uipasteconfiguration/init%28typeidentifiersforacceptingclass_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Pasteboard

- [UIPasteControl](uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControl.Configuration](uipastecontrol/configuration-swift.class.md): An object that determines a paste button’s color, corner style, icon, and text.
- [UIPasteControl.DisplayMode](uipastecontrol/displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.
- [UIPasteboard](uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.

# UIPasteConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The interface that an object implements to declare its ability to accept specific data types for pasting and for drag-and-drop activities.

## Declaration

```objectivec
@interface UIPasteConfiguration : NSObject
```

## Topics

### Initializing a paste configuration

- [init](uipasteconfiguration/init%28%29.md): Initializes a new paste configuration.
- [initWithAcceptableTypeIdentifiers:](uipasteconfiguration/init%28acceptabletypeidentifiers_%29.md): Initializes a new paste configuration with a specified array of acceptable UTIs.
- [initWithTypeIdentifiersForAcceptingClass:](uipasteconfiguration/init%28foraccepting_%29-6is3h.md): Initializes a new paste configuration with the UTIs declared as supported by a specified class.

### Getting acceptable type identifiers

- [acceptableTypeIdentifiers](uipasteconfiguration/acceptabletypeidentifiers.md): An array of UTI strings that specify the types accepted by the paste configuration.

### Adding acceptable type identifiers

- [addAcceptableTypeIdentifiers:](uipasteconfiguration/addacceptabletypeidentifiers%28__%29.md): Adds an array of UTI strings to a paste configuration, increasing the variety of types the paste configuration accepts.
- [addTypeIdentifiersForAcceptingClass:](uipasteconfiguration/addtypeidentifiers%28foraccepting_%29-4fvd6.md): Expands the array of accepted UTIs for a paste configuration, based on those declared as supported by a specified class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pasteboard

- [UIPasteControl](uipastecontrol.md): A button that a person taps to place pasteboard contents in your app.
- [UIPasteControlConfiguration](uipastecontrol/configuration-swift.class.md): An object that determines a paste button’s color, corner style, icon, and text.
- [UIPasteControlDisplayMode](uipastecontrol/displaymode.md): Options that determine whether a paste button composes an icon, textual label, or both.
- [UIPasteboard](uipasteboard.md): An object that helps a user share data from one place to another within your app, and from your app to other apps.
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md): The interface that determines whether a responder object supports paste configuration.
