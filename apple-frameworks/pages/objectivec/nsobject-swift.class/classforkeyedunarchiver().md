> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classforkeyedunarchiver()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classforkeyedunarchiver())

# classForKeyedUnarchiver() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute a new class during keyed unarchiving.

## Declaration

```swift
class func classForKeyedUnarchiver() -> AnyClass
```

<a id="return-value"></a>

## Return Value

The class to substitute for the receiver during keyed unarchiving.

<a id="Discussion"></a>

## Discussion

During keyed unarchiving, instances of the receiver will be decoded as members of the returned class. This method overrides the results of the decoder’s class and instance name to class encoding tables.

## See Also

### Archiving

- [awakeAfter(using:)](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver()](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [replacementObject(for:)](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion(\_:)](setversion%28__%29.md): Sets the receiver’s version number.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# classForKeyedUnarchiver (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute a new class during keyed unarchiving.

## Declaration

```objectivec
+ (Class) classForKeyedUnarchiver;
```

<a id="return-value"></a>

## Return Value

The class to substitute for the receiver during keyed unarchiving.

<a id="Discussion"></a>

## Discussion

During keyed unarchiving, instances of the receiver will be decoded as members of the returned class. This method overrides the results of the decoder’s class and instance name to class encoding tables.

## See Also

### Archiving

- [awakeAfterUsingCoder:](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
