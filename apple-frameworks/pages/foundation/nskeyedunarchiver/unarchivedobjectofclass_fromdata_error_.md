> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivedobjectofclass:fromdata:error:](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivedobjectofclass:fromdata:error:)

# unarchivedObjectOfClass:fromData:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Decodes a previously-archived object graph, that returns the root object as the specified type.

## Declaration

```objectivec
+ (id) unarchivedObjectOfClass:(Class) cls fromData:(NSData *) data error:(NSError **) error;
```

## Parameters

- `cls`: The expected class of the root object.
- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).
- `error`: If the return value is `nil`, an [NSError](../nserror.md) indicating why the unarchive operation failed.

<a id="return-value"></a>

## Return Value

The decoded root of the object graph, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method produces an error if `data` does not contain valid keyed data.

> **Important**

>  Make sure you have adopted [NSSecureCoding](../nssecurecoding.md) in the types you decode. If any call to a `decode`-prefixed method fails, the default [decodingFailurePolicy](decodingfailurepolicy.md) sets the error rather than throwing an exception. In this case, the current and all subsequent decode calls return `0` or `nil`.

## See Also

### Unarchiving Data

- [unarchivedObjectOfClasses:fromData:error:](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObjectWithData:](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveTopLevelObjectWithData:error:](unarchivetoplevelobjectwithdata_error_.md): Deprecated. Decodes a previously-archived object graph, returning the root object.
- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
