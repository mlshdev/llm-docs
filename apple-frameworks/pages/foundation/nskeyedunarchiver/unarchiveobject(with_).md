> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchiveobject(with:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchiveobject(with:))

# unarchiveObject(with:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.

> Use +unarchivedObjectOfClass:fromData:error: instead

## Declaration

```swift
class func unarchiveObject(with data: Data) -> Any?
```

## Parameters

- `data`: An object graph previously encoded by `NSKeyedArchiver`.

<a id="return-value"></a>

## Return Value

The object graph previously encoded by `NSKeyedArchiver` and stored in `data`.

<a id="Discussion"></a>

## Discussion

This method raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `data` is not a valid archive.

## See Also

### Unarchiving Data

- [unarchiveTopLevelObjectWithData(\_:)](unarchivetoplevelobjectwithdata%28__%29.md): Deprecated. Decodes a previously-archived object graph, and returns the root object.
- [unarchivedObject(ofClass:from:)](unarchivedobject%28ofclass_from_%29.md): Decodes a previously-archived object graph, and returns the root object as the specified type.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.

# unarchiveObjectWithData: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.

> Use +unarchivedObjectOfClass:fromData:error: instead

## Declaration

```objectivec
+ (id) unarchiveObjectWithData:(NSData *) data;
```

## Parameters

- `data`: An object graph previously encoded by `NSKeyedArchiver`.

<a id="return-value"></a>

## Return Value

The object graph previously encoded by `NSKeyedArchiver` and stored in `data`.

<a id="Discussion"></a>

## Discussion

This method raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if `data` is not a valid archive.

## See Also

### Unarchiving Data

- [unarchivedObjectOfClass:fromData:error:](unarchivedobjectofclass_fromdata_error_.md): Decodes a previously-archived object graph, that returns the root object as the specified type.
- [unarchivedObjectOfClasses:fromData:error:](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveTopLevelObjectWithData:error:](unarchivetoplevelobjectwithdata_error_.md): Deprecated. Decodes a previously-archived object graph, returning the root object.
- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
