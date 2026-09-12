> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classforkeyedarchiver](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classforkeyedarchiver)

# classForKeyedArchiver (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Subclasses to substitute a new class for instances during keyed archiving.

## Declaration

```swift
var classForKeyedArchiver: AnyClass? { get }
```

<a id="Discussion"></a>

## Discussion

The object will be encoded as if it were a member of the class. This property is overridden by the encoder class and instance name to class encoding tables. If this property is `nil`, the result of this property is ignored.

## See Also

### Archiving

- [awakeAfter(using:)](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classFallbacksForKeyedArchiver()](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver()](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObject(for:)](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion(\_:)](setversion%28__%29.md): Sets the receiver’s version number.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# classForKeyedArchiver (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Subclasses to substitute a new class for instances during keyed archiving.

## Declaration

```objectivec
@property (readonly, nullable) Class classForKeyedArchiver;
```

<a id="Discussion"></a>

## Discussion

The object will be encoded as if it were a member of the class. This property is overridden by the encoder class and instance name to class encoding tables. If this property is `nil`, the result of this property is ignored.

## See Also

### Archiving

- [awakeAfterUsingCoder:](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classFallbacksForKeyedArchiver](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
