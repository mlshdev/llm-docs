> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbaritemaxisbehavior

# ToolbarItemAxisBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Describes the bar axis behavior of a toolbar item.

## Declaration

```swift
struct ToolbarItemAxisBehavior
```

<a id="overview"></a>

## Overview

Use this with the [axisBehavior(\_:)](toolbarcontent/axisbehavior%28__%29.md) modifier to control which bar axes a toolbar item can appear in.

## Topics

### Getting behavior options

- [automatic](toolbaritemaxisbehavior/automatic.md): Beta. The automatic axis behavior.
- [horizontalOnly](toolbaritemaxisbehavior/horizontalonly.md): Beta. The item only supports horizontal bars. If an item only supports horizontal bars and no horizontal bars are present, the item is not shown.
- [verticalPreferred](toolbaritemaxisbehavior/verticalpreferred.md): Beta. The item supports both horizontal and vertical bars, and prefers a vertical placement when both horizontal and vertical bars are present.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing behaviors

- [axisBehavior(\_:)](toolbarcontent/axisbehavior%28__%29.md): Beta. The bar axis behavior of the toolbar item.
