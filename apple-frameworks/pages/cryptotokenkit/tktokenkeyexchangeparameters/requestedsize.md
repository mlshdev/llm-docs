> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeyexchangeparameters/requestedsize](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeyexchangeparameters/requestedsize)

# requestedSize (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the requested output size, in bytes, of key exchange result.

## Declaration

```swift
var requestedSize: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property should be ignored if the output size is not configurable for the specified key exchange algorithm.

## See Also

### Accessing Parameters

- [sharedInfo](sharedinfo.md): Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.

# requestedSize (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the requested output size, in bytes, of key exchange result.

## Declaration

```objectivec
@property (readonly) NSInteger requestedSize;
```

<a id="Discussion"></a>

## Discussion

This property should be ignored if the output size is not configurable for the specified key exchange algorithm.

## See Also

### Accessing Parameters

- [sharedInfo](sharedinfo.md): Returns shared information typically used during the key derivation (KDF) step of a key exchange algorithm.
