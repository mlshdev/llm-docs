> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/os/osallocatedunfairlock/lock()

# lock()

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Acquires a lock.

## Declaration

```swift
func lock()
```

## See Also

### Using locks

- [lockIfAvailable()](lockifavailable%28%29.md): Conforms when `State` is `()`. Attempts to acquire a lock.
- [unlock()](unlock%28%29.md): Conforms when `State` is `()`. Ends the lock.
