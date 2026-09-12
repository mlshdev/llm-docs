> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operatingsystemversion/init()](https://developer.apple.com/documentation/foundation/operatingsystemversion/init())

# init()

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty operating system version.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

After initialization, the [majorVersion](majorversion.md), [minorVersion](minorversion.md), and [patchVersion](patchversion.md) are all `0`.

## See Also

### Creating an Operating System Version

- [init(majorVersion:minorVersion:patchVersion:)](init%28majorversion_minorversion_patchversion_%29.md): Creates an operating system version with the provided values.
