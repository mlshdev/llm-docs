> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/detectedobject/init(boundingbox:label:probability:)](https://developer.apple.com/documentation/createmlcomponents/detectedobject/init(boundingbox:label:probability:))

# init(boundingBox:label:probability:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a detected object with bounding box, object label and confidence.

## Declaration

```swift
init(boundingBox: CGRect, label: Label, probability: Float)
```

## Parameters

- `boundingBox`: The bounding box of the detected object.
- `label`: The label of the detected object.
- `probability`: The detection confidence. The value will always be between 0.0 and 1.0
