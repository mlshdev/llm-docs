> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/takestoredvalue(_:forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/takestoredvalue(_:forkey:))

# takeStoredValue(\_:forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the value of the property identified by a given key.

> If you are using the `NSManagedObject` class, use [setPrimitiveValue(\_:forKey:)](../../coredata/nsmanagedobject/setprimitivevalue%28__forkey_%29.md) instead.

## Declaration

```swift
func takeStoredValue(_ value: Any?, forKey key: String)
```

<a id="Discussion"></a>

## Discussion

This method is used to initialize the receiver with values from an object store (generally, this storage is ultimately from a database) or to restore a value from a snapshot. The default implementation is similar to the implementation of [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md), but it resolves `key` with a different method/instance variable search order:

1. Searches for a private accessor method based on `key` (a method preceded by an underbar). For example, with a `key` of “lastName”, [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) looks for a method named `_setLastName:`.
2. If a private accessor is not found, searches for an instance variable based on `key` and sets its `value` directly. For example, with a `key` of “lastName”, [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) looks for an instance variable named `_lastName` or `lastName`.
3. If neither a private accessor nor an instance variable is found, [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) searches for a public accessor method based on `key`. For the `key` “lastName”, this would be `setLastName:`.
4. If `key` is unknown, [takeStoredValue(\_:forKey:)](takestoredvalue%28__forkey_%29.md) calls [handleTakeValue(\_:forUnboundKey:)](handletakevalue%28__forunboundkey_%29.md).

This different search order allows an object to bypass processing that is performed before setting a value through a public API. However, if you always want to use the search order in [takeValue(\_:forKey:)](takevalue%28__forkey_%29.md), you can implement the class method [useStoredAccessor()](usestoredaccessor%28%29.md) to return [NO](../no.md). And as with [value(forKey:)](value%28forkey_%29.md), you can prevent direct access of an instance variable with the class method [accessInstanceVariablesDirectly](accessinstancevariablesdirectly.md).

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
- [accessibilityIsIgnored()](accessibilityisignored%28%29.md): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames()](accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction(\_:)](accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue(\_:forAttribute:)](accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue(\_:forAttribute:)](accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager(\_:shouldProceedAfterError:)](filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.

# takeStoredValue:forKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.4) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Sets the value of the property identified by a given key.

> If you are using the `NSManagedObject` class, use [setPrimitiveValue:forKey:](../../coredata/nsmanagedobject/setprimitivevalue%28__forkey_%29.md) instead.

## Declaration

```objectivec
- (void) takeStoredValue:(id) value forKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

This method is used to initialize the receiver with values from an object store (generally, this storage is ultimately from a database) or to restore a value from a snapshot. The default implementation is similar to the implementation of [takeValue:forKey:](takevalue%28__forkey_%29.md), but it resolves `key` with a different method/instance variable search order:

1. Searches for a private accessor method based on `key` (a method preceded by an underbar). For example, with a `key` of “lastName”, [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) looks for a method named `_setLastName:`.
2. If a private accessor is not found, searches for an instance variable based on `key` and sets its `value` directly. For example, with a `key` of “lastName”, [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) looks for an instance variable named `_lastName` or `lastName`.
3. If neither a private accessor nor an instance variable is found, [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) searches for a public accessor method based on `key`. For the `key` “lastName”, this would be `setLastName:`.
4. If `key` is unknown, [takeStoredValue:forKey:](takestoredvalue%28__forkey_%29.md) calls [handleTakeValue:forUnboundKey:](handletakevalue%28__forunboundkey_%29.md).

This different search order allows an object to bypass processing that is performed before setting a value through a public API. However, if you always want to use the search order in [takeValue:forKey:](takevalue%28__forkey_%29.md), you can implement the class method [useStoredAccessor](usestoredaccessor%28%29.md) to return [NO](../no.md). And as with [valueForKey:](value%28forkey_%29.md), you can prevent direct access of an instance variable with the class method [accessInstanceVariablesDirectly](accessinstancevariablesdirectly.md).

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
- [accessibilityIsIgnored](accessibilityisignored%28%29.md): Deprecated. Returns a Boolean value indicating whether the receiver should be ignored in the parent-child accessibility hierarchy.
- [accessibilityParameterizedAttributeNames](accessibilityparameterizedattributenames%28%29.md): Deprecated. Returns a list of parameterized attribute names supported by the receiver.
- [accessibilityPerformAction:](accessibilityperformaction%28__%29.md): Deprecated. Performs the action associated with the specified action.
- [accessibilitySetOverrideValue:forAttribute:](accessibilitysetoverridevalue%28__forattribute_%29.md): Deprecated. Overrides the specified attribute in the receiver or adds it if it does not exist, and sets its value to the specified value.
- [accessibilitySetValue:forAttribute:](accessibilitysetvalue%28__forattribute_%29.md): Deprecated. Sets the value of the specified attribute in the receiver to the specified value.
- [fileManager:shouldProceedAfterError:](filemanager%28__shouldproceedaftererror_%29.md): Deprecated. An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.
