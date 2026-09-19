> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenustate

# AVLegibleMediaOptionsMenuState (Swift)

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
struct AVLegibleMediaOptionsMenuState
```

<a id="overview"></a>

## Overview

A struct describing the state of the legible options menu.

## Topics

### Creating a menu state

- [init()](avlegiblemediaoptionsmenustate/init%28%29.md)
- [init(enabled:reason:)](avlegiblemediaoptionsmenustate/init%28enabled_reason_%29.md)

### Inspecting the state

- [enabled](avlegiblemediaoptionsmenustate/enabled.md): Whether or not the legible options menu is
- [reason](avlegiblemediaoptionsmenustate/reason.md): The reason for changing the menu state

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Media and content selection

- [AVLegibleMediaOptionsMenuController](avlegiblemediaoptionsmenucontroller.md)
- [AVContentSelectionViewController](avcontentselectionviewcontroller.md): A view controller for providing additional UI to the multiview experience.

# AVLegibleMediaOptionsMenuState (Objective-C)

**Framework:** AVKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.9+ · visionOS 1.0+

## Declaration

```objectivec
typedef struct AVLegibleMediaOptionsMenuState { ... } AVLegibleMediaOptionsMenuState;
```

<a id="overview"></a>

## Overview

A struct describing the state of the legible options menu.

## Topics

### Inspecting the state

- [enabled](avlegiblemediaoptionsmenustate/enabled.md): Whether or not the legible options menu is
- [reason](avlegiblemediaoptionsmenustate/reason.md): The reason for changing the menu state

## See Also

### Media and content selection

- [AVLegibleMediaOptionsMenuController](avlegiblemediaoptionsmenucontroller.md)
