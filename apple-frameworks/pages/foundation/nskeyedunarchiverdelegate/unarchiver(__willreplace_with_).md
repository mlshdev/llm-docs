> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiverdelegate/unarchiver(_:willreplace:with:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiverdelegate/unarchiver(_:willreplace:with:))

# unarchiver(\_:willReplace:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that one object is being substituted for another.

## Declaration

```swift
optional func unarchiver(_ unarchiver: NSKeyedUnarchiver, willReplace object: Any, with newObject: Any)
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.
- `object`: An object in the archive.
- `newObject`: The object with which `unarchiver` will replace `object`.

<a id="Discussion"></a>

## Discussion

This method is called even when the delegate itself is doing, or has done, the substitution with [unarchiver(\_:didDecode:)](unarchiver%28__diddecode_%29.md).

The delegate may use this method if it is keeping track of the encoded or decoded objects.

## See Also

### Decoding Objects

- [unarchiver(\_:cannotDecodeObjectOfClassName:originalClasses:)](unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver(\_:didDecode:)](unarchiver%28__diddecode_%29.md): Informs the delegate that a given object has been decoded.

# unarchiver:willReplaceObject:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that one object is being substituted for another.

## Declaration

```objectivec
- (void) unarchiver:(NSKeyedUnarchiver *) unarchiver willReplaceObject:(id) object withObject:(id) newObject;
```

## Parameters

- `unarchiver`: An unarchiver for which the receiver is the delegate.
- `object`: An object in the archive.
- `newObject`: The object with which `unarchiver` will replace `object`.

<a id="Discussion"></a>

## Discussion

This method is called even when the delegate itself is doing, or has done, the substitution with [unarchiver:didDecodeObject:](unarchiver%28__diddecode_%29.md).

The delegate may use this method if it is keeping track of the encoded or decoded objects.

## See Also

### Decoding Objects

- [unarchiver:cannotDecodeObjectOfClassName:originalClasses:](unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver:didDecodeObject:](unarchiver%28__diddecode_%29.md): Informs the delegate that a given object has been decoded.
