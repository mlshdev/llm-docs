> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacesemanticcontentattribute](https://developer.apple.com/documentation/watchkit/wkinterfacesemanticcontentattribute)

# WKInterfaceSemanticContentAttribute (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.1+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```swift
enum WKInterfaceSemanticContentAttribute
```

## Topics

### Constants

- [WKInterfaceSemanticContentAttribute.unspecified](wkinterfacesemanticcontentattribute/unspecified.md): The default value for views. The view is flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttribute.playback](wkinterfacesemanticcontentattribute/playback.md): A view representing the playback controls, such as Play, Rewind, or Fast Forward buttons or playhead scrubbers. These views are not flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttribute.spatial](wkinterfacesemanticcontentattribute/spatial.md): A view representing a directional control, for example a segment control for text alignment, or a D-pad control for a game. These views are not flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttribute.forceLeftToRight](wkinterfacesemanticcontentattribute/forcelefttoright.md): A view that is always displayed using a left-to-right layout.
- [WKInterfaceSemanticContentAttribute.forceRightToLeft](wkinterfacesemanticcontentattribute/forcerighttoleft.md): A view that is always displayed using a left-to-right layout.

### Initializers

- [init(rawValue:)](wkinterfacesemanticcontentattribute/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the Layout Direction

- [layoutDirection](wkinterfacedevice/layoutdirection.md): The layout direction of the user interface.
- [interfaceLayoutDirection(for:)](wkinterfacedevice/interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceLayoutDirection](wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

# WKInterfaceSemanticContentAttribute (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.1+

A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

## Declaration

```objectivec
enum WKInterfaceSemanticContentAttribute : NSInteger;
```

## Topics

### Constants

- [WKInterfaceSemanticContentAttributeUnspecified](wkinterfacesemanticcontentattribute/unspecified.md): The default value for views. The view is flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttributePlayback](wkinterfacesemanticcontentattribute/playback.md): A view representing the playback controls, such as Play, Rewind, or Fast Forward buttons or playhead scrubbers. These views are not flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttributeSpatial](wkinterfacesemanticcontentattribute/spatial.md): A view representing a directional control, for example a segment control for text alignment, or a D-pad control for a game. These views are not flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceSemanticContentAttributeForceLeftToRight](wkinterfacesemanticcontentattribute/forcelefttoright.md): A view that is always displayed using a left-to-right layout.
- [WKInterfaceSemanticContentAttributeForceRightToLeft](wkinterfacesemanticcontentattribute/forcerighttoleft.md): A view that is always displayed using a left-to-right layout.

## See Also

### Accessing the Layout Direction

- [layoutDirection](wkinterfacedevice/layoutdirection.md): The layout direction of the user interface.
- [interfaceLayoutDirectionForSemanticContentAttribute:](wkinterfacedevice/interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceLayoutDirection](wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.
