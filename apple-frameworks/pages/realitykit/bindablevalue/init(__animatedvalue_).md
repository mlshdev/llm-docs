> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindablevalue/init(_:animatedvalue:)](https://developer.apple.com/documentation/realitykit/bindablevalue/init(_:animatedvalue:))

# init(\_:animatedValue:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a bindable value.

## Declaration

```swift
init(_ value: T, animatedValue: T? = nil)
```

## Parameters

- `value`: A value that reflects the state of the animated property before or after an animation.
- `animatedValue`: A value that represents the state of the animated property as an animation progresses.
