> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionpoint/monitor/init()](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/monitor/init())

# init()

**Framework:** ExtensionFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Creates a new monitor without any extension points.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

After using this initializer, call the [addAppExtensionPoint(\_:)](addappextensionpoint%28__%29.md) method to add an extension point to monitor.

## See Also

### Creating a monitor

- [init(appExtensionPoint:)](init%28appextensionpoint_%29.md): Creates a new monitor and configures it with the specified extension point.
