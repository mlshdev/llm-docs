> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/encode(_:forkey:)-8tefb](https://developer.apple.com/documentation/foundation/nscoder/encode(_:forkey:)-8tefb)

# encode(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Encodes a given Core Media time mapping structure and associates it with a specified key.

## Declaration

```swift
func encode(_ timeMapping: CMTimeMapping, forKey key: String)
```

## Parameters

- `timeMapping`: A `CMTimeMapping` structure.
- `key`: The key with which to associate `timeMapping` in the archive.

## See Also

### Related Documentation

- [decodeTimeMapping(forKey:)](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

### Encoding Core Media Time Structures

- [encode(\_:forKey:)](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encode(\_:forKey:)](encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.

# encodeCMTimeMapping:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Encodes a given Core Media time mapping structure and associates it with a specified key.

## Declaration

```objectivec
- (void) encodeCMTimeMapping:(CMTimeMapping) timeMapping forKey:(NSString *) key;
```

## Parameters

- `timeMapping`: A `CMTimeMapping` structure.
- `key`: The key with which to associate `timeMapping` in the archive.

## See Also

### Related Documentation

- [decodeCMTimeMappingForKey:](decodetimemapping%28forkey_%29.md): Returns the Core Media time mapping structure associated with a given key.

### Encoding Core Media Time Structures

- [encodeCMTime:forKey:](encode%28__forkey_%29-6wbby.md): Encodes a given Core Media time structure and associates it with a specified key.
- [encodeCMTimeRange:forKey:](encode%28__forkey_%29-46lo8.md): Encodes a given Core Media time range structure and associates it with a specified key.
