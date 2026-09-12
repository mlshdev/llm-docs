> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/identifier(forkey:keyspace:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/identifier(forkey:keyspace:))

# identifier(forKey:keySpace:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata identifier for the specified key and key space.

## Declaration

```swift
class func identifier(forKey key: Any, keySpace: AVMetadataKeySpace) -> AVMetadataIdentifier?
```

## Parameters

- `key`: A key to return an identifier for.
- `keySpace`: A key space to return an identifier for.

<a id="return-value"></a>

## Return Value

A metadata identifier, or `nil` if no equivalent identifier exists.

## See Also

### Translating metadata items

- [key(forIdentifier:)](key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.
- [keySpace(forIdentifier:)](keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.

# identifierForKey:keySpace: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata identifier for the specified key and key space.

## Declaration

```objectivec
+ (AVMetadataIdentifier) identifierForKey:(id) key keySpace:(AVMetadataKeySpace) keySpace;
```

## Parameters

- `key`: A key to return an identifier for.
- `keySpace`: A key space to return an identifier for.

<a id="return-value"></a>

## Return Value

A metadata identifier, or `nil` if no equivalent identifier exists.

## See Also

### Translating metadata items

- [keyForIdentifier:](key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.
- [keySpaceForIdentifier:](keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.
