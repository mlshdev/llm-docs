> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/limits-swift.struct/init(yaw:pitch:roll:)

# init(yaw:pitch:roll:)

**Framework:** DockKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

Creates the limit object.

## Declaration

```swift
init(yaw: DockAccessory.Limits.Limit?, pitch: DockAccessory.Limits.Limit?, roll: DockAccessory.Limits.Limit?)
```

## Parameters

- `yaw`: The left and right limit.
- `pitch`: The up and down limit.
- `roll`: The side to side limit.
