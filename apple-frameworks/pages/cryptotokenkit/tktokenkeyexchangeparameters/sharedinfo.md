> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeyexchangeparameters/sharedinfo](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeyexchangeparameters/sharedinfo)

# sharedInfo (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.

## Declaration

```swift
var sharedInfo: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property should be ignored if shared information isn’t used by the specified key exchange algorithm.

## See Also

### Accessing Parameters

- [requestedSize](requestedsize.md): Returns the requested output size, in bytes, of key exchange result.

# sharedInfo (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * sharedInfo;
```

<a id="Discussion"></a>

## Discussion

This property should be ignored if shared information isn’t used by the specified key exchange algorithm.

## See Also

### Accessing Parameters

- [requestedSize](requestedsize.md): Returns the requested output size, in bytes, of key exchange result.
