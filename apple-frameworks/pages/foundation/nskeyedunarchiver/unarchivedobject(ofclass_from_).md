> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivedobject(ofclass:from:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivedobject(ofclass:from:))

# unarchivedObject(ofClass:from:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Decodes a previously-archived object graph, and returns the root object as the specified type.

## Declaration

```swift
@nonobjc static func unarchivedObject<DecodedObjectType>(ofClass cls: DecodedObjectType.Type, from data: Data) throws -> DecodedObjectType? where DecodedObjectType : NSObject, DecodedObjectType : NSCoding
```

## Parameters

- `cls`: The expected class of the root object.
- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

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

- [unarchiveTopLevelObjectWithData(\_:)](unarchivetoplevelobjectwithdata%28__%29.md): Deprecated. Decodes a previously-archived object graph, and returns the root object.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObject(with:)](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
