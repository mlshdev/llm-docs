> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/error](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/error)

# AppExtensionPoint.Error

**Framework:** ExtensionFoundation  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Error codes for monitor-related requests.

## Declaration

```swift
enum Error
```

## Topics

### Getting the error codes

- [AppExtensionPoint.Error.hostMustBeApplicationOrAppExtension](error/hostmustbeapplicationorappextension.md): An error that indicates the definition of an extension point in an unsupported target.
- [AppExtensionPoint.Error.hostMustDefineAppExtensionPoint(\_:)](error/hostmustdefineappextensionpoint%28__%29.md): An error that indicates an attempt to define an extension point outside an app.
- [AppExtensionPoint.Error.hostMustHaveBundleIdentifier](error/hostmusthavebundleidentifier.md): An error that indicates the host app is missing its bundle identifier.
- [AppExtensionPoint.Error.invalidAppExtensionPoint](error/invalidappextensionpoint.md): An error that indicates an attempt to bind to an unknown extension point.
- [AppExtensionPoint.Error.unspecifiedAppExtensionPointName](error/unspecifiedappextensionpointname.md): An error that indicates the specified extension point is unknown.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
