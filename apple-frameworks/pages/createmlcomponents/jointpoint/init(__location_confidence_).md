> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/jointpoint/init(_:location:confidence:)](https://developer.apple.com/documentation/createmlcomponents/jointpoint/init(_:location:confidence:))

# init(\_:location:confidence:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a joint point with its key, location and confidence.

## Declaration

```swift
init(_ key: JointKey, location: CGPoint, confidence: Float)
```

## Parameters

- `key`: Joint point identifier name.
- `location`: A point indicating the location of the joint.
- `confidence`: The detection confidence for the joint.
