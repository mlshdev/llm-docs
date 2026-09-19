> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/jointsselector/init(ignoredjoints:)

# init(ignoredJoints:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a joint selector transformer using a list of joint keys to be ignored.

## Declaration

```swift
init(ignoredJoints: [JointKey])
```

## Parameters

- `ignoredJoints`: Joint keys to be ignored and set to zero in the pose.

## See Also

### Creating a selector

- [init(selectedJoints:)](init%28selectedjoints_%29.md): Creates a joint selector transformer using a list of joint keys to be selected.
