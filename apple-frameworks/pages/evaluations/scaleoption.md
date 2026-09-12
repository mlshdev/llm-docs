> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scaleoption](https://developer.apple.com/documentation/evaluations/scaleoption)

# ScaleOption

**Framework:** Evaluations  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A single option in a scoring scale.

## Declaration

```swift
struct ScaleOption
```

<a id="overview"></a>

## Overview

```swift
let option = ScaleOption(
    label: "Excellent",
    guideDescription: "The response is of exceptional quality.",
    value: 5.0
)
```

Each option defines a label, guide description, and numeric value. Options are presented to the model judge in the scoring guide section of the prompt.

## Topics

### Initializers

- [init(label:guideDescription:value:)](scaleoption/init%28label_guidedescription_value_%29.md): Creates a scale option.

### Instance Properties

- [guideDescription](scaleoption/guidedescription.md): Rubric guidance that the model judge references for this option.
- [label](scaleoption/label.md): A short label for this option, such as “excellent”, “pass”, or “5”.
- [value](scaleoption/value.md): The numeric value for this option, used for metric aggregation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a scale

- [options](scoringscale/options.md): The scale options, ordered from highest to lowest value.
