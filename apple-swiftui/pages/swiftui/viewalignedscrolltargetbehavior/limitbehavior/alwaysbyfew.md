> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyfew](https://developer.apple.com/documentation/swiftui/viewalignedscrolltargetbehavior/limitbehavior/alwaysbyfew)

# alwaysByFew

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The always-by-few limit behavior.

## Declaration

```swift
static var alwaysByFew: ViewAlignedScrollTargetBehavior.LimitBehavior { get }
```

<a id="discussion"></a>

## Discussion

Limit the number of views that can be scrolled by a single interaction to a small number of views, rather than a single view at a time. The number of views is determined automatically.
