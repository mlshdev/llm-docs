> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/larightstore/shared

# shared (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A shared object that stores rights.

## Declaration

```swift
class var shared: LARightStore { get }
```

## See Also

### Accessing rights

- [right(forIdentifier:completion:)](right%28foridentifier_completion_%29.md): Fetches a previously stored right from the shared right store.

# sharedStore (Objective-C)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A shared object that stores rights.

## Declaration

```objectivec
@property (class, readonly) LARightStore * sharedStore;
```

## See Also

### Accessing rights

- [rightForIdentifier:completion:](right%28foridentifier_completion_%29.md): Fetches a previously stored right from the shared right store.
