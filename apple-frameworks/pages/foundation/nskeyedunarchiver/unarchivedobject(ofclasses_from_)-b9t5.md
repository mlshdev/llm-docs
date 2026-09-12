> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivedobject(ofclasses:from:)-b9t5](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivedobject(ofclasses:from:)-b9t5)

# unarchivedObject(ofClasses:from:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Decodes a previously-archived object graph, returning the root object as one of the specified classes.

## Declaration

```swift
class func unarchivedObject(ofClasses classes: Set<AnyHashable>, from data: Data) throws -> Any
```

## Parameters

- `classes`: A set of classes, at least one of which the root object should conform to.
- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

<a id="return-value"></a>

## Return Value

The decoded root of the object graph, as an instance of one of the specified classes, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method produces an error if data does not contain valid keyed data.

> **Important**

>  Make sure you have adopted [NSSecureCoding](../nssecurecoding.md) in the types you decode. If any call to a `decode`-prefixed method fails, the default [decodingFailurePolicy](decodingfailurepolicy.md) sets the error rather than throwing an exception. In this case, the current and all subsequent decode calls return `0` or `nil`.

## See Also

### Unarchiving Data

- [unarchiveTopLevelObjectWithData(\_:)](unarchivetoplevelobjectwithdata%28__%29.md): Deprecated. Decodes a previously-archived object graph, and returns the root object.
- [unarchivedObject(ofClass:from:)](unarchivedobject%28ofclass_from_%29.md): Decodes a previously-archived object graph, and returns the root object as the specified type.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObject(with:)](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.

# unarchivedObjectOfClasses:fromData:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Decodes a previously-archived object graph, returning the root object as one of the specified classes.

## Declaration

```objectivec
+ (id) unarchivedObjectOfClasses:(NSSet<Class> *) classes fromData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `classes`: A set of classes, at least one of which the root object should conform to.
- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).
- `error`: If the return value is nil, an [NSError](../nserror.md) indicating why the unarchive operation failed.

<a id="return-value"></a>

## Return Value

The decoded root of the object graph, as an instance of one of the specified classes, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method produces an error if data does not contain valid keyed data.

> **Important**

>  Make sure you have adopted [NSSecureCoding](../nssecurecoding.md) in the types you decode. If any call to a `decode`-prefixed method fails, the default [decodingFailurePolicy](decodingfailurepolicy.md) sets the error rather than throwing an exception. In this case, the current and all subsequent decode calls return `0` or `nil`.

## See Also

### Unarchiving Data

- [unarchivedObjectOfClass:fromData:error:](unarchivedobjectofclass_fromdata_error_.md): Decodes a previously-archived object graph, that returns the root object as the specified type.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObjectWithData:](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveTopLevelObjectWithData:error:](unarchivetoplevelobjectwithdata_error_.md): Deprecated. Decodes a previously-archived object graph, returning the root object.
- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
