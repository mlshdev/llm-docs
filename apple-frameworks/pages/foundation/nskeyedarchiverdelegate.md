> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedarchiverdelegate](https://developer.apple.com/documentation/foundation/nskeyedarchiverdelegate)

# NSKeyedArchiverDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The optional methods implemented by the delegate of a keyed archiver.

## Declaration

```swift
protocol NSKeyedArchiverDelegate : NSObjectProtocol
```

## Topics

### Encoding Data and Objects

- [archiver(\_:didEncode:)](nskeyedarchiverdelegate/archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish(\_:)](nskeyedarchiverdelegate/archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver(\_:willEncode:)](nskeyedarchiverdelegate/archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish(\_:)](nskeyedarchiverdelegate/archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver(\_:willReplace:with:)](nskeyedarchiverdelegate/archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

# NSKeyedArchiverDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The optional methods implemented by the delegate of a keyed archiver.

## Declaration

```objectivec
@protocol NSKeyedArchiverDelegate <NSObject>
```

## Topics

### Encoding Data and Objects

- [archiver:didEncodeObject:](nskeyedarchiverdelegate/archiver%28__didencode_%29.md): Informs the delegate that a given object has been encoded.
- [archiverDidFinish:](nskeyedarchiverdelegate/archiverdidfinish%28__%29.md): Notifies the delegate that encoding has finished.
- [archiver:willEncodeObject:](nskeyedarchiverdelegate/archiver%28__willencode_%29.md): Informs the delegate that `object` is about to be encoded.
- [archiverWillFinish:](nskeyedarchiverdelegate/archiverwillfinish%28__%29.md): Notifies the delegate that encoding is about to finish.
- [archiver:willReplaceObject:withObject:](nskeyedarchiverdelegate/archiver%28__willreplace_with_%29.md): Informs the delegate that one given object is being substituted for another given object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSKeyedUnarchiverDelegate](nskeyedunarchiverdelegate.md): The optional methods implemented by the delegate of a keyed unarchiver.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.
