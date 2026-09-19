> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/audiomixgroupscomponent/init(mixgroups:)

# init(mixGroups:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Initializes an `AudioMixGroupsComponent`.

## Declaration

```swift
init(mixGroups: [AudioMixGroup] = [])
```

<a id="discussion"></a>

## Discussion

> **Important**

> If more than one audio mix group have matching names, only one will be used.
