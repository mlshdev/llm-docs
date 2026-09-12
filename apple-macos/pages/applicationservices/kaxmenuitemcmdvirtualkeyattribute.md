> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxmenuitemcmdvirtualkeyattribute](https://developer.apple.com/documentation/applicationservices/kaxmenuitemcmdvirtualkeyattribute)

# kAXMenuItemCmdVirtualKeyAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXMenuItemCmdVirtualKeyAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The key code associated with the physical key in the keyboard shortcut for the command represented by this accessibility object. For example, Return and Enter are different physical keys that can produce the same character. If an assistive application needs to be able to distinguish between them, it can view the virtual key codes.

# kAXMenuItemCmdVirtualKeyAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXMenuItemCmdVirtualKeyAttribute
```

<a id="discussion"></a>

## Discussion

The key code associated with the physical key in the keyboard shortcut for the command represented by this accessibility object. For example, Return and Enter are different physical keys that can produce the same character. If an assistive application needs to be able to distinguish between them, it can view the virtual key codes.
