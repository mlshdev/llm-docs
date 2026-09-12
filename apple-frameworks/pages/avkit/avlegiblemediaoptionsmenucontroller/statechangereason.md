> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller/statechangereason](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/statechangereason)

# AVLegibleMediaOptionsMenuController.StateChangeReason (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
enum StateChangeReason
```

<a id="overview"></a>

## Overview

```
		An enum set, describing the different reasons for changing the menu state.
```

```
		Describes a non specified menu state change reason.
```

```
		Describes a menu state change reason due language mismatch.
```

## Topics

### Creating a reason

- [init(rawValue:)](statechangereason/init%28rawvalue_%29.md)

### Reasons

- [AVLegibleMediaOptionsMenuController.StateChangeReason.none](statechangereason/none.md)
- [AVLegibleMediaOptionsMenuController.StateChangeReason.languageMismatch](statechangereason/languagemismatch.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the menu

- [menu(contents:)](menu%28contents_%29.md)
- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuController.MenuContents](menucontents.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)

# AVLegibleMediaOptionsMenuStateChangeReason (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
enum AVLegibleMediaOptionsMenuStateChangeReason : NSInteger;
```

<a id="overview"></a>

## Overview

```
		An enum set, describing the different reasons for changing the menu state.
```

```
		Describes a non specified menu state change reason.
```

```
		Describes a menu state change reason due language mismatch.
```

## Topics

### Reasons

- [AVLegibleMediaOptionsMenuStateChangeReasonNone](statechangereason/none.md)
- [AVLegibleMediaOptionsMenuStateChangeReasonLanguageMismatch](statechangereason/languagemismatch.md)

## See Also

### Managing the menu

- [menuWithContents:](menu%28contents_%29.md)
- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuContents](menucontents.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)
