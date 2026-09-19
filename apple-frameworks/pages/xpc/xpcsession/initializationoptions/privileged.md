> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcsession/initializationoptions/privileged

# privileged

**Framework:** XPC  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Indicates that the Mach service is in the priviledged Mach bootstrap.

## Declaration

```swift
static let privileged: XPCSession.InitializationOptions
```

<a id="Discussion"></a>

## Discussion

The Mach service typically accomplishes this by placing its `launchd.plist` in the `LaunchDaemons` directory.

## See Also

### Session creation options

- [inactive](inactive.md): Indicates that the session isn’t activated during its creation.
- [none](none.md): Indicates that the listener uses a default configuration during creation.
