> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetime(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodetime(forkey:))

# decodeTime(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time structure associated with a given key.

## Declaration

```swift
func decodeTime(forKey key: String) -> CMTime
```

## Parameters

- `key`: The key for a `CMTime` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTime` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeTimeRange(forKey:)](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.
- [decodeTimeMapping(forKey:)](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

# decodeCMTimeForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time structure associated with a given key.

## Declaration

```objectivec
- (CMTime) decodeCMTimeForKey:(NSString *) key;
```

## Parameters

- `key`: The key for a `CMTime` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTime` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encodeCMTime:forKey:](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeCMTimeRangeForKey:](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.
- [decodeCMTimeMappingForKey:](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.
