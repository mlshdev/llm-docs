> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/unarchivetoplevelobjectwithdata(_:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/unarchivetoplevelobjectwithdata(_:))

# unarchiveTopLevelObjectWithData(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 12.0) · iPadOS 9.0+ (deprecated in 12.0) · Mac Catalyst 9.0+ (deprecated in 12.0) · macOS 10.11+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 5.0) · Swift 4.0+

Decodes a previously-archived object graph, and returns the root object.

## Declaration

```swift
@nonobjc class func unarchiveTopLevelObjectWithData(_ data: Data) throws -> Any?
```

## Parameters

- `data`: An object graph previously encoded by [NSKeyedArchiver](../nskeyedarchiver.md).

<a id="return-value"></a>

## Return Value

The unarchived object, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This method throws an error if `data` does not contain valid keyed data.

## See Also

### Unarchiving Data

- [unarchivedObject(ofClass:from:)](unarchivedobject%28ofclass_from_%29.md): Decodes a previously-archived object graph, and returns the root object as the specified type.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [requiresSecureCoding](requiressecurecoding.md): Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).
- [unarchiveObject(with:)](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
