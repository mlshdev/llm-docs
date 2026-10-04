> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nshostingscenerepresentation/init(rootscene:)

# init(rootScene:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a new hosting scene representation for the specified scene(s).

## Declaration

```swift
@MainActor init(@SceneBuilder rootScene: () -> Content)
```

## Parameters

- `rootScene`: The SwiftUI scene(s) to be represented.
