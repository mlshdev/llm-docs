> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/hazardtrackingmodetracked](https://developer.apple.com/documentation/metal/mtlresourceoptions/hazardtrackingmodetracked)

# hazardTrackingModeTracked (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.

## Declaration

```swift
static var hazardTrackingModeTracked: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

For more information, see [MTLHazardTrackingMode.tracked](../mtlhazardtrackingmode/tracked.md).

## See Also

### Specifying hazard tracking

- [hazardTrackingModeUntracked](hazardtrackingmodeuntracked.md): A resource option that instructs Metal to ignore memory hazards for a resource at runtime.

# MTLResourceHazardTrackingModeTracked (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.

## Declaration

```objectivec
MTLResourceHazardTrackingModeTracked
```

<a id="discussion"></a>

## Discussion

For more information, see [MTLHazardTrackingModeTracked](../mtlhazardtrackingmode/tracked.md).

## See Also

### Specifying hazard tracking

- [MTLResourceHazardTrackingModeDefault](mtlresourcehazardtrackingmodedefault.md): An option specifying that the default tracking mode should be used.
- [MTLResourceHazardTrackingModeUntracked](hazardtrackingmodeuntracked.md): A resource option that instructs Metal to ignore memory hazards for a resource at runtime.
