> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/asyncafterunsafe(walldeadline:qos:flags:execute:)](https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncafterunsafe(walldeadline:qos:flags:execute:))

# asyncAfterUnsafe(wallDeadline:qos:flags:execute:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
func asyncAfterUnsafe(wallDeadline: DispatchWallTime, qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], execute work: @escaping () -> Void)
```
