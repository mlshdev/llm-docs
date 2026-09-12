> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/replacementobject(for:)-60vwc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/replacementobject(for:)-60vwc)

# replacementObject(for:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute another object for itself during keyed archiving.

## Declaration

```swift
func replacementObject(for archiver: NSKeyedArchiver) -> Any?
```

## Parameters

- `archiver`: A keyed archiver creating an archive.

<a id="return-value"></a>

## Return Value

The object encode instead of the receiver (if different).

<a id="Discussion"></a>

## Discussion

This method is called only if no replacement mapping for the object has been set up in the encoder (for example, due to a previous call of [replacementObject(for:)](replacementobject%28for_%29-60vwc.md) to that object).

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
- [setVersion(\_:)](setversion%28__%29.md): Sets the receiver’s version number.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# replacementObjectForKeyedArchiver: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute another object for itself during keyed archiving.

## Declaration

```objectivec
- (id) replacementObjectForKeyedArchiver:(NSKeyedArchiver *) archiver;
```

## Parameters

- `archiver`: A keyed archiver creating an archive.

<a id="return-value"></a>

## Return Value

The object encode instead of the receiver (if different).

<a id="Discussion"></a>

## Discussion

This method is called only if no replacement mapping for the object has been set up in the encoder (for example, due to a previous call of [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md) to that object).

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
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
