> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscoder/allowskeyedcoding](https://developer.apple.com/documentation/foundation/nscoder/allowskeyedcoding)

# allowsKeyedCoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver supports keyed coding of objects.

## Declaration

```swift
var allowsKeyedCoding: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[false](https://developer.apple.com/documentation/swift/false) by default. Concrete subclasses that support keyed coding, such as `NSKeyedArchiver`, need to override this property to return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Inspecting a Coder

- [containsValue(forKey:)](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSCoder.DecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.

# allowsKeyedCoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the receiver supports keyed coding of objects.

## Declaration

```objectivec
@property (readonly) BOOL allowsKeyedCoding;
```

<a id="Discussion"></a>

## Discussion

[false](https://developer.apple.com/documentation/swift/false) by default. Concrete subclasses that support keyed coding, such as `NSKeyedArchiver`, need to override this property to return [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Related Documentation

- [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i)

### Inspecting a Coder

- [containsValueForKey:](containsvalue%28forkey_%29.md): Returns a Boolean value that indicates whether an encoded value is available for a string.
- [decodingFailurePolicy](decodingfailurepolicy-swift.property.md): The action the coder should take when decoding fails.
- [NSDecodingFailurePolicy](decodingfailurepolicy-swift.enum.md): Policies describing the action the coder should take when encountering decode failures.
