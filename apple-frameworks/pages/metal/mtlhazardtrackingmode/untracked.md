> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlhazardtrackingmode/untracked](https://developer.apple.com/documentation/metal/mtlhazardtrackingmode/untracked)

# MTLHazardTrackingMode.untracked (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An option that disables automatic memory hazard tracking in Metal for a resource at runtime.

## Declaration

```swift
case untracked
```

<a id="discussion"></a>

## Discussion

Create resources with this option when you’re managing resource synchronization. Metal doesn’t track memory dependencies for untracked resources, which means you’re responsible for ensuring that commands access those resources safely with barriers, fences, or events.

Untracked resources can improve runtime performance when you have detailed knowledge of how your app manages resource dependencies and can manually synchronize access more efficiently than with automatic tracking in Metal.

For more information about hazard tracking and synchronization trade-offs, see [MTLHazardTrackingMode](../mtlhazardtrackingmode.md).

## See Also

### Selecting the tracking mode

- [MTLHazardTrackingMode.default](default.md): An option that applies the default tracking behavior in Metal based on the resource or heap type you’re creating.
- [MTLHazardTrackingMode.tracked](tracked.md): An option that directs Metal to apply runtime safeguards that prevent memory hazards when commands access a resource.

# MTLHazardTrackingModeUntracked (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An option that disables automatic memory hazard tracking in Metal for a resource at runtime.

## Declaration

```objectivec
MTLHazardTrackingModeUntracked
```

<a id="discussion"></a>

## Discussion

Create resources with this option when you’re managing resource synchronization. Metal doesn’t track memory dependencies for untracked resources, which means you’re responsible for ensuring that commands access those resources safely with barriers, fences, or events.

Untracked resources can improve runtime performance when you have detailed knowledge of how your app manages resource dependencies and can manually synchronize access more efficiently than with automatic tracking in Metal.

For more information about hazard tracking and synchronization trade-offs, see [MTLHazardTrackingMode](../mtlhazardtrackingmode.md).

## See Also

### Selecting the tracking mode

- [MTLHazardTrackingModeDefault](default.md): An option that applies the default tracking behavior in Metal based on the resource or heap type you’re creating.
- [MTLHazardTrackingModeTracked](tracked.md): An option that directs Metal to apply runtime safeguards that prevent memory hazards when commands access a resource.
