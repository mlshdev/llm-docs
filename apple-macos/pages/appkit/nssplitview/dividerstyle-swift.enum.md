> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/dividerstyle-swift.enum](https://developer.apple.com/documentation/appkit/nssplitview/dividerstyle-swift.enum)

# NSSplitView.DividerStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify the style of the split view’s dividers.

## Declaration

```swift
enum DividerStyle
```

<a id="overview"></a>

## Overview

These constants specify the possible divider styles that [NSSplitView](../nssplitview.md) uses.

## Topics

### Constants

- [NSSplitView.DividerStyle.thick](dividerstyle-swift.enum/thick.md): A thick style divider displays between subviews.
- [NSSplitView.DividerStyle.thin](dividerstyle-swift.enum/thin.md): A thin style divider displays between subviews.
- [NSSplitView.DividerStyle.paneSplitter](dividerstyle-swift.enum/panesplitter.md): A thick style divider with a 3D appearance displays between subviews.

### Initializers

- [init(rawValue:)](dividerstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.
- [drawDivider(in:)](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.

# NSSplitViewDividerStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Constants that specify the style of the split view’s dividers.

## Declaration

```objectivec
enum NSSplitViewDividerStyle : NSInteger;
```

<a id="overview"></a>

## Overview

These constants specify the possible divider styles that [NSSplitView](../nssplitview.md) uses.

## Topics

### Constants

- [NSSplitViewDividerStyleThick](dividerstyle-swift.enum/thick.md): A thick style divider displays between subviews.
- [NSSplitViewDividerStyleThin](dividerstyle-swift.enum/thin.md): A thin style divider displays between subviews.
- [NSSplitViewDividerStylePaneSplitter](dividerstyle-swift.enum/panesplitter.md): A thick style divider with a 3D appearance displays between subviews.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.
- [drawDividerInRect:](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.
