> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/filemanager(_:willprocesspath:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/filemanager(_:willprocesspath:))

# fileManager(\_:willProcessPath:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 2.0+ (deprecated in 2.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.

> See delegate methods for copy, move, link, and remove methods.

## Declaration

```swift
func fileManager(_ fm: FileManager, willProcessPath path: String)
```

## Parameters

- `fm`: The `NSFileManager` object that sent this message.
- `path`: The path or a file or directory that `manager` is about to attempt to move, copy, rename, delete, or link to.

<a id="Discussion"></a>

## Discussion

You can implement this method in your handler to monitor file operations.

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

# fileManager:willProcessPath: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 2.0) · iPadOS 2.0+ (deprecated in 2.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.5) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

An `NSFileManager` object sends this message to a handler immediately before attempting to move, copy, rename, or delete, or before attempting to link to a given path.

> See delegate methods for copy, move, link, and remove methods.

## Declaration

```objectivec
- (void) fileManager:(NSFileManager *) fm willProcessPath:(NSString *) path;
```

## Parameters

- `fm`: The `NSFileManager` object that sent this message.
- `path`: The path or a file or directory that `manager` is about to attempt to move, copy, rename, delete, or link to.

<a id="Discussion"></a>

## Discussion

You can implement this method in your handler to monitor file operations.

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
