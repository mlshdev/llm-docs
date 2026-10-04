> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiverticalbarcompressionbehavior

# UIVerticalBarCompressionBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

How bars compress when different types of bars are hosted together and space is constrained.

## Declaration

```swift
enum UIVerticalBarCompressionBehavior
```

## Topics

### Specifying a compression behavior

- [UIVerticalBarCompressionBehavior.automatic](uiverticalbarcompressionbehavior/automatic.md): The automatic compression behavior.
- [UIVerticalBarCompressionBehavior.prefersBarItems](uiverticalbarcompressionbehavior/prefersbaritems.md): A compression behavior that prefers keeping bar items visible.
- [UIVerticalBarCompressionBehavior.prefersTabBar](uiverticalbarcompressionbehavior/preferstabbar.md): A compression behavior that prefers keeping the tab bar visible.

### Initializers

- [init(rawValue:)](uiverticalbarcompressionbehavior/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring bars on the vertical axis

- [verticalBarCompressionBehavior](uinavigationitem/verticalbarcompressionbehavior.md): When the tab bar and navigation/toolbar items are both rendered together in the vertical bar, this property controls which items compress first.

# UIVerticalBarCompressionBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

How bars compress when different types of bars are hosted together and space is constrained.

## Declaration

```objectivec
enum UIVerticalBarCompressionBehavior : NSInteger;
```

## Topics

### Specifying a compression behavior

- [UIVerticalBarCompressionBehaviorAutomatic](uiverticalbarcompressionbehavior/automatic.md): The automatic compression behavior.
- [UIVerticalBarCompressionBehaviorPrefersBarItems](uiverticalbarcompressionbehavior/prefersbaritems.md): A compression behavior that prefers keeping bar items visible.
- [UIVerticalBarCompressionBehaviorPrefersTabBar](uiverticalbarcompressionbehavior/preferstabbar.md): A compression behavior that prefers keeping the tab bar visible.

## See Also

### Configuring bars on the vertical axis

- [verticalBarCompressionBehavior](uinavigationitem/verticalbarcompressionbehavior.md): When the tab bar and navigation/toolbar items are both rendered together in the vertical bar, this property controls which items compress first.
