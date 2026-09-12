> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/decodingfailurepolicy-swift.property](https://developer.apple.com/documentation/foundation/nscoder/decodingfailurepolicy-swift.property)

# decodingFailurePolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The action the coder should take when decoding fails.

## Declaration

```swift
var decodingFailurePolicy: NSCoder.DecodingFailurePolicy { get }
```

<a id="Discussion"></a>

## Discussion

A decode call can fail for the following reasons:

- The keyed archive data is corrupt or missing.
- A type mismatch occurs, such as expecting a class by calling [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md) but encountering a numeric type instead. This also occurs when [decodeInteger(forKey:)](decodeinteger%28forkey_%29.md) encounters a value encoded as floating-point, or vice versa.
- A secure coding violation occurs. This happens when you attempt to decode an object that doesn’t conform to [NSSecureCoding](../nssecurecoding.md). This also happens when the encoded type doesn’t match any of the types passed to [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md).

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [NSCoder.DecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.

# decodingFailurePolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The action the coder should take when decoding fails.

## Declaration

```objectivec
@property (readonly) NSDecodingFailurePolicy decodingFailurePolicy;
```

<a id="Discussion"></a>

## Discussion

A decode call can fail for the following reasons:

- The keyed archive data is corrupt or missing.
- A type mismatch occurs, such as expecting a class by calling [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-7tmft.md) but encountering a numeric type instead. This also occurs when [decodeIntegerForKey:](decodeinteger%28forkey_%29.md) encounters a value encoded as floating-point, or vice versa.
- A secure coding violation occurs. This happens when you attempt to decode an object that doesn’t conform to [NSSecureCoding](../nssecurecoding.md). This also happens when the encoded type doesn’t match any of the types passed to [decodeObject(of:forKey:)](decodeobject%28of_forkey_%29-roif.md).

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [NSDecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.
