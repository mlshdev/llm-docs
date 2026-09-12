> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingornament](https://developer.apple.com/documentation/swiftui/uihostingornament)

# UIHostingOrnament

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** visionOS 1.0+

A model that represents an ornament suitable for being hosted in UIKit.

## Declaration

```swift
class UIHostingOrnament<Content> where Content : View
```

<a id="overview"></a>

## Overview

Use a `UIHostingOrnament` when you want to add ornaments to a UIKit view controller. For example, the following adds a single bottom ornament to the current view controller:

```swift
self.ornaments = [
    UIHostingOrnament(sceneAnchor: .bottom) {
        OrnamentContent()
    }
]
```

## Topics

### Creating a hosting ornament

- [init(sceneAnchor:contentAlignment:content:)](uihostingornament/init%28sceneanchor_contentalignment_content_%29.md): Creates an ornament with the specified alignment and content.
- [rootView](uihostingornament/rootview.md): The root view of the SwiftUI view hierarchy managed by this ornament.

### Setting the alignment

- [contentAlignment](uihostingornament/contentalignment.md): The alignment in the ornament used to position it.
- [sceneAnchor](uihostingornament/sceneanchor.md): The anchor point for aligning the ornament’s content (based on the `contentAlignment`) with the scene.

### Instance Properties

- [contentAlignment3D](uihostingornament/contentalignment3d.md)

## Relationships

### Inherits From

- [UIOrnament](uiornament.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hosting an ornament in UIKit

- [UIOrnament](uiornament.md): The abstract base class that represents an ornament.
