> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/layoutdirection](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/layoutdirection)

# layoutDirection (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.1+

The layout direction of the user interface.

## Declaration

```swift
var layoutDirection: WKInterfaceLayoutDirection { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md).

## See Also

### Accessing the Layout Direction

- [interfaceLayoutDirection(for:)](interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

# layoutDirection (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.1+

The layout direction of the user interface.

## Declaration

```objectivec
@property (nonatomic, readonly) WKInterfaceLayoutDirection layoutDirection;
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md).

## See Also

### Accessing the Layout Direction

- [interfaceLayoutDirectionForSemanticContentAttribute:](interfacelayoutdirection%28for_%29.md): Returns the user interface direction for the given semantic content attribute.
- [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.
