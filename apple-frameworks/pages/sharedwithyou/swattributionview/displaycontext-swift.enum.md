> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swattributionview/displaycontext-swift.enum](https://developer.apple.com/documentation/sharedwithyou/swattributionview/displaycontext-swift.enum)

# SWAttributionView.DisplayContext (Swift)

**Framework:** Shared with You  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The context for the content that influences the ranking of this view’s highlight.

## Declaration

```swift
enum DisplayContext
```

## Mentioned In

- [Making your app content shareable](../making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

Set the appropriate display context on [SWAttributionView](../swattributionview.md) before the system adds the view to a window. This informs the system about how the user is consuming the attributed content, and influences future relevancy ranking of the [SWHighlight](../swhighlight.md) for this view.

## Topics

### Context styles

- [SWAttributionView.DisplayContext.summary](displaycontext-swift.enum/summary.md): Indicates that the system is offering the attributed content shown along with this view to the user for consumption.
- [SWAttributionView.DisplayContext.detail](displaycontext-swift.enum/detail.md): Indicates that the attributed content shown along with this view is being actively consumed by the user.

### Initializers

- [init(rawValue:)](displaycontext-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the view

- [SWAttributionView.BackgroundStyle](backgroundstyle-swift.enum.md): The background styling of the attribution view’s contents.
- [SWAttributionView.HorizontalAlignment](horizontalalignment-swift.enum.md): The horizontal alignment of attribution view’s contents.

# SWAttributionViewDisplayContext (Objective-C)

**Framework:** Shared with You  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The context for the content that influences the ranking of this view’s highlight.

## Declaration

```objectivec
enum SWAttributionViewDisplayContext : NSInteger;
```

## Mentioned In

- [Making your app content shareable](../making-your-app-content-shareable.md)

<a id="overview"></a>

## Overview

Set the appropriate display context on [SWAttributionView](../swattributionview.md) before the system adds the view to a window. This informs the system about how the user is consuming the attributed content, and influences future relevancy ranking of the [SWHighlight](../swhighlight.md) for this view.

## Topics

### Context styles

- [SWAttributionViewDisplayContextSummary](displaycontext-swift.enum/summary.md): Indicates that the system is offering the attributed content shown along with this view to the user for consumption.
- [SWAttributionViewDisplayContextDetail](displaycontext-swift.enum/detail.md): Indicates that the attributed content shown along with this view is being actively consumed by the user.

## See Also

### Customizing the view

- [SWAttributionViewBackgroundStyle](backgroundstyle-swift.enum.md): The background styling of the attribution view’s contents.
- [SWAttributionViewHorizontalAlignment](horizontalalignment-swift.enum.md): The horizontal alignment of attribution view’s contents.
