> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverdelegate/archiverwillfinish(_:)](https://developer.apple.com/documentation/foundation/nskeyedarchiverdelegate/archiverwillfinish(_:))

# archiverWillFinish(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that encoding is about to finish.

## Declaration

```swift
optional func archiverWillFinish(_ archiver: NSKeyedArchiver)
```

## Parameters

- `archiver`: The archiver that sent the message.

## See Also

### Encoding Data and Objects

- [archiver(\_:didEncode:)](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish(\_:)](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver(\_:willEncode:)](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiver(\_:willReplace:with:)](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.

# archiverWillFinish: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies the delegate that encoding is about to finish.

## Declaration

```objectivec
- (void) archiverWillFinish:(NSKeyedArchiver *) archiver;
```

## Parameters

- `archiver`: The archiver that sent the message.

## See Also

### Encoding Data and Objects

- [archiver:didEncodeObject:](archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish:](archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver:willEncodeObject:](archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiver:willReplaceObject:withObject:](archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.
