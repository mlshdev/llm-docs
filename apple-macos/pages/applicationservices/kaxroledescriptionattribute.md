> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxroledescriptionattribute](https://developer.apple.com/documentation/applicationservices/kaxroledescriptionattribute)

# kAXRoleDescriptionAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXRoleDescriptionAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

A localized string describing the role (for example, “button”). This string must be readable by (or speakable to) the user. All accessibility objects must include this attribute. To get the system-defined role description string for a given role, use the `HICopyAccessibilityRoleDescription` function.

# kAXRoleDescriptionAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXRoleDescriptionAttribute
```

<a id="discussion"></a>

## Discussion

A localized string describing the role (for example, “button”). This string must be readable by (or speakable to) the user. All accessibility objects must include this attribute. To get the system-defined role description string for a given role, use the `HICopyAccessibilityRoleDescription` function.
