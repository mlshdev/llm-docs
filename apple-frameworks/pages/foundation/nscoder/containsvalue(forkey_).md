> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/containsvalue(forkey:)](https://developer.apple.com/documentation/foundation/nscoder/containsvalue(forkey:))

# containsValue(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an encoded value is available for a string.

## Declaration

```swift
func containsValue(forKey key: String) -> Bool
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

The string is passed as `key`.

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSCoder.DecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.

# containsValueForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether an encoded value is available for a string.

## Declaration

```objectivec
- (BOOL) containsValueForKey:(NSString *) key;
```

<a id="Discussion"></a>

## Discussion

Subclasses must override this method if they perform keyed coding.

The string is passed as `key`.

## See Also

### Inspecting a Coder

- [allowsKeyedCoding](allowskeyedcoding.md): A Boolean value that indicates whether the receiver supports keyed coding of objects.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSDecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.
