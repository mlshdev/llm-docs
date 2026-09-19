> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileproviderpendingsetenumerator/domainversion

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain version when the system last refreshed the pending set.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion? { get }
```

<a id="Discussion"></a>

## Discussion

The system sets this property when you call the enumerator’s methods. The value is initially `nil`.

## See Also

### Accessing Refresh Data

- [refreshInterval](refreshinterval.md): The amount of time, in seconds, between updates to the pending set.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain version when the system last refreshed the pending set.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomainVersion * domainVersion;
```

<a id="Discussion"></a>

## Discussion

The system sets this property when you call the enumerator’s methods. The value is initially `nil`.

## See Also

### Accessing Refresh Data

- [refreshInterval](refreshinterval.md): The amount of time, in seconds, between updates to the pending set.
