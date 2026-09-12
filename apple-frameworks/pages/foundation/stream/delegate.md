> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/delegate](https://developer.apple.com/documentation/foundation/stream/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiver’s delegate.

## Declaration

```swift
unowned(unsafe) var delegate: (any StreamDelegate)? { get set }
```

## Parameters

- `delegate`: The delegate for the receiver.

<a id="Discussion"></a>

## Discussion

By default, a stream is its own delegate, and subclasses of `NSInputStream` and `NSOutputStream` must maintain this contract. If you override this method in a subclass, passing `nil` must restore the receiver as its own delegate. Delegates are not retained.

To learn about delegates and delegation, read “Delegation” in Cocoa Fundamentals Guide.

## See Also

### Configuring Streams

- [property(forKey:)](property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [setProperty(\_:forKey:)](setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Sets the receiver’s delegate.

## Declaration

```objectivec
@property (assign, nullable) id<NSStreamDelegate> delegate;
```

## Parameters

- `delegate`: The delegate for the receiver.

<a id="Discussion"></a>

## Discussion

By default, a stream is its own delegate, and subclasses of `NSInputStream` and `NSOutputStream` must maintain this contract. If you override this method in a subclass, passing `nil` must restore the receiver as its own delegate. Delegates are not retained.

To learn about delegates and delegation, read “Delegation” in Cocoa Fundamentals Guide.

## See Also

### Configuring Streams

- [propertyForKey:](property%28forkey_%29.md): Returns the receiver’s property for a given key.
- [setProperty:forKey:](setproperty%28__forkey_%29.md): Attempts to set the value of a given property of the receiver and returns a Boolean value that indicates whether the value is accepted by the receiver.
