> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller/menucontents

# AVLegibleMediaOptionsMenuController.MenuContents (Swift)

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
struct MenuContents
```

<a id="overview"></a>

## Overview

```
		An option set, describing the different contents of legible option menus.
```

```
		Describes the legible contents of a legible options menu
```

```
		Describes the caption appearance contents of a legible options menu.
```

```
		Describes all the contents of a legible options menu.
```

## Topics

### Creating menu contents

- [init(rawValue:)](menucontents/init%28rawvalue_%29.md)

### Menu content options

- [all](menucontents/all.md)
- [captionAppearance](menucontents/captionappearance.md)
- [legible](menucontents/legible.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the menu

- [menu(contents:)](menu%28contents_%29.md)
- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuController.StateChangeReason](statechangereason.md)

# AVLegibleMediaOptionsMenuContents (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
enum AVLegibleMediaOptionsMenuContents : NSInteger;
```

<a id="overview"></a>

## Overview

```
		An option set, describing the different contents of legible option menus.
```

```
		Describes the legible contents of a legible options menu
```

```
		Describes the caption appearance contents of a legible options menu.
```

```
		Describes all the contents of a legible options menu.
```

## Topics

### Menu content options

- [AVLegibleMediaOptionsMenuContentsAll](menucontents/all.md)
- [AVLegibleMediaOptionsMenuContentsCaptionAppearance](menucontents/captionappearance.md)
- [AVLegibleMediaOptionsMenuContentsLegible](menucontents/legible.md)

## See Also

### Managing the menu

- [menuWithContents:](menu%28contents_%29.md)
- [menuState](menustate.md)
- [AVLegibleMediaOptionsMenuState](../avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuStateChangeReason](statechangereason.md)
