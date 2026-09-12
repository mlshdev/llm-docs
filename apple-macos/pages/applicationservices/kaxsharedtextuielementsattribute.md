> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxsharedtextuielementsattribute](https://developer.apple.com/documentation/applicationservices/kaxsharedtextuielementsattribute)

# kAXSharedTextUIElementsAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

## Declaration

```swift
var kAXSharedTextUIElementsAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects with which the text of this accessibility object is shared. In a multi-column document, for example, each column may be represented by a separate accessibility object. However, the text in the document may flow from one column to the other. You get the value of this attribute if you need to know with which accessibility object this accessibility object shares its text. This attribute is recommended for sets of accessibility objects that share text in a single window. (See `kAXSharedCharacterRange` for a related attribute.)

# kAXSharedTextUIElementsAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.4+

## Declaration

```objectivec
#define kAXSharedTextUIElementsAttribute
```

<a id="discussion"></a>

## Discussion

An array of accessibility objects with which the text of this accessibility object is shared. In a multi-column document, for example, each column may be represented by a separate accessibility object. However, the text in the document may flow from one column to the other. You get the value of this attribute if you need to know with which accessibility object this accessibility object shares its text. This attribute is recommended for sets of accessibility objects that share text in a single window. (See `kAXSharedCharacterRange` for a related attribute.)
