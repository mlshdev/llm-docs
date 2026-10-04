> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/presentationcomponent/configuration/popover(arrowedge:)

# popover(arrowEdge:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

Return a configuration that will present a SwiftUI popover.

## Declaration

```swift
static func popover(arrowEdge: Edge?) -> PresentationComponent.Configuration
```

## Parameters

- `arrowEdge`: The edges that the popover’s arrow are allowed to be positioned. The default is `nil`, which results in the system allowing any arrow edge.
