> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/setversion(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/setversion(_:))

# setVersion(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the receiver’s version number.

## Declaration

```swift
class func setVersion(_ aVersion: Int)
```

## Parameters

- `aVersion`: The version number for the receiver.

<a id="Discussion"></a>

## Discussion

The version number is helpful when instances of the class are to be archived and reused later. The default version is `0`.

<a id="Special-Considerations"></a>

### Special Considerations

The version number applies to `NSArchiver`/`NSUnarchiver`, but not to `NSKeyedArchiver`/`NSKeyedUnarchiver`.  A keyed archiver does not encode class version numbers.

## See Also

### Archiving

- [awakeAfter(using:)](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver()](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver()](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObject(for:)](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# setVersion: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sets the receiver’s version number.

## Declaration

```objectivec
+ (void) setVersion:(NSInteger) aVersion;
```

## Parameters

- `aVersion`: The version number for the receiver.

<a id="Discussion"></a>

## Discussion

The version number is helpful when instances of the class are to be archived and reused later. The default version is `0`.

<a id="Special-Considerations"></a>

### Special Considerations

The version number applies to `NSArchiver`/`NSUnarchiver`, but not to `NSKeyedArchiver`/`NSKeyedUnarchiver`.  A keyed archiver does not encode class version numbers.

## See Also

### Archiving

- [awakeAfterUsingCoder:](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [version](version%28%29.md): Returns the version number assigned to the class.
