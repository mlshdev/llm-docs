> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiconfigurationtextattributestransformer-swift.struct/transform

# transform

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

A closure that defines the text transformation.

## Declaration

```swift
let transform: (AttributeContainer) -> AttributeContainer
```

<a id="Discussion"></a>

## Discussion

This closure accepts a container with the current text attributes and returns a container with the new text attributes.
