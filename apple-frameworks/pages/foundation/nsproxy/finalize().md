> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy/finalize()](https://developer.apple.com/documentation/foundation/nsproxy/finalize())

# finalize() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The garbage collector invokes this method on the receiver before disposing of the memory it uses.

## Declaration

```swift
func finalize()
```

<a id="Discussion"></a>

## Discussion

This method behaves as described in the `NSObject` class specification under the [finalize()](../../objectivec/nsobject-swift.class/finalize%28%29.md) instance method. Note that a `finalize` method must be thread-safe.

## See Also

### Related Documentation

- [dealloc()](dealloc%28%29.md): Deallocates the memory occupied by the receiver.

# finalize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The garbage collector invokes this method on the receiver before disposing of the memory it uses.

## Declaration

```objectivec
- (void) finalize;
```

<a id="Discussion"></a>

## Discussion

This method behaves as described in the `NSObject` class specification under the [finalize](../../objectivec/nsobject-swift.class/finalize%28%29.md) instance method. Note that a `finalize` method must be thread-safe.

## See Also

### Related Documentation

- [dealloc](dealloc%28%29.md): Deallocates the memory occupied by the receiver.
