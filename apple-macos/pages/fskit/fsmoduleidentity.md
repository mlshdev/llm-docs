> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsmoduleidentity](https://developer.apple.com/documentation/fskit/fsmoduleidentity)

# FSModuleIdentity (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An installed file system module.

## Declaration

```swift
class FSModuleIdentity
```

## Topics

### Accessing module properties

- [bundleIdentifier](fsmoduleidentity/bundleidentifier.md): The module’s bundle identifier.
- [url](fsmoduleidentity/url.md): The module’s URL.
- [isEnabled](fsmoduleidentity/isenabled.md): A Boolean value that indicates if the module is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Discovering installed extensions

- [fetchInstalledExtensions(completionHandler:)](fsclient/fetchinstalledextensions%28completionhandler_%29.md): Asynchronously retrieves an list of installed file system modules.

# FSModuleIdentity (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

An installed file system module.

## Declaration

```objectivec
@interface FSModuleIdentity : NSObject
```

## Topics

### Accessing module properties

- [bundleIdentifier](fsmoduleidentity/bundleidentifier.md): The module’s bundle identifier.
- [url](fsmoduleidentity/url.md): The module’s URL.
- [enabled](fsmoduleidentity/isenabled.md): A Boolean value that indicates if the module is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Discovering installed extensions

- [fetchInstalledExtensionsWithCompletionHandler:](fsclient/fetchinstalledextensions%28completionhandler_%29.md): Asynchronously retrieves an list of installed file system modules.
