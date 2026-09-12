> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/error/unspecifiedappextensionpointname](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/error/unspecifiedappextensionpointname)

# AppExtensionPoint.Error.unspecifiedAppExtensionPointName

**Framework:** ExtensionFoundation  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

An error that indicates the specified extension point is unknown.

## Declaration

```swift
case unspecifiedAppExtensionPointName
```

<a id="discussion"></a>

## Discussion

Make sure the extension point name you specified matches one of the host app’s defined extension points.

## See Also

### Getting the error codes

- [AppExtensionPoint.Error.hostMustBeApplicationOrAppExtension](hostmustbeapplicationorappextension.md): An error that indicates the definition of an extension point in an unsupported target.
- [AppExtensionPoint.Error.hostMustDefineAppExtensionPoint(\_:)](hostmustdefineappextensionpoint%28__%29.md): An error that indicates an attempt to define an extension point outside an app.
- [AppExtensionPoint.Error.hostMustHaveBundleIdentifier](hostmusthavebundleidentifier.md): An error that indicates the host app is missing its bundle identifier.
- [AppExtensionPoint.Error.invalidAppExtensionPoint](invalidappextensionpoint.md): An error that indicates an attempt to bind to an unknown extension point.
