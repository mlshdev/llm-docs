> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderpendingsetenumerator/refreshinterval

# refreshInterval (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The amount of time, in seconds, between updates to the pending set.

## Declaration

```swift
var refreshInterval: TimeInterval { get }
```

## See Also

### Accessing Refresh Data

- [domainVersion](domainversion.md): The domain version when the system last refreshed the pending set.

# refreshInterval (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The amount of time, in seconds, between updates to the pending set.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval refreshInterval;
```

## See Also

### Accessing Refresh Data

- [domainVersion](domainversion.md): The domain version when the system last refreshed the pending set.
