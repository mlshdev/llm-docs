> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/menopausalstate](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/menopausalstate)

# menopausalState (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An identifier for samples that record a person’s menopausal state.

## Declaration

```swift
static let menopausalState: HKCategoryTypeIdentifier
```

## Mentioned In

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md)

<a id="discussion"></a>

## Discussion

Use this category type to record which menopausal state applies at a specific point in time. Each sample is a point-in-time entry where the start date equals the end date, and the value is one of the [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md) cases: [HKCategoryValueMenopausalState.menopause](../hkcategoryvaluemenopausalstate/menopause.md), [HKCategoryValueMenopausalState.perimenopause](../hkcategoryvaluemenopausalstate/perimenopause.md), or [HKCategoryValueMenopausalState.none](../hkcategoryvaluemenopausalstate/none.md).

Apps can interpret these point-in-time samples as state changes, confirmations that a state applied at a particular date, or both. When creating a menopausal state sample, the framework requires that the start date and end date be identical. Attempting to save a sample where these dates differ results in an error.

## See Also

### Menopause

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [bleedingAfterMenopause](bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.

# HKCategoryTypeIdentifierMenopausalState (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An identifier for samples that record a person’s menopausal state.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierMenopausalState;
```

## Mentioned In

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md)

<a id="discussion"></a>

## Discussion

Use this category type to record which menopausal state applies at a specific point in time. Each sample is a point-in-time entry where the start date equals the end date, and the value is one of the [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md) cases: [HKCategoryValueMenopausalStateMenopause](../hkcategoryvaluemenopausalstate/menopause.md), [HKCategoryValueMenopausalStatePerimenopause](../hkcategoryvaluemenopausalstate/perimenopause.md), or [HKCategoryValueMenopausalStateNone](../hkcategoryvaluemenopausalstate/none.md).

Apps can interpret these point-in-time samples as state changes, confirmations that a state applied at a particular date, or both. When creating a menopausal state sample, the framework requires that the start date and end date be identical. Attempting to save a sample where these dates differ results in an error.

## See Also

### Menopause

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [HKCategoryTypeIdentifierBleedingAfterMenopause](bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
- [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.
