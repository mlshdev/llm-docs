> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/replace(_:with:)](https://developer.apple.com/documentation/foundation/nsarchiver/replace(_:with:))

# replace(\_:with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

> Use NSKeyedArchiver instead

## Declaration

```swift
func replace(_ object: Any, with newObject: Any)
```

## Parameters

- `object`: An object in the object graph being archived.
- `newObject`: The object with which to replace `object` in the archive.

<a id="Discussion"></a>

## Discussion

Both `object` and `newObject` must be valid objects.

## See Also

### Substituting classes or objects

- [classNameEncoded(forTrueClassName:)](classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [encodeClassName(\_:intoClassName:)](encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.

# replaceObject:withObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (void) replaceObject:(id) object withObject:(id) newObject;
```

## Parameters

- `object`: An object in the object graph being archived.
- `newObject`: The object with which to replace `object` in the archive.

<a id="Discussion"></a>

## Discussion

Both `object` and `newObject` must be valid objects.

## See Also

### Substituting classes or objects

- [classNameEncodedForTrueClassName:](classnameencoded%28fortrueclassname_%29.md): Deprecated. Returns the name of the class used to archive instances of the class with a given true name.
- [encodeClassName:intoClassName:](encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.
