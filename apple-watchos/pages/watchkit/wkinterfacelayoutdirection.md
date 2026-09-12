> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacelayoutdirection](https://developer.apple.com/documentation/watchkit/wkinterfacelayoutdirection)

# WKInterfaceLayoutDirection (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.1+

Specifies the directional flow of the user interface.

## Declaration

```swift
enum WKInterfaceLayoutDirection
```

## Topics

### Constants

- [WKInterfaceLayoutDirection.leftToRight](wkinterfacelayoutdirection/lefttoright.md): The layout direction is left-to-right.
- [WKInterfaceLayoutDirection.rightToLeft](wkinterfacelayoutdirection/righttoleft.md): The layout direction right-to-left. This value is appropriate when your app is running with localizations such as Arabic or Hebrew that should have the user interface layout origin on the right edge of the coordinate system.

### Initializers

- [init(rawValue:)](wkinterfacelayoutdirection/init%28rawvalue_%29.md)

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
- [WKInterfaceSemanticContentAttribute](wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.

# WKInterfaceLayoutDirection (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.1+

Specifies the directional flow of the user interface.

## Declaration

```objectivec
enum WKInterfaceLayoutDirection : NSInteger;
```

## Topics

### Constants

- [WKInterfaceLayoutDirectionLeftToRight](wkinterfacelayoutdirection/lefttoright.md): The layout direction is left-to-right.
- [WKInterfaceLayoutDirectionRightToLeft](wkinterfacelayoutdirection/righttoleft.md): The layout direction right-to-left. This value is appropriate when your app is running with localizations such as Arabic or Hebrew that should have the user interface layout origin on the right edge of the coordinate system.

## See Also

### Accessing the Layout Direction

- [layoutDirection](wkinterfacedevice/layoutdirection.md): The layout direction of the user interface.
- [interfaceLayoutDirectionForSemanticContentAttribute:](wkinterfacedevice/interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceSemanticContentAttribute](wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
