> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uigesturerecognizerrepresentablecoordinatespaceconverter/location(in:)

# location(in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Converts the represented gesture recognizer’s current location to a SwiftUI coordinate space  of an ancestor of the view the gesture recognizer is attached to.

## Declaration

```swift
func location(in coordinateSpace: some CoordinateSpaceProtocol) -> CGPoint
```

## Parameters

- `coordinateSpace`: The SwiftUI coordinate space to convert to.
