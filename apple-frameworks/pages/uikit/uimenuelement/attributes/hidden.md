> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/attributes/hidden](https://developer.apple.com/documentation/uikit/uimenuelement/attributes/hidden)

# hidden (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An attribute indicating the hidden style.

## Declaration

```swift
static var hidden: UIMenuElement.Attributes { get }
```

<a id="Discussion"></a>

## Discussion

When you use this attribute, the menu system doesn’t display the menu element. However, if the menu element is a [UIKeyCommand](../../uikeycommand.md) object, the user can still select it using the keyboard shortcut specified by the key command object.

## See Also

### Attributes

- [destructive](destructive.md): An attribute indicating the destructive style.
- [disabled](disabled.md): An attribute indicating the disabled style.
- [keepsMenuPresented](keepsmenupresented.md): An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.

# UIMenuElementAttributesHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An attribute indicating the hidden style.

## Declaration

```objectivec
UIMenuElementAttributesHidden
```

<a id="Discussion"></a>

## Discussion

When you use this attribute, the menu system doesn’t display the menu element. However, if the menu element is a [UIKeyCommand](../../uikeycommand.md) object, the user can still select it using the keyboard shortcut specified by the key command object.

## See Also

### Attributes

- [UIMenuElementAttributesDestructive](destructive.md): An attribute indicating the destructive style.
- [UIMenuElementAttributesDisabled](disabled.md): An attribute indicating the disabled style.
- [UIMenuElementAttributesKeepsMenuPresented](keepsmenupresented.md): An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.
