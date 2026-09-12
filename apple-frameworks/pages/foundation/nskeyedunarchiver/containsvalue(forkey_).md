> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nskeyedunarchiver/containsvalue(forkey:)](https://developer.apple.com/documentation/foundation/nskeyedunarchiver/containsvalue(forkey:))

# containsValue(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.

## Declaration

```swift
func containsValue(forKey key: String) -> Bool
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the archive contains a value for `key` within the current decoding scope, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Decoding Data

- [decodeDecodable(\_:forKey:)](decodedecodable%28__forkey_%29.md): Decodes a decodable value associated with a given key.
- [decodeTopLevelDecodable(\_:forKey:)](decodetopleveldecodable%28__forkey_%29.md): Decodes a top-level decodable value associated with a given key.
- [decodeBool(forKey:)](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytes(forKey:returnedLength:)](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDouble(forKey:)](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloat(forKey:)](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeInt32(forKey:)](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64(forKey:)](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObject(forKey:)](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding()](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.

# containsValueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the archive contains a value for a given key within the current decoding scope.

## Declaration

```objectivec
- (BOOL) containsValueForKey:(NSString *) key;
```

## Parameters

- `key`: A key in the archive within the current decoding scope. `key` must not be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the archive contains a value for `key` within the current decoding scope, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Decoding Data

- [decodeBoolForKey:](decodebool%28forkey_%29.md): Decodes a Boolean value associated with a given key.
- [decodeBytesForKey:returnedLength:](decodebytes%28forkey_returnedlength_%29.md): Decodes a stream of bytes associated with a given key.
- [decodeDoubleForKey:](decodedouble%28forkey_%29.md): Decodes a double-precision floating-point value associated with a given key.
- [decodeFloatForKey:](decodefloat%28forkey_%29.md): Decodes a single-precision floating-point value associated with a given key.
- [decodeIntForKey:](decodeintforkey_.md): Decodes an integer value associated with a given key.
- [decodeInt32ForKey:](decodeint32%28forkey_%29.md): Decodes a 32-bit integer value associated with a given key.
- [decodeInt64ForKey:](decodeint64%28forkey_%29.md): Decodes a 64-bit integer value associated with a given key.
- [decodeObjectForKey:](decodeobject%28forkey_%29.md): Decodes and returns an object associated with a given key.
- [finishDecoding](finishdecoding%28%29.md): Tells the receiver that you are finished decoding objects.
- [decodingFailurePolicy](decodingfailurepolicy.md): The action to take when this unarchiver fails to decode an entry.
