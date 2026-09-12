> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/encodeconditionalobject(_:)](https://developer.apple.com/documentation/foundation/nsarchiver/encodeconditionalobject(_:))

# encodeConditionalObject(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Conditionally archives a given object.

> Use NSKeyedArchiver instead

## Declaration

```swift
func encodeConditionalObject(_ object: Any?)
```

## Parameters

- `object`: The object to archive.

<a id="Discussion"></a>

## Discussion

This method overrides the superclass implementation to allow `object` to be encoded only if it is also encoded unconditionally by another object in the object graph. Conditional encoding lets you encode one part of a graph detached from the rest. (See [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) for more information.)

This method should be invoked only from within an [encode(with:)](../nscoding/encode%28with_%29.md) method. If `object` is `nil`, the `NSArchiver` object encodes it unconditionally as `nil`. This method raises an `NSInvalidArgumentException` if no root object has been encoded.

## See Also

### Archiving data

- [archivedData(withRootObject:)](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject(\_:toFile:)](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject(\_:)](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.

# encodeConditionalObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Conditionally archives a given object.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (void) encodeConditionalObject:(id) object;
```

## Parameters

- `object`: The object to archive.

<a id="Discussion"></a>

## Discussion

This method overrides the superclass implementation to allow `object` to be encoded only if it is also encoded unconditionally by another object in the object graph. Conditional encoding lets you encode one part of a graph detached from the rest. (See [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) for more information.)

This method should be invoked only from within an [encodeWithCoder:](../nscoding/encode%28with_%29.md) method. If `object` is `nil`, the `NSArchiver` object encodes it unconditionally as `nil`. This method raises an `NSInvalidArgumentException` if no root object has been encoded.

## See Also

### Archiving data

- [archivedDataWithRootObject:](archiveddata%28withrootobject_%29.md): Deprecated. Returns a data object containing the encoded form of the object graph whose root object is given.
- [archiveRootObject:toFile:](archiverootobject%28__tofile_%29.md): Deprecated. Creates a temporary instance of `NSArchiver` and archives an object graph by encoding it into a data object and writing the resulting data object to a specified file.
- [encodeRootObject:](encoderootobject%28__%29.md): Deprecated. Archives a given object along with all the objects to which it is connected.
