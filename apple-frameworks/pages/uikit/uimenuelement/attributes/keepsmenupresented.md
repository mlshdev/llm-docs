> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/attributes/keepsmenupresented](https://developer.apple.com/documentation/uikit/uimenuelement/attributes/keepsmenupresented)

# keepsMenuPresented (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.

## Declaration

```swift
static var keepsMenuPresented: UIMenuElement.Attributes { get }
```

<a id="Discussion"></a>

## Discussion

Use this attribute to allow a person to perform a menu action multiple times without dismissing the menu in between.

This attribute doesn’t have an effect if you build your app with Mac Catalyst.

## See Also

### Attributes

- [destructive](destructive.md): An attribute indicating the destructive style.
- [disabled](disabled.md): An attribute indicating the disabled style.
- [hidden](hidden.md): An attribute indicating the hidden style.

# UIMenuElementAttributesKeepsMenuPresented (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.

## Declaration

```objectivec
UIMenuElementAttributesKeepsMenuPresented
```

<a id="Discussion"></a>

## Discussion

Use this attribute to allow a person to perform a menu action multiple times without dismissing the menu in between.

This attribute doesn’t have an effect if you build your app with Mac Catalyst.

## See Also

### Attributes

- [UIMenuElementAttributesDestructive](destructive.md): An attribute indicating the destructive style.
- [UIMenuElementAttributesDisabled](disabled.md): An attribute indicating the disabled style.
- [UIMenuElementAttributesHidden](hidden.md): An attribute indicating the hidden style.
