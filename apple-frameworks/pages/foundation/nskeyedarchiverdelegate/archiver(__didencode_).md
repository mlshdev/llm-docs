> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverdelegate/archiver(_:didencode:)](https://developer.apple.com/documentation/foundation/nskeyedarchiverdelegate/archiver(_:didencode:))

# archiver(\_:didEncode:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that a given object has been encoded.

## Declaration

```swift
optional func archiver(_ archiver: NSKeyedArchiver, didEncode object: Any?)
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object that has been encoded. `object` may be `nil`.

<a id="Discussion"></a>

## Discussion

The delegate might restore some state it had modified previously, or use this opportunity to keep track of the objects that are encoded.

This method is not called for conditional objects until they are actually encoded (if ever).

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Encoding Data and Objects

- [archiverDidFinish(\_:)](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver(\_:willEncode:)](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish(\_:)](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver(\_:willReplace:with:)](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.

# archiver:didEncodeObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Informs the delegate that a given object has been encoded.

## Declaration

```objectivec
- (void) archiver:(NSKeyedArchiver *) archiver didEncodeObject:(id) object;
```

## Parameters

- `archiver`: The archiver that sent the message.
- `object`: The object that has been encoded. `object` may be `nil`.

<a id="Discussion"></a>

## Discussion

The delegate might restore some state it had modified previously, or use this opportunity to keep track of the objects that are encoded.

This method is not called for conditional objects until they are actually encoded (if ever).

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Encoding Data and Objects

- [archiverDidFinish:](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver:willEncodeObject:](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish:](archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver:willReplaceObject:withObject:](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.
