> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/surfacesnappinginfo/classification

# classification

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

A type that provides information about the surface classification the scene is snapped to. This property only has a value if the scene is snapped and `authorizationStatus` is `.authorized`.

## Declaration

```swift
var classification: SurfaceClassification? { get }
```
