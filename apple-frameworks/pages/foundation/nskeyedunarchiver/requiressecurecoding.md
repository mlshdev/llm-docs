> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/requiressecurecoding](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/requiressecurecoding)

# requiresSecureCoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).

## Declaration

```swift
var requiresSecureCoding: Bool { get set }
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver requires [NSSecureCoding](../nssecurecoding.md); [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

If you set the receiver to require secure coding, it will throw an exception if you attempt to unarchive a class which does not conform to [NSSecureCoding](../nssecurecoding.md).

The secure coding requirement for [NSKeyedUnarchiver](../nskeyedunarchiver.md) is designed to be set once at the top level and remain on. Once enabled, attempting to call `setRequiresSecureCoding:` with a value of [false](https://developer.apple.com/documentation/swift/false) will throw an exception. This is to prevent classes from selectively turning secure coding off.

Note that the getter is on the superclass, [NSCoder](../nscoder.md). See [NSCoder](../nscoder.md) for more information about secure coding.

## See Also

### Unarchiving Data

- [unarchiveTopLevelObjectWithData(\_:)](unarchivetoplevelobjectwithdata%28__%29.md): Deprecated. Decodes a previously-archived object graph, and returns the root object.
- [unarchivedObject(ofClass:from:)](unarchivedobject%28ofclass_from_%29.md): Decodes a previously-archived object graph, and returns the root object as the specified type.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchivedObject(ofClasses:from:)](unarchivedobject%28ofclasses_from_%29-3h32t.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchiveObject(with:)](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveObject(withFile:)](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.

# requiresSecureCoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the receiver requires all unarchived classes to conform to [NSSecureCoding](../nssecurecoding.md).

## Declaration

```objectivec
@property (readwrite) BOOL requiresSecureCoding;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver requires [NSSecureCoding](../nssecurecoding.md); [false](https://developer.apple.com/documentation/swift/false) if not.

<a id="Discussion"></a>

## Discussion

If you set the receiver to require secure coding, it will throw an exception if you attempt to unarchive a class which does not conform to [NSSecureCoding](../nssecurecoding.md).

The secure coding requirement for [NSKeyedUnarchiver](../nskeyedunarchiver.md) is designed to be set once at the top level and remain on. Once enabled, attempting to call `setRequiresSecureCoding:` with a value of [false](https://developer.apple.com/documentation/swift/false) will throw an exception. This is to prevent classes from selectively turning secure coding off.

Note that the getter is on the superclass, [NSCoder](../nscoder.md). See [NSCoder](../nscoder.md) for more information about secure coding.

## See Also

### Unarchiving Data

- [unarchivedObjectOfClass:fromData:error:](unarchivedobjectofclass_fromdata_error_.md): Decodes a previously-archived object graph, that returns the root object as the specified type.
- [unarchivedObjectOfClasses:fromData:error:](unarchivedobject%28ofclasses_from_%29-b9t5.md): Decodes a previously-archived object graph, returning the root object as one of the specified classes.
- [unarchiveObjectWithData:](unarchiveobject%28with_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` and stored in a given `NSData` object.
- [unarchiveTopLevelObjectWithData:error:](unarchivetoplevelobjectwithdata_error_.md): Deprecated. Decodes a previously-archived object graph, returning the root object.
- [unarchiveObjectWithFile:](unarchiveobject%28withfile_%29.md): Deprecated. Decodes and returns the object graph previously encoded by `NSKeyedArchiver` written to the file at a given path.
