> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsset/init(set:)-7a7ws

# init(set:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated set and adds to it objects from another given set.

## Declaration

```swift
@nonobjc convenience init(set anSet: NSSet)
```

<a id="return-value"></a>

## Return Value

An initialized objects set containing the objects from `set`. The returned set might be different than the original receiver.
