> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/filemanager(_:shouldproceedaftererror:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/filemanager(_:shouldproceedaftererror:))

# fileManager(\_:shouldProceedAfterError:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.

> See delegate methods for copy, move, remove, and link methods.

## Declaration

```swift
func fileManager(_ fm: FileManager, shouldProceedAfterError errorInfo: [AnyHashable : Any]) -> Bool
```

## Parameters

- `fm`: The file manager that sent this message.
- `errorInfo`: A dictionary that contains two or three pieces of information (all [NSString](../../foundation/nsstring.md) objects) related to the error:

  | Key | Value |
  | --- | --- |
  | `@"Path"` | The path related to the error (usually the source path) |
  | `@"Error"` | A description of the error |
  | `@"ToPath"` | The destination path (not all errors) |

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the operation (which is often continuous within a loop) should proceed, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

An `NSFileManager` object, `manager`, sends this message for each error it encounters when copying, moving, removing, or linking files or directories. The return value is passed back to the invoker of [copyPath:toPath:handler:](../../foundation/nsfilemanager/copypath_topath_handler_.md), [movePath:toPath:handler:](../../foundation/nsfilemanager/movepath_topath_handler_.md), [removeFileAtPath:handler:](../../foundation/nsfilemanager/removefileatpath_handler_.md), or [linkPath:toPath:handler:](../../foundation/nsfilemanager/linkpath_topath_handler_.md). If an error occurs and your handler has not implemented this method, the invoking method automatically returns [NO](../no.md).

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
- [fileManager(\_:willProcessPath:)](filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.

# fileManager:shouldProceedAfterError: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An `NSFileManager` object sends this message to its handler for each error it encounters when copying, moving, removing, or linking files or directories.

> See delegate methods for copy, move, remove, and link methods.

## Declaration

```objectivec
- (BOOL) fileManager:(NSFileManager *) fm shouldProceedAfterError:(NSDictionary *) errorInfo;
```

## Parameters

- `fm`: The file manager that sent this message.
- `errorInfo`: A dictionary that contains two or three pieces of information (all [NSString](../../foundation/nsstring.md) objects) related to the error:

  | Key | Value |
  | --- | --- |
  | `@"Path"` | The path related to the error (usually the source path) |
  | `@"Error"` | A description of the error |
  | `@"ToPath"` | The destination path (not all errors) |

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the operation (which is often continuous within a loop) should proceed, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

An `NSFileManager` object, `manager`, sends this message for each error it encounters when copying, moving, removing, or linking files or directories. The return value is passed back to the invoker of [copyPath:toPath:handler:](../../foundation/nsfilemanager/copypath_topath_handler_.md), [movePath:toPath:handler:](../../foundation/nsfilemanager/movepath_topath_handler_.md), [removeFileAtPath:handler:](../../foundation/nsfilemanager/removefileatpath_handler_.md), or [linkPath:toPath:handler:](../../foundation/nsfilemanager/linkpath_topath_handler_.md). If an error occurs and your handler has not implemented this method, the invoking method automatically returns [NO](../no.md).

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
- [fileManager:willProcessPath:](filemanager%28__willprocesspath_%29.md): Deprecated. An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.
