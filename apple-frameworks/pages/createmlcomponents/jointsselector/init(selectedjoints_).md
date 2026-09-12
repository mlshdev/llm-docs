> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointsselector/init(selectedjoints:)](https://developer.apple.com/documentation/createmlcomponents/jointsselector/init(selectedjoints:))

# init(selectedJoints:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a joint selector transformer using a list of joint keys to be selected.

## Declaration

```swift
init(selectedJoints: [JointKey])
```

## Parameters

- `selectedJoints`: Joint keys to be selected from the pose.

## See Also

### Creating a selector

- [init(ignoredJoints:)](init%28ignoredjoints_%29.md): Creates a joint selector transformer using a list of joint keys to be ignored.
