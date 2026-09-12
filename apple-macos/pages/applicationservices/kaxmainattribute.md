> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxmainattribute](https://developer.apple.com/documentation/applicationservices/kaxmainattribute)

# kAXMainAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXMainAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the window represented by this accessibility object is the main application window. Note that a window can be main even though it does not have keyboard focus. This attribute is recommended for all accessibility objects that represent windows.

# kAXMainAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXMainAttribute
```

<a id="discussion"></a>

## Discussion

Indicates whether the window represented by this accessibility object is the main application window. Note that a window can be main even though it does not have keyboard focus. This attribute is recommended for all accessibility objects that represent windows.
