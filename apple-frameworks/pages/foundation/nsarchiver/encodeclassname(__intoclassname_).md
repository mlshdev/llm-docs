> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/encodeclassname(_:intoclassname:)](https://developer.apple.com/documentation/foundation/nsarchiver/encodeclassname(_:intoclassname:))

# encodeClassName(\_:intoClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Encodes a substitute name for the class with a given true name.

> Use NSKeyedArchiver instead

## Declaration

```swift
func encodeClassName(_ trueName: String, intoClassName inArchiveName: String)
```

## Parameters

- `trueName`: The real name of a class in the object graph being archived.
- `inArchiveName`: The name of the class to use in the archive in place of `trueName`.

<a id="Discussion"></a>

## Discussion

Any subsequently encountered objects of class `trueName` are archived as instances of class `inArchiveName`. It is safest not to invoke this method during the archiving process (that is, within an [encode(with:)](../nscoding/encode%28with_%29.md) method). Instead, invoke it before [encodeRootObject(\_:)](encoderootobject%28__%29.md).

## See Also

### Substituting classes or objects

- [classNameEncoded(forTrueClassName:)](classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [replace(\_:with:)](replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

# encodeClassName:intoClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Encodes a substitute name for the class with a given true name.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (void) encodeClassName:(NSString *) trueName intoClassName:(NSString *) inArchiveName;
```

## Parameters

- `trueName`: The real name of a class in the object graph being archived.
- `inArchiveName`: The name of the class to use in the archive in place of `trueName`.

<a id="Discussion"></a>

## Discussion

Any subsequently encountered objects of class `trueName` are archived as instances of class `inArchiveName`. It is safest not to invoke this method during the archiving process (that is, within an [encodeWithCoder:](../nscoding/encode%28with_%29.md) method). Instead, invoke it before [encodeRootObject:](encoderootobject%28__%29.md).

## See Also

### Substituting classes or objects

- [classNameEncodedForTrueClassName:](classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [replaceObject:withObject:](replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.
