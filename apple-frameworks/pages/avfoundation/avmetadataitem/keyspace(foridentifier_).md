> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/keyspace(foridentifier:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/keyspace(foridentifier:))

# keySpace(forIdentifier:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata key space for the specified identifier.

## Declaration

```swift
class func keySpace(forIdentifier identifier: AVMetadataIdentifier) -> AVMetadataKeySpace?
```

## Parameters

- `identifier`: The metadata identifier.

<a id="return-value"></a>

## Return Value

A metadata key space.

## See Also

### Translating metadata items

- [identifier(forKey:keySpace:)](identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [key(forIdentifier:)](key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.

# keySpaceForIdentifier: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata key space for the specified identifier.

## Declaration

```objectivec
+ (AVMetadataKeySpace) keySpaceForIdentifier:(AVMetadataIdentifier) identifier;
```

## Parameters

- `identifier`: The metadata identifier.

<a id="return-value"></a>

## Return Value

A metadata key space.

## See Also

### Translating metadata items

- [identifierForKey:keySpace:](identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [keyForIdentifier:](key%28foridentifier_%29.md): Returns a metadata key for the specified identifier.
