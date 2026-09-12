> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/children](https://developer.apple.com/documentation/uikit/uimenu/children)

# children (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The contents of the menu.

## Declaration

```swift
var children: [UIMenuElement] { get }
```

<a id="Discussion"></a>

## Discussion

If the menu doesn’t have any child menu elements, this property contains an empty array.

## See Also

### Accessing child elements

- [replacingChildren(\_:)](replacingchildren%28__%29.md): Creates a new menu with the same configuration as the current menu, but with a new set of child elements.

# children (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The contents of the menu.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<UIMenuElement *> * children;
```

<a id="Discussion"></a>

## Discussion

If the menu doesn’t have any child menu elements, this property contains an empty array.

## See Also

### Accessing child elements

- [menuByReplacingChildren:](replacingchildren%28__%29.md): Creates a new menu with the same configuration as the current menu, but with a new set of child elements.
