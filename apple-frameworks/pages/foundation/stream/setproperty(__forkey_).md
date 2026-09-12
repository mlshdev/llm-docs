> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/setproperty(_:forkey:)](https://developer.apple.com/documentation/foundation/stream/setproperty(_:forkey:))

# setProperty(\_:forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.

## Declaration

```swift
func setProperty(_ property: Any?, forKey key: Stream.PropertyKey) -> Bool
```

## Parameters

- `property`: The value for `key`.
- `key`: The key for one of the receiver’s properties. See Constants for a description of the available property-key constants and expected values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is accepted by the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Streams

- [property(forKey:)](property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [delegate](delegate.md): Sets the receiver’s delegate.

# setProperty:forKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.

## Declaration

```objectivec
- (BOOL) setProperty:(id) property forKey:(NSStreamPropertyKey) key;
```

## Parameters

- `property`: The value for `key`.
- `key`: The key for one of the receiver’s properties. See Constants for a description of the available property-key constants and expected values.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is accepted by the receiver, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Streams

- [propertyForKey:](property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [delegate](delegate.md): Sets the receiver’s delegate.
