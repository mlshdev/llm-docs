> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxselectedchildrenattribute](https://developer.apple.com/documentation/applicationservices/kaxselectedchildrenattribute)

# kAXSelectedChildrenAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXSelectedChildrenAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of selected first-order accessibility objects contained by this accessibility object. For example, the selected subelements of a list view are contained in the `AXSelectedChildren` array of the list view’s accessibility object. The members of the `AXSelectedChildren` array are a subset of the members of this accessibility object’s `AXChildren` array. This attribute is required for accessibility objects that contain selectable child objects.

# kAXSelectedChildrenAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXSelectedChildrenAttribute
```

<a id="discussion"></a>

## Discussion

An array of selected first-order accessibility objects contained by this accessibility object. For example, the selected subelements of a list view are contained in the `AXSelectedChildren` array of the list view’s accessibility object. The members of the `AXSelectedChildren` array are a subset of the members of this accessibility object’s `AXChildren` array. This attribute is required for accessibility objects that contain selectable child objects.
