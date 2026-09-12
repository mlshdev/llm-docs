> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462060-axuielementcopyattributevalues](https://developer.apple.com/documentation/applicationservices/1462060-axuielementcopyattributevalues)

# AXUIElementCopyAttributeValues(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns an array of attribute values for the accessibility object's attribute, starting at the specified index.

## Declaration

```swift
func AXUIElementCopyAttributeValues(_ element: AXUIElement, _ attribute: CFString, _ index: CFIndex, _ maxValues: CFIndex, _ values: UnsafeMutablePointer<CFArray?>) -> AXError
```

## Parameters

- `element`: The AXUIElementRef representing the accessibility object.
- `attribute`: The attribute name.
- `index`: The index into the array.
- `maxValues`: The maximum number of values you want (this may be more or less than the number of values associated with the attribute).
- `values`: On return, the attribute values you requested. If `maxValues` is greater than the number of values associated with the attribute, the `values` array will contain values found between `index` and the end of the attribute's array, inclusive.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXUIElementCopyAttributeValues` may return one of the following error codes, among others:

- **`kAXErrorIllegalArgument`**: The attribute's value is not array, the `index` or `maxValues` arguments are outside the array's range, or one of the other arguments is an illegal value.
- **`kAXErrorNoValue`**: The specified attribute does not have a value.
- **`kAXErrorInvalidUIElement`**: The AXUIElementRef is invalid.
- **`kAXErrorCannotComplete`**: The function cannot complete because messaging has failed in some way.
- **`kAXErrorNotImplemented`**: The process does not fully support the accessibility API.

<a id="discussion"></a>

## Discussion

This function is useful for dealing with large arrays, for example, a table view with a large number of children.

## See Also

### Miscellaneous

- [AXIsProcessTrusted()](1460720-axisprocesstrusted.md): Returns whether the current process is a trusted accessibility client.
- [AXIsProcessTrustedWithOptions(\_:)](1459186-axisprocesstrustedwithoptions.md): Returns whether the current process is a trusted accessibility client.
- [AXUIElementCopyActionDescription(\_:\_:\_:)](1462075-axuielementcopyactiondescription.md): Returns a localized description of the specified accessibility object's action.
- [AXUIElementCopyActionNames(\_:\_:)](1462053-axuielementcopyactionnames.md): Returns a list of all the actions the specified accessibility object can perform.
- [AXUIElementCopyAttributeNames(\_:\_:)](1459475-axuielementcopyattributenames.md): Returns a list of all the attributes supported by the specified accessibility object.
- [AXUIElementCopyAttributeValue(\_:\_:\_:)](1462085-axuielementcopyattributevalue.md): Returns the value of an accessibility object's attribute.
- [AXUIElementCopyElementAtPosition(\_:\_:\_:\_:)](1462077-axuielementcopyelementatposition.md): Returns the accessibility object at the specified position in top-left relative screen coordinates.
- [AXUIElementCopyMultipleAttributeValues(\_:\_:\_:\_:)](1462051-axuielementcopymultipleattribute.md): Returns the values of multiple attributes in the accessibility object.
- [AXUIElementCopyParameterizedAttributeNames(\_:\_:)](1458783-axuielementcopyparameterizedattr.md): Returns a list of all the parameterized attributes supported by the specified accessibility object.
- [AXUIElementCopyParameterizedAttributeValue(\_:\_:\_:\_:)](1461203-axuielementcopyparameterizedattr.md): Returns the value of an accessibility object's parameterized attribute.
- [AXUIElementCreateApplication(\_:)](1459374-axuielementcreateapplication.md): Creates and returns the top-level accessibility object for the application with the specified process ID.
- [AXUIElementCreateSystemWide()](1462095-axuielementcreatesystemwide.md): Returns an accessibility object that provides access to system attributes.
- [AXUIElementGetAttributeValueCount(\_:\_:\_:)](1459066-axuielementgetattributevaluecoun.md): Returns the count of the array of an accessibility object's attribute value.
- [AXUIElementGetPid(\_:\_:)](1460337-axuielementgetpid.md): Returns the process ID associated with the specified accessibility object.
- [AXUIElementGetTypeID()](1460085-axuielementgettypeid.md): Returns the unique type identifier for the AXUIElementRef type.
- [AXUIElementIsAttributeSettable(\_:\_:\_:)](1459972-axuielementisattributesettable.md): Returns whether the specified accessibility object's attribute can be modified.
- [AXUIElementPerformAction(\_:\_:)](1462091-axuielementperformaction.md): Requests that the specified accessibility object perform the specified action.
- [AXUIElementSetAttributeValue(\_:\_:\_:)](1460434-axuielementsetattributevalue.md): Sets the accessibility object's attribute to the specified value.
- [AXUIElementSetMessagingTimeout(\_:\_:)](1459345-axuielementsetmessagingtimeout.md): Sets the timeout value used in the accessibility API.

# AXUIElementCopyAttributeValues (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns an array of attribute values for the accessibility object's attribute, starting at the specified index.

## Declaration

```objectivec
AXError AXUIElementCopyAttributeValues(AXUIElementRef element, CFStringRef attribute, CFIndex index, CFIndex maxValues, CFArrayRef  _Nullable *values);
```

## Parameters

- `element`: The AXUIElementRef representing the accessibility object.
- `attribute`: The attribute name.
- `index`: The index into the array.
- `maxValues`: The maximum number of values you want (this may be more or less than the number of values associated with the attribute).
- `values`: On return, the attribute values you requested. If `maxValues` is greater than the number of values associated with the attribute, the `values` array will contain values found between `index` and the end of the attribute's array, inclusive.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXUIElementCopyAttributeValues` may return one of the following error codes, among others:

- **`kAXErrorIllegalArgument`**: The attribute's value is not array, the `index` or `maxValues` arguments are outside the array's range, or one of the other arguments is an illegal value.
- **`kAXErrorNoValue`**: The specified attribute does not have a value.
- **`kAXErrorInvalidUIElement`**: The AXUIElementRef is invalid.
- **`kAXErrorCannotComplete`**: The function cannot complete because messaging has failed in some way.
- **`kAXErrorNotImplemented`**: The process does not fully support the accessibility API.

<a id="discussion"></a>

## Discussion

This function is useful for dealing with large arrays, for example, a table view with a large number of children.

## See Also

### Miscellaneous

- [AXAPIEnabled](1462072-axapienabled.md): Deprecated. Returns whether the accessibility API is enabled.
- [AXIsProcessTrusted](1460720-axisprocesstrusted.md): Returns whether the current process is a trusted accessibility client.
- [AXIsProcessTrustedWithOptions](1459186-axisprocesstrustedwithoptions.md): Returns whether the current process is a trusted accessibility client.
- [AXMakeProcessTrusted](1462083-axmakeprocesstrusted.md): Deprecated. Attempts to make the process represented by the specified path a trusted accessibility client.
- [AXUIElementCopyActionDescription](1462075-axuielementcopyactiondescription.md): Returns a localized description of the specified accessibility object's action.
- [AXUIElementCopyActionNames](1462053-axuielementcopyactionnames.md): Returns a list of all the actions the specified accessibility object can perform.
- [AXUIElementCopyAttributeNames](1459475-axuielementcopyattributenames.md): Returns a list of all the attributes supported by the specified accessibility object.
- [AXUIElementCopyAttributeValue](1462085-axuielementcopyattributevalue.md): Returns the value of an accessibility object's attribute.
- [AXUIElementCopyElementAtPosition](1462077-axuielementcopyelementatposition.md): Returns the accessibility object at the specified position in top-left relative screen coordinates.
- [AXUIElementCopyMultipleAttributeValues](1462051-axuielementcopymultipleattribute.md): Returns the values of multiple attributes in the accessibility object.
- [AXUIElementCopyParameterizedAttributeNames](1458783-axuielementcopyparameterizedattr.md): Returns a list of all the parameterized attributes supported by the specified accessibility object.
- [AXUIElementCopyParameterizedAttributeValue](1461203-axuielementcopyparameterizedattr.md): Returns the value of an accessibility object's parameterized attribute.
- [AXUIElementCreateApplication](1459374-axuielementcreateapplication.md): Creates and returns the top-level accessibility object for the application with the specified process ID.
- [AXUIElementCreateSystemWide](1462095-axuielementcreatesystemwide.md): Returns an accessibility object that provides access to system attributes.
- [AXUIElementGetAttributeValueCount](1459066-axuielementgetattributevaluecoun.md): Returns the count of the array of an accessibility object's attribute value.
- [AXUIElementGetPid](1460337-axuielementgetpid.md): Returns the process ID associated with the specified accessibility object.
- [AXUIElementGetTypeID](1460085-axuielementgettypeid.md): Returns the unique type identifier for the AXUIElementRef type.
- [AXUIElementIsAttributeSettable](1459972-axuielementisattributesettable.md): Returns whether the specified accessibility object's attribute can be modified.
- [AXUIElementPerformAction](1462091-axuielementperformaction.md): Requests that the specified accessibility object perform the specified action.
- [AXUIElementPostKeyboardEvent](1462057-axuielementpostkeyboardevent.md): Deprecated. Posts keys to the specified application.
- [AXUIElementSetAttributeValue](1460434-axuielementsetattributevalue.md): Sets the accessibility object's attribute to the specified value.
- [AXUIElementSetMessagingTimeout](1459345-axuielementsetmessagingtimeout.md): Sets the timeout value used in the accessibility API.
