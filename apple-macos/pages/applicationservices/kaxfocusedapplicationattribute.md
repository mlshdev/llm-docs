> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxfocusedapplicationattribute](https://developer.apple.com/documentation/applicationservices/kaxfocusedapplicationattribute)

# kAXFocusedApplicationAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXFocusedApplicationAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Indicates the application element that is currently accepting keyboard input. This attribute is supported by the system-wide accessibility object to help an assistive application quickly determine the application that is accepting keyboard input. After the assistive application gets the accessibility object representing this application, it can send a message to the application asking for its focused accessibility object.

# kAXFocusedApplicationAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXFocusedApplicationAttribute
```

<a id="discussion"></a>

## Discussion

Indicates the application element that is currently accepting keyboard input. This attribute is supported by the system-wide accessibility object to help an assistive application quickly determine the application that is accepting keyboard input. After the assistive application gets the accessibility object representing this application, it can send a message to the application asking for its focused accessibility object.
