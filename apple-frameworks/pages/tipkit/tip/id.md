> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/id](https://developer.apple.com/documentation/tipkit/tip/id)

# id

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The tip’s unique identifier.

## Declaration

```swift
var id: String { get }
```

<a id="Overview"></a>

## Overview

> **Note**

> More information on custom tip identifiers can be found in WWDC24 Session 10070: [Customize feature discovery with TipKit](https://developer.apple.com/videos/play/wwdc2024/10070?time=312).

By default the type name of the `Tip` conforming struct will be used as the tip’s `id`. Specifying a custom `id` allows you to create reusable tips based on their content.

```swift
struct NewTrailTip: Tip {
    let newTrail: Trail
    
    var id: String {
        "NewTrailTip-\(newTrail.id)"
    }
}
    
struct TrailList: View {
    let newTrail: Trail
    
    var body: some View {
        // Creates a different tip for each new trail.
        let newTrailTip = NewTrailTip(newTrail)
        TipView(newTrailTip)
    }
}
```

## See Also

### Setting tip content

- [title](title.md): A title that names the tip.
- [message](message.md): A short description of how to use the tip’s feature.
- [image](image.md): The image associated with the tip.
