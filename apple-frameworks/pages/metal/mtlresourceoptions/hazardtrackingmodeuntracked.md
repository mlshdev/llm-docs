> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/hazardtrackingmodeuntracked](https://developer.apple.com/documentation/metal/mtlresourceoptions/hazardtrackingmodeuntracked)

# hazardTrackingModeUntracked (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A resource option that instructs Metal to ignore memory hazards for a resource at runtime.

## Declaration

```swift
static var hazardTrackingModeUntracked: MTLResourceOptions { get }
```

<a id="discussion"></a>

## Discussion

For more information, see [MTLHazardTrackingMode.untracked](../mtlhazardtrackingmode/untracked.md).

## See Also

### Specifying hazard tracking

- [hazardTrackingModeTracked](hazardtrackingmodetracked.md): An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.

# MTLResourceHazardTrackingModeUntracked (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A resource option that instructs Metal to ignore memory hazards for a resource at runtime.

## Declaration

```objectivec
MTLResourceHazardTrackingModeUntracked
```

<a id="discussion"></a>

## Discussion

For more information, see [MTLHazardTrackingModeUntracked](../mtlhazardtrackingmode/untracked.md).

## See Also

### Specifying hazard tracking

- [MTLResourceHazardTrackingModeDefault](mtlresourcehazardtrackingmodedefault.md): An option specifying that the default tracking mode should be used.
- [MTLResourceHazardTrackingModeTracked](hazardtrackingmodetracked.md): An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.
