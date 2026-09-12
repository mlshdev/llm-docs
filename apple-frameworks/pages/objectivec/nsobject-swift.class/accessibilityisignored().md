> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityisignored()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityisignored())

# accessibilityIsIgnored() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.1+ (deprecated in 10.10)

Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.

> Use [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol) instead.

## Declaration

```swift
func accessibilityIsIgnored() -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver should be ignored; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

When asking for an object’s children, do not include ignored children; instead, replace the ignored children with their own unignored children. The same applies when asking for an object’s parent: skip the ignored parent and treat the first unignored ancestor as the real parent.  Likewise, when a hit-test or focus test is satisfied by an ignored element, use the element’s first unignored ancestor (or descendant in certain cases, such as single-celled controls) instead.

Ignored elements let you provide a simplified version of the view and object ownership hierarchies. Accessibility clients can bypass intermediate objects, letting users access the real user interface objects more quickly. For example, `NSControl` objects are ignored when they are single-celled; the visible parent-child relationship is between the control’s parent (or a higher ancestor if the parent is ignored, too) and the control’s cell.

## See Also

### Deprecated Methods

- [accessibilityAttributeNames()](accessibilityattributenames%28%29.md): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue(\_:)](accessibilityattributevalue%28__%29.md): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue(\_:forParameter:)](accessibilityattributevalue%28__forparameter_%29.md): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityActionDescription(\_:)](accessibilityactiondescription%28__%29.md): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames()](accessibilityactionnames%28%29.md): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount(\_:)](accessibilityarrayattributecount%28__%29.md): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues(\_:index:maxCount:)](accessibilityarrayattributevalues%28__index_maxcount_%29.md): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityIndex(ofChild:)](accessibilityindex%28ofchild_%29.md): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable(\_:)](accessibilityisattributesettable%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityParameterizedAttributeNames()](accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction(\_:)](accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue(\_:forAttribute:)](accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue(\_:forAttribute:)](accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager(\_:shouldProceedAfterError:)](filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager(\_:willProcessPath:)](filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.

# accessibilityIsIgnored (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.1+ (deprecated in 10.10)

Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.

> Use [NSAccessibility](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol) instead.

## Declaration

```objectivec
- (BOOL) accessibilityIsIgnored;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver should be ignored; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

When asking for an object’s children, do not include ignored children; instead, replace the ignored children with their own unignored children. The same applies when asking for an object’s parent: skip the ignored parent and treat the first unignored ancestor as the real parent.  Likewise, when a hit-test or focus test is satisfied by an ignored element, use the element’s first unignored ancestor (or descendant in certain cases, such as single-celled controls) instead.

Ignored elements let you provide a simplified version of the view and object ownership hierarchies. Accessibility clients can bypass intermediate objects, letting users access the real user interface objects more quickly. For example, `NSControl` objects are ignored when they are single-celled; the visible parent-child relationship is between the control’s parent (or a higher ancestor if the parent is ignored, too) and the control’s cell.

## See Also

### Deprecated Methods

- [accessibilityAttributeNames](accessibilityattributenames%28%29.md): Deprecated. Returns an array of attribute names supported by the receiver.
- [accessibilityAttributeValue:](accessibilityattributevalue%28__%29.md): Deprecated. Returns the value of the specified attribute in the receiver.
- [accessibilityAttributeValue:forParameter:](accessibilityattributevalue%28__forparameter_%29.md): Deprecated. Returns the value of the receiver’s parameterized attribute corresponding to the specified attribute name and parameter.
- [accessibilityActionDescription:](accessibilityactiondescription%28__%29.md): Deprecated. Returns a localized description of the specified action.
- [accessibilityActionNames](accessibilityactionnames%28%29.md): Deprecated. Returns an array of action names supported by the accessibility element.
- [accessibilityArrayAttributeCount:](accessibilityarrayattributecount%28__%29.md): Deprecated. Returns the count of the specified accessibility array attribute.
- [accessibilityArrayAttributeValues:index:maxCount:](accessibilityarrayattributevalues%28__index_maxcount_%29.md): Deprecated. Returns a subarray of values of an accessibility array attribute.
- [accessibilityIndexOfChild:](accessibilityindex%28ofchild_%29.md): Deprecated. Returns the index of the specified accessibility child in the parent.
- [accessibilityIsAttributeSettable:](accessibilityisattributesettable%28__%29.md): Deprecated. Returns a Boolean value that indicates whether the value for the specified attribute in the receiver can be set.
- [accessibilityParameterizedAttributeNames](accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction:](accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue:forAttribute:](accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue:forAttribute:](accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager:shouldProceedAfterError:](filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
- [fileManager:willProcessPath:](filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
