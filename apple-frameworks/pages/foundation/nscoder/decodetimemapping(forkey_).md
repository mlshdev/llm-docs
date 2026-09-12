> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodetimemapping(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/decodetimemapping(forkey:))

# decodeTimeMapping(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time mapping structure associated with a given key.

## Declaration

```swift
func decodeTimeMapping(forKey key: String) -> CMTimeMapping
```

## Parameters

- `key`: The key for a `CMTimeMapping` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTimeMapping` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encode(\_:forKey:)](encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeTime(forKey:)](decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeTimeRange(forKey:)](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.

# decodeCMTimeMappingForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the Core Media time mapping structure associated with a given key.

## Declaration

```objectivec
- (CMTimeMapping) decodeCMTimeMappingForKey:(NSString *) key;
```

## Parameters

- `key`: The key for a `CMTimeMapping` structure encoded in the receiver.

<a id="return-value"></a>

## Return Value

The `CMTimeMapping` structure associated with `key` in the archive.

## See Also

### Related Documentation

- [encodeCMTimeMapping:forKey:](encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.

### Decoding Core Media Time Structures

- [decodeCMTimeForKey:](decodetime%28forkey_%29.md): Returns the Core Media time structure associated with a given key.
- [decodeCMTimeRangeForKey:](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.
