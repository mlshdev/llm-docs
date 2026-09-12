> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverdelegate/archiver(_:willreplace:with:)](https://developer.apple.com/documentation/foundation/nskeyedarchiverdelegate/archiver(_:willreplace:with:))

# archiver(\_:willReplace:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that one given object is being substituted for another given object.

## Declaration

```swift
optional func archiver(_ archiver: NSKeyedArchiver, willReplace object: Any?, with newObject: Any?)
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object being replaced in the archive.
- `newObject`: The object replacing `object` in the archive.

<a id="Discussion"></a>

## Discussion

This method is called even when the delegate itself is doing, or has done, the substitution. The delegate may use this method if it is keeping track of the encoded or decoded objects.

## See Also

### Encoding Data and Objects

- [archiver(\_:didEncode:)](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish(\_:)](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver(\_:willEncode:)](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish(\_:)](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.

# archiver:willReplaceObject:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that one given object is being substituted for another given object.

## Declaration

```objectivec
- (void) archiver:(NSKeyedArchiver *) archiver willReplaceObject:(id) object withObject:(id) newObject;
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object being replaced in the archive.
- `newObject`: The object replacing `object` in the archive.

<a id="Discussion"></a>

## Discussion

This method is called even when the delegate itself is doing, or has done, the substitution. The delegate may use this method if it is keeping track of the encoded or decoded objects.

## See Also

### Encoding Data and Objects

- [archiver:didEncodeObject:](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish:](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver:willEncodeObject:](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish:](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
