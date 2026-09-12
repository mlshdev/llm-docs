> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/removeappextensionpoint(_:)](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/removeappextensionpoint(_:))

# removeAppExtensionPoint(\_:)

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Removes the specified extension point and stops tracking the associated app extensions.

## Declaration

```swift
final func removeAppExtensionPoint(_ appExtensionPoint: AppExtensionPoint) async throws
```

## Parameters

- `appExtensionPoint`: An extension point that you define in your host app. If the monitor isn’t currently monitoring the extension point, calling this method has no impact.

<a id="discussion"></a>

## Discussion

This method updates the state of the monitor, removing the specified extension point from the list of those it’s tracking. Removing an extension point causes the monitor to update the [identities](identities.md) property as needed.

## See Also

### Adding and removing extension points

- [addAppExtensionPoint(\_:)](addappextensionpoint%28__%29.md): Begins the tracking of app extensions that support the specified extension point.
