> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiverticalbarbehavior

# UIVerticalBarBehavior (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A behavior that determines whether the vertical bar is used.

## Declaration

```swift
enum UIVerticalBarBehavior
```

<a id="overview"></a>

## Overview

Return this type from [preferredVerticalBarBehavior](uiviewcontroller/preferredverticalbarbehavior.md) to apply the preferred behavior.

## Topics

### Specifying vertical bar behavior

- [UIVerticalBarBehavior.automatic](uiverticalbarbehavior/automatic.md): Beta. The system determines whether the vertical bar is rendered.
- [UIVerticalBarBehavior.disabled](uiverticalbarbehavior/disabled.md): Beta. The vertical bar is disabled.

### Initializers

- [init(rawValue:)](uiverticalbarbehavior/init%28rawvalue_%29.md): Beta.

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

- [preferredVerticalBarBehavior](uiviewcontroller/preferredverticalbarbehavior.md): Beta. The vertical bar behavior that this view controller prefers.
- [childForPreferredVerticalBarBehavior](uiviewcontroller/childforpreferredverticalbarbehavior.md): Beta. Which child view controller, if any, should control the vertical bar behavior.
- [setNeedsUpdateOfVerticalBarConfiguration()](uiviewcontroller/setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.

# UIVerticalBarBehavior (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A behavior that determines whether the vertical bar is used.

## Declaration

```objectivec
enum UIVerticalBarBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

Return this type from [preferredVerticalBarBehavior](uiviewcontroller/preferredverticalbarbehavior.md) to apply the preferred behavior.

## Topics

### Specifying vertical bar behavior

- [UIVerticalBarBehaviorAutomatic](uiverticalbarbehavior/automatic.md): Beta. The system determines whether the vertical bar is rendered.
- [UIVerticalBarBehaviorDisabled](uiverticalbarbehavior/disabled.md): Beta. The vertical bar is disabled.

## See Also

### Configuring bars on the vertical axis

- [preferredVerticalBarBehavior](uiviewcontroller/preferredverticalbarbehavior.md): Beta. The vertical bar behavior that this view controller prefers.
- [childViewControllerForPreferredVerticalBarBehavior](uiviewcontroller/childforpreferredverticalbarbehavior.md): Beta. Which child view controller, if any, should control the vertical bar behavior.
- [setNeedsUpdateOfVerticalBarConfiguration](uiviewcontroller/setneedsupdateofverticalbarconfiguration%28%29.md): Beta. Signals to the system that the preferred vertical bar configuration, such as its behavior, has changed.
