> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionprocess/configuration/appextensionidentity](https://developer.apple.com/documentation/extensionfoundation/appextensionprocess/configuration/appextensionidentity)

# appExtensionIdentity

**Framework:** ExtensionFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

The identifying information for the app extension you want to launch.

## Declaration

```swift
var appExtensionIdentity: AppExtensionIdentity { get set }
```

<a id="discussion"></a>

## Discussion

Specify this value at initialization time. Fetch identity information from the [AppExtensionPoint.Monitor](../../appextensionpoint/monitor.md) type.
