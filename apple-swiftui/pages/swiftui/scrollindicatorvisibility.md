> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrollindicatorvisibility](https://developer.apple.com/documentation/swiftui/scrollindicatorvisibility)

# ScrollIndicatorVisibility

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The visibility of scroll indicators of a UI element.

## Declaration

```swift
struct ScrollIndicatorVisibility
```

<a id="overview"></a>

## Overview

Pass a value of this type to the [scrollIndicators(\_:axes:)](view/scrollindicators%28__axes_%29.md) method to specify the preferred scroll indicator visibility of a view hierarchy.

## Topics

### Getting visibilties

- [automatic](scrollindicatorvisibility/automatic.md): Scroll indicator visibility depends on the policies of the component accepting the visibility configuration.
- [hidden](scrollindicatorvisibility/hidden.md): Hide the scroll indicators.
- [never](scrollindicatorvisibility/never.md): Scroll indicators should never be visible.
- [visible](scrollindicatorvisibility/visible.md): Show the scroll indicators.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Showing scroll indicators

- [scrollIndicatorsFlash(onAppear:)](view/scrollindicatorsflash%28onappear_%29.md): Flashes the scroll indicators of a scrollable view when it appears.
- [scrollIndicatorsFlash(trigger:)](view/scrollindicatorsflash%28trigger_%29.md): Flashes the scroll indicators of scrollable views when a value changes.
- [scrollIndicators(\_:axes:)](view/scrollindicators%28__axes_%29.md): Sets the visibility of scroll indicators within this view.
- [horizontalScrollIndicatorVisibility](environmentvalues/horizontalscrollindicatorvisibility.md): The visibility to apply to scroll indicators of any horizontally scrollable content.
- [verticalScrollIndicatorVisibility](environmentvalues/verticalscrollindicatorvisibility.md): The visiblity to apply to scroll indicators of any vertically scrollable content.
