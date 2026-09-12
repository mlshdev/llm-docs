> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/key(foridentifier:)](https://developer.apple.com/documentation/avfoundation/avmetadataitem/key(foridentifier:))

# key(forIdentifier:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata key for the specified identifier.

## Declaration

```swift
class func key(forIdentifier identifier: AVMetadataIdentifier) -> Any?
```

## Parameters

- `identifier`: The metadata identifier.

<a id="return-value"></a>

## Return Value

A metadata key.

## See Also

### Translating metadata items

- [identifier(forKey:keySpace:)](identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [keySpace(forIdentifier:)](keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.

# keyForIdentifier: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a metadata key for the specified identifier.

## Declaration

```objectivec
+ (id) keyForIdentifier:(AVMetadataIdentifier) identifier;
```

## Parameters

- `identifier`: The metadata identifier.

<a id="return-value"></a>

## Return Value

A metadata key.

## See Also

### Translating metadata items

- [identifierForKey:keySpace:](identifier%28forkey_keyspace_%29.md): Returns a metadata identifier for the specified key and key space.
- [keySpaceForIdentifier:](keyspace%28foridentifier_%29.md): Returns a metadata key space for the specified identifier.
