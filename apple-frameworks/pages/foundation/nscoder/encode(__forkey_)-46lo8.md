> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encode(_:forkey:)-46lo8](https://developer.apple.com/documentation/foundation/nscoder/encode(_:forkey:)-46lo8)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Encodes a given Core Media time range structure and associates it with a specified key.

## Declaration

```swift
func encode(_ timeRange: CMTimeRange, forKey key: String)
```

## Parameters

- `timeRange`: A `CMTimeRange` structure.
- `key`: The key with which to associate `timeRange` in the archive.

## See Also

### Related Documentation

- [decodeTimeRange(forKey:)](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.

### Encoding Core Media Time Structures

- [encode(\_:forKey:)](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encode(\_:forKey:)](encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.

# encodeCMTimeRange:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Encodes a given Core Media time range structure and associates it with a specified key.

## Declaration

```objectivec
- (void) encodeCMTimeRange:(CMTimeRange) timeRange forKey:(NSString *) key;
```

## Parameters

- `timeRange`: A `CMTimeRange` structure.
- `key`: The key with which to associate `timeRange` in the archive.

## See Also

### Related Documentation

- [decodeCMTimeRangeForKey:](decodetimerange%28forkey_%29.md): Returns the Core Media time range structure associated with a given key.

### Encoding Core Media Time Structures

- [encodeCMTime:forKey:](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encodeCMTimeMapping:forKey:](encode%28__forkey_%29-8tefb.md): Encodes a given Core Media time mapping structure and associates it with a specified key.
