> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/init(appextensionpoint:)](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/init(appextensionpoint:))

# init(appExtensionPoint:)

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Creates a new monitor and configures it with the specified extension point.

## Declaration

```swift
convenience init(appExtensionPoint: AppExtensionPoint) async throws
```

## Parameters

- `appExtensionPoint`: An extension point type you defined in your host app.

<a id="discussion"></a>

## Discussion

Use this initializer to create a monitor and start looking for app extensions that match the specified extension point. This initializer returns after successfully adding the extension point to the monitor and generating the initial list of app extensions.

## See Also

### Creating a monitor

- [init()](init%28%29.md): Creates a new monitor without any extension points.
