> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/try()](https://developer.apple.com/documentation/foundation/nsdistributedlock/try())

# try() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to acquire the receiver and immediately returns a Boolean value that indicates whether the attempt was successful.

## Declaration

```swift
func `try`() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attempt to acquire the receiver was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Raises `NSGenericException` if a file-system error occurs.

## See Also

### Related Documentation

- [unlock()](unlock%28%29.md): Relinquishes the receiver.

# tryLock (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Attempts to acquire the receiver and immediately returns a Boolean value that indicates whether the attempt was successful.

## Declaration

```objectivec
- (BOOL) tryLock;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the attempt to acquire the receiver was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Raises `NSGenericException` if a file-system error occurs.

## See Also

### Related Documentation

- [unlock](unlock%28%29.md): Relinquishes the receiver.
