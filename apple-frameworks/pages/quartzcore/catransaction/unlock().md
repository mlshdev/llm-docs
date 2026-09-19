> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/catransaction/unlock()

# unlock() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Relinquishes a previously acquired transaction lock.

## Declaration

```swift
class func unlock()
```

## See Also

### Managing Concurrency

- [lock()](lock%28%29.md): Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.

# unlock (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Relinquishes a previously acquired transaction lock.

## Declaration

```objectivec
+ (void) unlock;
```

## See Also

### Managing Concurrency

- [lock](lock%28%29.md): Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.
