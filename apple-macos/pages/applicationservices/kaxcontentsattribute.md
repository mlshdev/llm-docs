> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxcontentsattribute](https://developer.apple.com/documentation/applicationservices/kaxcontentsattribute)

# kAXContentsAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXContentsAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

Content-containing accessibility objects that are children of this accessibility object. For example, a tab view contains children that represent both the tab controls and the content displayed for each tab. The accessibility object representing a tab view can include only the content-display children in its `AXContents` attribute to help an assistive application provide more targeted information to the user. This attribute is recommended for any accessibility object whose children represent both content and control elements.

# kAXContentsAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXContentsAttribute
```

<a id="discussion"></a>

## Discussion

Content-containing accessibility objects that are children of this accessibility object. For example, a tab view contains children that represent both the tab controls and the content displayed for each tab. The accessibility object representing a tab view can include only the content-display children in its `AXContents` attribute to help an assistive application provide more targeted information to the user. This attribute is recommended for any accessibility object whose children represent both content and control elements.
