> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcsession/initializationoptions/inactive](https://developer.apple.com/documentation/xpc/xpcsession/initializationoptions/inactive)

# inactive

**Framework:** XPC  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Indicates that the session isn’t activated during its creation.

## Declaration

```swift
static let inactive: XPCSession.InitializationOptions
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you create a session with this option, you must manually activate it by calling [activate()](../activate%28%29.md).

## See Also

### Session creation options

- [privileged](privileged.md): Indicates that the Mach service is in the priviledged Mach bootstrap.
- [none](none.md): Indicates that the listener uses a default configuration during creation.
