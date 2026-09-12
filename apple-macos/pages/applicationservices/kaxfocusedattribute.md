> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxfocusedattribute](https://developer.apple.com/documentation/applicationservices/kaxfocusedattribute)

# kAXFocusedAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXFocusedAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the accessibility object currently has the keyboard focus. Note that you can set the value of the `AXFocused` attribute to `true` to accept keyboard focus. This attribute is required for all accessibility objects representing elements that can receive keyboard focus.

# kAXFocusedAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXFocusedAttribute
```

<a id="discussion"></a>

## Discussion

Indicates whether the accessibility object currently has the keyboard focus. Note that you can set the value of the `AXFocused` attribute to `true` to accept keyboard focus. This attribute is required for all accessibility objects representing elements that can receive keyboard focus.
