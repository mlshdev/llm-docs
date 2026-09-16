> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/windowplacement/init(_:size:)

# init(\_:size:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a new window placement with an absolute position and optional size.

## Declaration

```swift
init(_ position: CGPoint? = nil, size: CGSize? = nil)
```

<a id="discussion"></a>

## Discussion

Any values not provided will use use the default values for the `Scene` that this placement is being applied to.
