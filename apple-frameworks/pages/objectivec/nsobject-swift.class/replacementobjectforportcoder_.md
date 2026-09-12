> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/replacementobjectforportcoder:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/replacementobjectforportcoder:)

# replacementObjectForPortCoder:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Overridden by subclasses to substitute another object or a copy for itself during distribution encoding.

## Declaration

```objectivec
- (id) replacementObjectForPortCoder:(NSPortCoder *) coder;
```

## Parameters

- `coder`: The port coder encoding the receiver.

<a id="return-value"></a>

## Return Value

The object encode instead of the receiver (if different).

<a id="Discussion"></a>

## Discussion

This method is invoked by `NSPortCoder`. `NSObject`’s implementation returns an `NSDistantObject` object for the object returned by [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md), enabling all objects to be distributed by proxy as the default. However, if [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md) returns `nil`, `NSObject`’s implementation will also return `nil`.

Subclasses that want to be passed by copy instead of by reference must override this method and return `self`. The following example shows how to support object replacement both by copy and by reference:

```objc
- (id)replacementObjectForPortCoder:(NSPortCoder *)encoder {
    return [encoder isByref] ? [super replacementObjectForPortCoder:encoder] : self;
}
```

## See Also

### Related Documentation

- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.

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
- [accessibilityIsIgnored](accessibilityisignored%28%29.md): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames](accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction:](accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue:forAttribute:](accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue:forAttribute:](accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager:shouldProceedAfterError:](filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
