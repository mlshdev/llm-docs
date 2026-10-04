> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbarverticalcompressionbehavior

# ToolbarVerticalCompressionBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · macOS 27.1+ · tvOS 27.1+ · visionOS 27.1+ · watchOS 27.1+

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

- [automatic](toolbarverticalcompressionbehavior/automatic.md): The automatic compression behavior.
- [prefersTabBar](toolbarverticalcompressionbehavior/preferstabbar.md): A compression behavior that prefers keeping the tab bar visible.
- [prefersToolbarItems](toolbarverticalcompressionbehavior/preferstoolbaritems.md): A compression behavior that prefers keeping toolbar items visible.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring vertical toolbar behavior

- [toolbarVerticalBehavior(\_:)](view/toolbarverticalbehavior%28__%29.md): Sets the behavior for the vertical bar.
- [ToolbarVerticalBehavior](toolbarverticalbehavior.md): A behavior that determines whether the vertical bar is used.
- [toolbarVerticalCompressionBehavior(\_:)](view/toolbarverticalcompressionbehavior%28__%29.md): Sets how bars should compress when different types of toolbars are hosted together and space is constrained.
