> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classfallbacksforkeyedarchiver()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classfallbacksforkeyedarchiver())

# classFallbacksForKeyedArchiver() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden to return the names of classes that can be used to decode objects if their class is unavailable.

## Declaration

```swift
class func classFallbacksForKeyedArchiver() -> [String]
```

<a id="return-value"></a>

## Return Value

An array of string objects that specify the names of classes in preferred order for unarchiving

<a id="Discussion"></a>

## Discussion

[NSKeyedArchiver](../../foundation/nskeyedarchiver.md) calls this method and stores the result inside the archive. If the actual class of an object doesn’t exist at the time of unarchiving, [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) goes through the stored list of classes and uses the first one that does exists as a substitute class for decoding the object. The default implementation of this method returns an empty array.

You can use this method if you introduce a new class into your application to provide some backwards compatibility in case the archive will be read on a system that does not have that class. Sometimes there may be another class which may work nearly as well as a substitute for the new class, and the archive keys and archived state for the new class can be carefully chosen (or compatibility written out) so that the object can be unarchived as the substitute class if necessary.

## See Also

### Archiving

- [awakeAfter(using:)](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classForKeyedUnarchiver()](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObject(for:)](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion(\_:)](setversion%28__%29.md): Sets the receiver’s version number.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# classFallbacksForKeyedArchiver (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden to return the names of classes that can be used to decode objects if their class is unavailable.

## Declaration

```objectivec
+ (NSArray<NSString *> *) classFallbacksForKeyedArchiver;
```

<a id="return-value"></a>

## Return Value

An array of string objects that specify the names of classes in preferred order for unarchiving

<a id="Discussion"></a>

## Discussion

[NSKeyedArchiver](../../foundation/nskeyedarchiver.md) calls this method and stores the result inside the archive. If the actual class of an object doesn’t exist at the time of unarchiving, [NSKeyedUnarchiver](../../foundation/nskeyedunarchiver.md) goes through the stored list of classes and uses the first one that does exists as a substitute class for decoding the object. The default implementation of this method returns an empty array.

You can use this method if you introduce a new class into your application to provide some backwards compatibility in case the archive will be read on a system that does not have that class. Sometimes there may be another class which may work nearly as well as a substitute for the new class, and the archive keys and archived state for the new class can be carefully chosen (or compatibility written out) so that the object can be unarchived as the substitute class if necessary.

## See Also

### Archiving

- [awakeAfterUsingCoder:](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classForKeyedUnarchiver](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
