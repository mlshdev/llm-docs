> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxenabledattribute](https://developer.apple.com/documentation/applicationservices/kaxenabledattribute)

# kAXEnabledAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXEnabledAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the user can interact with the accessibility object. For example, the `AXEnabled` attribute of a disabled button is `false`. This attribute is required for accessibility objects that represent views, menus, and menu items. This attribute is not required for accessibility objects that represent windows.

# kAXEnabledAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXEnabledAttribute
```

<a id="discussion"></a>

## Discussion

Indicates whether the user can interact with the accessibility object. For example, the `AXEnabled` attribute of a disabled button is `false`. This attribute is required for accessibility objects that represent views, menus, and menu items. This attribute is not required for accessibility objects that represent windows.
