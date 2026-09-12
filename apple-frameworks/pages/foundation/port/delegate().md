> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/port/delegate()](https://developer.apple.com/documentation/foundation/port/delegate())

# delegate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s delegate.

## Declaration

```swift
func delegate() -> (any PortDelegate)?
```

<a id="return-value"></a>

## Return Value

The receiver’s delegate.

## See Also

### Working with the delegate

- [setDelegate(\_:)](setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the receiver’s delegate.

## Declaration

```objectivec
- (id<NSPortDelegate>) delegate;
```

<a id="return-value"></a>

## Return Value

The receiver’s delegate.

## See Also

### Working with the delegate

- [setDelegate:](setdelegate%28__%29.md): Sets the receiver’s delegate to a given object.
