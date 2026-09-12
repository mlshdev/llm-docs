> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/pose/init(_:)](https://developer.apple.com/documentation/createmlcomponents/pose/init(_:))

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a pose from a body or hand pose observation.

## Declaration

```swift
init(_ observation: VNRecognizedPointsObservation) throws
```

## Parameters

- `observation`: Recognized points observation that comes from either a body pose or hand pose request.

## See Also

### Creating a pose

- [init(from:)](init%28from_%29-8rvl5.md): Creates a pose from a dictionary of joint keypoints.
