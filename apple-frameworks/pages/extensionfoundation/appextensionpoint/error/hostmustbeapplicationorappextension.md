> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/error/hostmustbeapplicationorappextension](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/error/hostmustbeapplicationorappextension)

# AppExtensionPoint.Error.hostMustBeApplicationOrAppExtension

**Framework:** ExtensionFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

An error that indicates the definition of an extension point in an unsupported target.

## Declaration

```swift
case hostMustBeApplicationOrAppExtension
```

## See Also

### Getting the error codes

- [AppExtensionPoint.Error.hostMustDefineAppExtensionPoint(\_:)](hostmustdefineappextensionpoint%28__%29.md): An error that indicates an attempt to define an extension point outside an app.
- [AppExtensionPoint.Error.hostMustHaveBundleIdentifier](hostmusthavebundleidentifier.md): An error that indicates the host app is missing its bundle identifier.
- [AppExtensionPoint.Error.invalidAppExtensionPoint](invalidappextensionpoint.md): An error that indicates an attempt to bind to an unknown extension point.
- [AppExtensionPoint.Error.unspecifiedAppExtensionPointName](unspecifiedappextensionpointname.md): An error that indicates the specified extension point is unknown.
