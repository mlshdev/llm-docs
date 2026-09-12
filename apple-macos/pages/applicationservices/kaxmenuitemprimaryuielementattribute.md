> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxmenuitemprimaryuielementattribute](https://developer.apple.com/documentation/applicationservices/kaxmenuitemprimaryuielementattribute)

# kAXMenuItemPrimaryUIElementAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXMenuItemPrimaryUIElementAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The accessibility object representing the primary menu item in a group of dynamic menu items. Dynamic menu item are commands that change when the user presses a modifier key, such as Minimize Window and Minimize All Windows. Within each group, each dynamic menu item’s accessibility object includes this attribute and in each case the attribute’s value is the accessibility object representing the primary menu item.

# kAXMenuItemPrimaryUIElementAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXMenuItemPrimaryUIElementAttribute
```

<a id="discussion"></a>

## Discussion

The accessibility object representing the primary menu item in a group of dynamic menu items. Dynamic menu item are commands that change when the user presses a modifier key, such as Minimize Window and Minimize All Windows. Within each group, each dynamic menu item’s accessibility object includes this attribute and in each case the attribute’s value is the accessibility object representing the primary menu item.
