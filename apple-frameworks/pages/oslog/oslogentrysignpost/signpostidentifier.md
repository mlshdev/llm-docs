> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/oslog/oslogentrysignpost/signpostidentifier

# signpostIdentifier (Swift)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The signpost’s identifier.

## Declaration

```swift
var signpostIdentifier: os_signpost_id_t { get }
```

## See Also

### Accessing Signpost Details

- [signpostName](signpostname.md): The signpost’s name.

# signpostIdentifier (Objective-C)

**Framework:** OSLog  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The signpost’s identifier.

## Declaration

```objectivec
@property (nonatomic, readonly) os_signpost_id_t signpostIdentifier;
```

## See Also

### Accessing Signpost Details

- [signpostName](signpostname.md): The signpost’s name.
