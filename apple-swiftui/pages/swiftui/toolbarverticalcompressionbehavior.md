> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbarverticalcompressionbehavior

# ToolbarVerticalCompressionBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A behavior that determines how bars compress when the system places different types of bars together and space is constrained.

## Declaration

```swift
struct ToolbarVerticalCompressionBehavior
```

<a id="overview"></a>

## Overview

Use this with the [toolbarVerticalCompressionBehavior(\_:)](view/toolbarverticalcompressionbehavior%28__%29.md) modifier to control which items compress first when space is limited.

## Topics

### Getting compression behavior options

- [automatic](toolbarverticalcompressionbehavior/automatic.md): Beta. The automatic compression behavior.
- [prefersTabBar](toolbarverticalcompressionbehavior/preferstabbar.md): Beta. A compression behavior that prefers keeping the tab bar visible.
- [prefersToolbarItems](toolbarverticalcompressionbehavior/preferstoolbaritems.md): Beta. A compression behavior that prefers keeping toolbar items visible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring vertical toolbar behavior

- [toolbarVerticalBehavior(\_:)](view/toolbarverticalbehavior%28__%29.md): Beta. Sets the behavior for the vertical bar.
- [ToolbarVerticalBehavior](toolbarverticalbehavior.md): Beta. A behavior that determines whether the vertical bar is used.
- [toolbarVerticalCompressionBehavior(\_:)](view/toolbarverticalcompressionbehavior%28__%29.md): Beta. Sets how bars should compress when different types of toolbars are hosted together and space is constrained.
