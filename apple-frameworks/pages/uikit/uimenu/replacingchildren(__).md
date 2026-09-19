> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uimenu/replacingchildren(_:)

# replacingChildren(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new menu with the same configuration as the current menu, but with a new set of child elements.

## Declaration

```swift
func replacingChildren(_ newChildren: [UIMenuElement]) -> UIMenu
```

## Parameters

- `newChildren`: The child elements to include in the new menu.

<a id="return-value"></a>

## Return Value

A new menu object containing the specified children.

<a id="Discussion"></a>

## Discussion

The new menu contains the same title, image, identifier, and options as the current menu. The new menu contains only the children in the `newChildren` parameter. It doesn’t contain any child elements from the current menu.

## See Also

### Accessing child elements

- [children](children.md): The contents of the menu.

# menuByReplacingChildren: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a new menu with the same configuration as the current menu, but with a new set of child elements.

## Declaration

```objectivec
- (UIMenu *) menuByReplacingChildren:(NSArray<UIMenuElement *> *) newChildren;
```

## Parameters

- `newChildren`: The child elements to include in the new menu.

<a id="return-value"></a>

## Return Value

A new menu object containing the specified children.

<a id="Discussion"></a>

## Discussion

The new menu contains the same title, image, identifier, and options as the current menu. The new menu contains only the children in the `newChildren` parameter. It doesn’t contain any child elements from the current menu.

## See Also

### Accessing child elements

- [children](children.md): The contents of the menu.
