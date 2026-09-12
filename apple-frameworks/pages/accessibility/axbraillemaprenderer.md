> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemaprenderer](https://developer.apple.com/documentation/accessibility/axbraillemaprenderer)

# AXBrailleMapRenderer (Swift)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The interface for providing data for a braille map.

## Declaration

```swift
protocol AXBrailleMapRenderer : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You update the braille display in one of these ways:

- Implement [accessibilityBrailleMapRenderRegion](axbraillemaprenderer/accessibilitybraillemaprenderregion.md) to specify an area of the UI to render to the braille display. With this approach, VoiceOver handles the process of converting the data to a braille map by rendering the image of the screen in that region and updating the braille display automatically.
- Implement [accessibilityBrailleMapRenderer](axbraillemaprenderer/accessibilitybraillemaprenderer.md) to update the braille map manually. With this approach, you get more detailed control over what to display, but you must modify the braille map yourself.

## Topics

### Rendering a specific region

- [accessibilityBrailleMapRenderRegion](axbraillemaprenderer/accessibilitybraillemaprenderregion.md): A region of the UI that the system converts into a braille map and displays on the braille display.

### Updating the braille map manually

- [accessibilityBrailleMapRenderer](axbraillemaprenderer/accessibilitybraillemaprenderer.md): A handler that the system calls to let you update the Braille map.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Braille maps

- [AXBrailleMap](axbraillemap.md): A representation of a two-dimensional braille display.

# AXBrailleMapRenderer (Objective-C)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The interface for providing data for a braille map.

## Declaration

```objectivec
@protocol AXBrailleMapRenderer <NSObject>
```

<a id="overview"></a>

## Overview

You update the braille display in one of these ways:

- Implement [accessibilityBrailleMapRenderRegion](axbraillemaprenderer/accessibilitybraillemaprenderregion.md) to specify an area of the UI to render to the braille display. With this approach, VoiceOver handles the process of converting the data to a braille map by rendering the image of the screen in that region and updating the braille display automatically.
- Implement [accessibilityBrailleMapRenderer](axbraillemaprenderer/accessibilitybraillemaprenderer.md) to update the braille map manually. With this approach, you get more detailed control over what to display, but you must modify the braille map yourself.

## Topics

### Rendering a specific region

- [accessibilityBrailleMapRenderRegion](axbraillemaprenderer/accessibilitybraillemaprenderregion.md): A region of the UI that the system converts into a braille map and displays on the braille display.

### Updating the braille map manually

- [accessibilityBrailleMapRenderer](axbraillemaprenderer/accessibilitybraillemaprenderer.md): A handler that the system calls to let you update the Braille map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Braille maps

- [AXBrailleMap](axbraillemap.md): A representation of a two-dimensional braille display.
