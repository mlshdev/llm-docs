> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/kaxvisiblechildrenattribute](https://developer.apple.com/documentation/applicationservices/kaxvisiblechildrenattribute)

# kAXVisibleChildrenAttribute (Swift)

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.2+

## Declaration

```swift
var kAXVisibleChildrenAttribute: String { get }
```

<a id="discussion"></a>

## Discussion

An array of first-order accessibility objects contained by this accessibility object that are visible to a sighted user. For example, a list view’s `AXVisibleChildren` array would contain the list’s subelements that are currently scrolled into view. The members of the `AXVisibleChildren` array are a subset of the members of this accessibility object’s `AXChildren` array. This attribute is recommended for accessibility objects whose child objects can be scrolled out of view or otherwise obscured.

# kAXVisibleChildrenAttribute (Objective-C)

**Framework:** Application Services  
**Kind:** Macro  
**Availability:** macOS 10.2+

## Declaration

```objectivec
#define kAXVisibleChildrenAttribute
```

<a id="discussion"></a>

## Discussion

An array of first-order accessibility objects contained by this accessibility object that are visible to a sighted user. For example, a list view’s `AXVisibleChildren` array would contain the list’s subelements that are currently scrolled into view. The members of the `AXVisibleChildren` array are a subset of the members of this accessibility object’s `AXChildren` array. This attribute is recommended for accessibility objects whose child objects can be scrolled out of view or otherwise obscured.
