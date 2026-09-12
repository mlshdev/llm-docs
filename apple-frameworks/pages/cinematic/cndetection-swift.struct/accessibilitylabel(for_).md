> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cndetection-swift.struct/accessibilitylabel(for:)](https://developer.apple.com/documentation/cinematic/cndetection-swift.struct/accessibilitylabel(for:))

# accessibilityLabel(for:)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

A localized accessibility label converting a specific detection type into a broad category such as a person, pet, and so on.

## Declaration

```swift
static func accessibilityLabel(for detectionType: CNDetectionType) -> String
```

## Parameters

- `detectionType`: The type of object to detect, such as the face, torso, cat, dog, and so on.

<a id="return-value"></a>

## Return Value

A string representing a localized accessibility label converting a specific detection type into a broad category such as a person, pet, and so on.
