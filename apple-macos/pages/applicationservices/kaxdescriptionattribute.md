> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxdescriptionattribute](https://developer.apple.com/documentation/applicationservices/kaxdescriptionattribute)

# kAXDescriptionAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXDescriptionAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

The purpose of this accessibility object. The description string must be localizable and human-intelligible and it must be all lower case and include no punctuation. The string should briefly describe this accessibility object’s purpose, without including the object’s role description. This attribute is required for all accessibility objects that do not provide enough descriptive information in the title attribute.

# kAXDescriptionAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXDescriptionAttribute
```

<a id="discussion"></a>

## Discussion

The purpose of this accessibility object. The description string must be localizable and human-intelligible and it must be all lower case and include no punctuation. The string should briefly describe this accessibility object’s purpose, without including the object’s role description. This attribute is required for all accessibility objects that do not provide enough descriptive information in the title attribute.
