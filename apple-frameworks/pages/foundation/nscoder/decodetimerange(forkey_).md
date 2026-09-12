> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetimerange(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodetimerange(forkey:))

# decodeTimeRange(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time range structure associated with a given key.

## Declaration

```swift
func decodeTimeRange(forKey key: String) -> CMTimeRange
```

## Parameters

- `key`: The key for a `CMTimeRange` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTimeRange` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeTime(forKey:)](decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeTimeMapping(forKey:)](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

# decodeCMTimeRangeForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time range structure associated with a given key.

## Declaration

```objectivec
- (CMTimeRange) decodeCMTimeRangeForKey:(NSString *) key;
```

## Parameters

- `key`: The key for a `CMTimeRange` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTimeRange` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encodeCMTimeRange:forKey:](encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeCMTimeForKey:](decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeCMTimeMappingForKey:](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.
