> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicoordinatespace/bounds

# bounds (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

The bounds rectangle describing the item’s location and size in its own coordinate system.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property always matches the app’s interface orientation. For apps that support all interface orientations, the value in this property can change when the user rotates the device between portrait and landscape modes.

# bounds (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS · visionOS 1.0+

The bounds rectangle describing the item’s location and size in its own coordinate system.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

The rectangle in this property always matches the app’s interface orientation. For apps that support all interface orientations, the value in this property can change when the user rotates the device between portrait and landscape modes.
