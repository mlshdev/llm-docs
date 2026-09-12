> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiverdelegate](https://developer.apple.com/documentation/foundation/nskeyedunarchiverdelegate)

# NSKeyedUnarchiverDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The optional methods implemented by the delegate of a keyed unarchiver.

## Declaration

```swift
protocol NSKeyedUnarchiverDelegate : NSObjectProtocol
```

## Topics

### Decoding Objects

- [unarchiver(\_:cannotDecodeObjectOfClassName:originalClasses:)](nskeyedunarchiverdelegate/unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver(\_:didDecode:)](nskeyedunarchiverdelegate/unarchiver%28__diddecode_%29.md): Informs the delegate that a given object has been decoded.
- [unarchiver(\_:willReplace:with:)](nskeyedunarchiverdelegate/unarchiver%28__willreplace_with_%29.md): Informs the delegate that one object is being substituted for another.

### Finishing Decoding

- [unarchiverDidFinish(\_:)](nskeyedunarchiverdelegate/unarchiverdidfinish%28__%29.md): Notifies the delegate that decoding has finished.
- [unarchiverWillFinish(\_:)](nskeyedunarchiverdelegate/unarchiverwillfinish%28__%29.md): Notifies the delegate that decoding is about to finish.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.

# NSKeyedUnarchiverDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The optional methods implemented by the delegate of a keyed unarchiver.

## Declaration

```objectivec
@protocol NSKeyedUnarchiverDelegate <NSObject>
```

## Topics

### Decoding Objects

- [unarchiver:cannotDecodeObjectOfClassName:originalClasses:](nskeyedunarchiverdelegate/unarchiver%28__cannotdecodeobjectofclassname_originalclasses_%29.md): Informs the delegate that the class with a given name is not available during decoding.
- [unarchiver:didDecodeObject:](nskeyedunarchiverdelegate/unarchiver%28__diddecode_%29.md): Informs the delegate that a given object has been decoded.
- [unarchiver:willReplaceObject:withObject:](nskeyedunarchiverdelegate/unarchiver%28__willreplace_with_%29.md): Informs the delegate that one object is being substituted for another.

### Finishing Decoding

- [unarchiverDidFinish:](nskeyedunarchiverdelegate/unarchiverdidfinish%28__%29.md): Notifies the delegate that decoding has finished.
- [unarchiverWillFinish:](nskeyedunarchiverdelegate/unarchiverwillfinish%28__%29.md): Notifies the delegate that decoding is about to finish.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Keyed Archivers

- [NSKeyedArchiver](nskeyedarchiver.md): An encoder that stores an object’s data to an archive referenced by keys.
- [NSKeyedArchiverDelegate](nskeyedarchiverdelegate.md): The optional methods implemented by the delegate of a keyed archiver.
- [NSKeyedUnarchiver](nskeyedunarchiver.md): A decoder that restores data from an archive referenced by keys.
- [NSCoder](nscoder.md): An abstract class that serves as the basis for objects that enable archiving and distribution of other objects.
- [NSSecureUnarchiveFromDataTransformer](nssecureunarchivefromdatatransformer.md): A value transformer that converts data to and from classes that support secure coding.
