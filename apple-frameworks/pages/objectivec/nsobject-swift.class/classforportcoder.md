> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classforportcoder](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classforportcoder)

# classForPortCoder

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Class to substitute for the receiver in distribution encoding.

## Declaration

```objectivec
@property (readonly) Class classForPortCoder;
```

<a id="Discussion"></a>

## Discussion

This property allows specialized behavior for distributed objects—override [classForCoder](classforcoder.md) to add general coding behavior.

## See Also

### Related Documentation

- [replacementObjectForPortCoder:](replacementobjectforportcoder_.md): Deprecated. Overridden by subclasses to substitute another object or a copy for itself during distribution encoding.

### Archiving

- [awakeAfterUsingCoder:](awakeafter%28using_%29.md): Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.
- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
