> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/level](https://developer.apple.com/documentation/uikit/uiwindow/level)

# UIWindow.Level (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The positioning of windows relative to each other.

## Declaration

```swift
struct Level
```

<a id="overview"></a>

## Overview

The stacking of levels takes precedence over the stacking of windows within each level. That is, even the bottom window in a level obscures the top window of the next level down. Levels are listed in order from lowest to highest.

## Topics

### Window levels

- [normal](level/normal.md): The default level.
- [statusBar](level/statusbar.md): The level for a status window.
- [alert](level/alert.md): The level for an alert view.

### Initializers

- [init(\_:)](level/init%28__%29.md): Creates a window level structure.
- [init(rawValue:)](level/init%28rawvalue_%29.md): Creates a window level structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.
- [screen](screen.md): Deprecated. The screen to display the window on.

# UIWindowLevel (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The positioning of windows relative to each other.

## Declaration

```objectivec
typedef CGFloat UIWindowLevel;
```

<a id="overview"></a>

## Overview

The stacking of levels takes precedence over the stacking of windows within each level. That is, even the bottom window in a level obscures the top window of the next level down. Levels are listed in order from lowest to highest.

## Topics

### Window levels

- [UIWindowLevelNormal](level/normal.md): The default level.
- [UIWindowLevelStatusBar](level/statusbar.md): The level for a status window.
- [UIWindowLevelAlert](level/alert.md): The level for an alert view.

## See Also

### Configuring the window

- [rootViewController](rootviewcontroller.md): The root view controller for the window.
- [windowLevel](windowlevel.md): The position of the window in the z-axis.
- [canResizeToFitContent](canresizetofitcontent.md): A Boolean value that indicates whether the window’s constraint-based content determines its size.
- [screen](screen.md): Deprecated. The screen to display the window on.
