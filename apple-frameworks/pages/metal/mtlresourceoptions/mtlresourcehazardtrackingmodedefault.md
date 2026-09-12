> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourceoptions/mtlresourcehazardtrackingmodedefault](https://developer.apple.com/documentation/metal/mtlresourceoptions/mtlresourcehazardtrackingmodedefault)

# MTLResourceHazardTrackingModeDefault

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An option specifying that the default tracking mode should be used.

## Declaration

```objectivec
MTLResourceHazardTrackingModeDefault
```

<a id="discussion"></a>

## Discussion

For more information, see [MTLHazardTrackingModeDefault](../mtlhazardtrackingmode/default.md).

## See Also

### Specifying hazard tracking

- [MTLResourceHazardTrackingModeTracked](hazardtrackingmodetracked.md): An option that instructs Metal to apply safeguards for a resource at runtime to avoid memory hazards for the applicable commands.
- [MTLResourceHazardTrackingModeUntracked](hazardtrackingmodeuntracked.md): A resource option that instructs Metal to ignore memory hazards for a resource at runtime.
