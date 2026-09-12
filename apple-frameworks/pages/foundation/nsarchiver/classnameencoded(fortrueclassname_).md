> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarchiver/classnameencoded(fortrueclassname:)](https://developer.apple.com/documentation/foundation/nsarchiver/classnameencoded(fortrueclassname:))

# classNameEncoded(forTrueClassName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 11.0) · iPadOS 2.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the name of the class used to archive instances of the class with a given true name.

> Use NSKeyedArchiver instead

## Declaration

```swift
func classNameEncoded(forTrueClassName trueName: String) -> String?
```

## Parameters

- `trueName`: The real name of an encoded class.

<a id="return-value"></a>

## Return Value

The name of the class used to archive instances of the class `trueName`.

## See Also

### Substituting classes or objects

- [encodeClassName(\_:intoClassName:)](encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.
- [replace(\_:with:)](replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.

# classNameEncodedForTrueClassName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

Returns the name of the class used to archive instances of the class with a given true name.

> Use NSKeyedArchiver instead

## Declaration

```objectivec
- (NSString *) classNameEncodedForTrueClassName:(NSString *) trueName;
```

## Parameters

- `trueName`: The real name of an encoded class.

<a id="return-value"></a>

## Return Value

The name of the class used to archive instances of the class `trueName`.

## See Also

### Substituting classes or objects

- [encodeClassName:intoClassName:](encodeclassname%28__intoclassname_%29.md): Deprecated. Encodes a substitute name for the class with a given true name.
- [replaceObject:withObject:](replace%28__with_%29.md): Deprecated. Causes the receiver to treat subsequent requests to encode a given object as though they were requests to encode another given object.
