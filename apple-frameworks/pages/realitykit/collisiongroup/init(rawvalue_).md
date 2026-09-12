> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisiongroup/init(rawvalue:)](https://developer.apple.com/documentation/realitykit/collisiongroup/init(rawvalue:))

# init(rawValue:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a collision group from a raw value.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: The raw value of the option set to create. Each bit of rawValue potentially represents an element of the option set, though raw values may include bits that are not defined as distinct values of the OptionSet type.

<a id="discussion"></a>

## Discussion

This initializer succeeds even if the value passed as `rawValue` exceeds the static properties declared as part of the option set. Usually, you will want to create each collision groups setting a different bit flag for each value, so that multiple individual groups can be combined using [OptionSet](https://developer.apple.com/documentation/swift/optionset) methods.

Here is an example of creating four collision groups using different bitflag values for each one.

```swift
let redGroup = CollisionGroup(rawValue: 1 << 0)
let blueGroup = CollisionGroup(rawValue: 1 << 1)
let greenGroup = CollisionGroup(rawValue: 1 << 2)
let yellowGroup = CollisionGroup(rawValue: 1 << 3)
```
