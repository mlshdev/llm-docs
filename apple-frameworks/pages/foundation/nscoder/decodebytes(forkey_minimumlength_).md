> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nscoder/decodebytes(forkey:minimumlength:)

# decodeBytes(forKey:minimumLength:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Decode bytes from the decoder for a given key. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.

## Declaration

```swift
func decodeBytes(forKey key: String, minimumLength length: Int) -> UnsafePointer<UInt8>?
```

# decodeBytesForKey:minimumLength: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Decode bytes from the decoder for a given key. The length of the bytes must be greater than or equal to the `length` parameter. If the result exists, but is of insufficient length, then the decoder uses `failWithError` to fail the entire decode operation. The result of that is configurable on a per-NSCoder basis using `NSDecodingFailurePolicy`.

## Declaration

```objectivec
- (const uint8_t *) decodeBytesForKey:(NSString *) key minimumLength:(NSUInteger) length;
```
