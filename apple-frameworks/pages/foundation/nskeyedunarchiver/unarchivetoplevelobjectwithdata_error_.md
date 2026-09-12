> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivetoplevelobjectwithdata:error:](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivetoplevelobjectwithdata:error:)

# unarchiveTopLevelObjectWithData:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 5.0)

Decodes a previously-archived object graph, returning the root object.

## Declaration

```objectivec
+ (id) unarchiveTopLevelObjectWithData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).
- `error`: On output, an error encountered during decoding, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

The unarchived object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method produces an error if `data` does not contain valid keyed data.

## See Also

### Unarchiving Data

- [unarchivedObjectOfClass:fromData:error:](unarchivedobjectofclass_fromdata_error_.md): Decodes a previously-archived object graph, that returns the root object as the specified type.
- [unarchivedObjectOfClasses:fromData:error:](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObjectWithData:](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
