> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/osallocatedunfairlock/lockifavailable()](https://developer.apple.com/documentation/os/osallocatedunfairlock/lockifavailable())

# lockIfAvailable()

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Attempts to acquire a lock.

## Declaration

```swift
func lockIfAvailable() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Using locks

- [lock()](lock%28%29.md): Conforms when `State` is `()`. Acquires a lock.
- [unlock()](unlock%28%29.md): Conforms when `State` is `()`. Ends the lock.
