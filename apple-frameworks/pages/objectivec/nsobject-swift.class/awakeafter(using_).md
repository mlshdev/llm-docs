> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/awakeafter(using:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/awakeafter(using:))

# awakeAfter(using:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.

## Declaration

```swift
func awakeAfter(using coder: NSCoder) -> Any?
```

## Parameters

- `coder`: The decoder used to decode the receiver.

<a id="return-value"></a>

## Return Value

The receiver, or another object to take the place of the object that was decoded and subsequently received this message.

<a id="Discussion"></a>

## Discussion

You can use this method to eliminate redundant objects created by the coder. For example, if after decoding an object you discover that an equivalent object already exists, you can return the existing object. If a replacement is returned, your overriding method is responsible for releasing the receiver.

This method is invoked by `NSCoder`. `NSObject`’s implementation simply returns `self`.

## See Also

### Related Documentation

- [init(coder:)](../../foundation/nscoding/init%28coder_%29.md): Initializes the receiver from data in a given unarchiver.

### Archiving

- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver()](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver()](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [replacementObject(for:)](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObject(for:)](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObject(for:)](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion(\_:)](setversion%28__%29.md): Sets the receiver’s version number.
- [version()](version%28%29.md): Returns the version number assigned to the class.

# awakeAfterUsingCoder: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Overridden by subclasses to substitute another object in place of the object that was decoded and subsequently received this message.

## Declaration

```objectivec
- (id) awakeAfterUsingCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The decoder used to decode the receiver.

<a id="return-value"></a>

## Return Value

The receiver, or another object to take the place of the object that was decoded and subsequently received this message.

<a id="Discussion"></a>

## Discussion

You can use this method to eliminate redundant objects created by the coder. For example, if after decoding an object you discover that an equivalent object already exists, you can return the existing object. If a replacement is returned, your overriding method is responsible for releasing the receiver.

This method is invoked by `NSCoder`. `NSObject`’s implementation simply returns `self`.

## See Also

### Related Documentation

- [initWithCoder:](../../foundation/nscoding/init%28coder_%29.md): Initializes the receiver from data in a given unarchiver.

### Archiving

- [classForArchiver](classforarchiver.md): The class to substitute for the receiver’s own class during archiving.
- [classForCoder](classforcoder.md): Overridden by subclasses to substitute a class other than its own during coding.
- [classForKeyedArchiver](classforkeyedarchiver.md): Subclasses to substitute a new class for instances during keyed archiving.
- [classFallbacksForKeyedArchiver](classfallbacksforkeyedarchiver%28%29.md): Overridden to return the names of classes that can be used to decode objects if their class is unavailable.
- [classForKeyedUnarchiver](classforkeyedunarchiver%28%29.md): Overridden by subclasses to substitute a new class during keyed unarchiving.
- [classForPortCoder](classforportcoder.md): Deprecated. Class to substitute for the receiver in distribution encoding.
- [replacementObjectForArchiver:](replacementobject%28for_%29-8ih2x.md): Deprecated. Overridden by subclasses to substitute another object for itself during archiving.
- [replacementObjectForCoder:](replacementobject%28for_%29-2l8ox.md): Overridden by subclasses to substitute another object for itself during encoding.
- [replacementObjectForKeyedArchiver:](replacementobject%28for_%29-60vwc.md): Overridden by subclasses to substitute another object for itself during keyed archiving.
- [setVersion:](setversion%28__%29.md): Sets the receiver’s version number.
- [version](version%28%29.md): Returns the version number assigned to the class.
