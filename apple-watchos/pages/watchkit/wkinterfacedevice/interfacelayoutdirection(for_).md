> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacedevice/interfacelayoutdirection(for:)](https://developer.apple.com/documentation/watchkit/wkinterfacedevice/interfacelayoutdirection(for:))

# interfaceLayoutDirection(for:) (Swift)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.1+

Returns the user interface direction for the given semantic content attribute.

## Declaration

```swift
class func interfaceLayoutDirection(for semanticContentAttribute: WKInterfaceSemanticContentAttribute) -> WKInterfaceLayoutDirection
```

## Parameters

- `semanticContentAttribute`: The semantic content attribute. For a list of possible values, see [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md).

<a id="return-value"></a>

## Return Value

The user interface layout direction (left-to-right or right-to-left). For a list of possible values, see [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md).

## See Also

### Accessing the Layout Direction

- [layoutDirection](layoutdirection.md): The layout direction of the user interface.
- [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.

# interfaceLayoutDirectionForSemanticContentAttribute: (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Method  
**Availability:** watchOS 2.1+

Returns the user interface direction for the given semantic content attribute.

## Declaration

```objectivec
+ (WKInterfaceLayoutDirection) interfaceLayoutDirectionForSemanticContentAttribute:(WKInterfaceSemanticContentAttribute) semanticContentAttribute;
```

## Parameters

- `semanticContentAttribute`: The semantic content attribute. For a list of possible values, see [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md).

<a id="return-value"></a>

## Return Value

The user interface layout direction (left-to-right or right-to-left). For a list of possible values, see [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md).

## See Also

### Accessing the Layout Direction

- [layoutDirection](layoutdirection.md): The layout direction of the user interface.
- [WKInterfaceSemanticContentAttribute](../wkinterfacesemanticcontentattribute.md): A semantic description of the view’s contents, used to determine whether the view should be flipped when switching between left-to-right and right-to-left layouts.
- [WKInterfaceLayoutDirection](../wkinterfacelayoutdirection.md): Specifies the directional flow of the user interface.
