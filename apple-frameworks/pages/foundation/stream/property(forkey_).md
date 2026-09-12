> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/property(forkey:)](https://developer.apple.com/documentation/foundation/stream/property(forkey:))

# property(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s property for a given key.

## Declaration

```swift
func property(forKey key: Stream.PropertyKey) -> Any?
```

## Parameters

- `key`: The key for one of the receiver’s properties. See Constants for a description of the available property-key constants and associated values.

<a id="return-value"></a>

## Return Value

The receiver’s property for the key `key`.

## See Also

### Configuring Streams

- [setProperty(\_:forKey:)](setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.
- [delegate](delegate.md): Sets the receiver’s delegate.

# propertyForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s property for a given key.

## Declaration

```objectivec
- (id) propertyForKey:(NSStreamPropertyKey) key;
```

## Parameters

- `key`: The key for one of the receiver’s properties. See Constants for a description of the available property-key constants and associated values.

<a id="return-value"></a>

## Return Value

The receiver’s property for the key `key`.

## See Also

### Configuring Streams

- [setProperty:forKey:](setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.
- [delegate](delegate.md): Sets the receiver’s delegate.
