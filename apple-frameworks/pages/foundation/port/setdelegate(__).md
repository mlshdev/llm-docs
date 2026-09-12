> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/setdelegate(_:)](https://developer.apple.com/documentation/foundation/port/setdelegate(_:))

# setDelegate(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiver’s delegate to a given object.

## Declaration

```swift
func setDelegate(_ anObject: (any PortDelegate)?)
```

## Parameters

- `anObject`: The delegate for the receiver.

## See Also

### Working with the delegate

- [delegate()](delegate%28%29.md): Returns the receiver’s delegate.

# setDelegate: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiver’s delegate to a given object.

## Declaration

```objectivec
- (void) setDelegate:(id<NSPortDelegate>) anObject;
```

## Parameters

- `anObject`: The delegate for the receiver.

## See Also

### Working with the delegate

- [delegate](delegate%28%29.md): Returns the receiver’s delegate.
