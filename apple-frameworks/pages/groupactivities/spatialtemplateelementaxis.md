> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementaxis](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementaxis)

# SpatialTemplateElementAxis

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An axis to use when aligning elements in a spatial template.

## Declaration

```swift
struct SpatialTemplateElementAxis
```

<a id="overview"></a>

## Overview

When configuring the elements of a spatial template, you can specify directions that orient a participant with the x- or z-axis of the shared coordinate space. These alignments rotate the participant around the y-axis to face the specified axis.

## Topics

### Type Properties

- [x](spatialtemplateelementaxis/x.md): The x-axis of alignment.
- [z](spatialtemplateelementaxis/z.md): The z-axis of alignment.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Looking along an axis

- [alignedWith(appAxis:)](spatialtemplateelementdirection/alignedwith%28appaxis_%29.md): Creates a direction that orients the participant to look along the specified axis in the direction of the app’s content.
