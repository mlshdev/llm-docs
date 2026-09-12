> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/bleedingaftermenopause](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/bleedingaftermenopause)

# bleedingAfterMenopause (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An identifier for samples that record bleeding after menopause.

## Declaration

```swift
static let bleedingAfterMenopause: HKCategoryTypeIdentifier
```

<a id="discussion"></a>

## Discussion

Use this category type to record instances of bleeding that occur after menopause. After menopause, menstruation has ended, making this clinically distinct from menstrual flow or intermenstrual bleeding. Each sample represents an interval of bleeding and stores an intensity value using [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md).

For information about menopause state tracking, see [menopausalState](menopausalstate.md).

## See Also

### Menopause

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [menopausalState](menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.

# HKCategoryTypeIdentifierBleedingAfterMenopause (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An identifier for samples that record bleeding after menopause.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierBleedingAfterMenopause;
```

<a id="discussion"></a>

## Discussion

Use this category type to record instances of bleeding that occur after menopause. After menopause, menstruation has ended, making this clinically distinct from menstrual flow or intermenstrual bleeding. Each sample represents an interval of bleeding and stores an intensity value using [HKCategoryValueVaginalBleeding](../hkcategoryvaluevaginalbleeding.md).

For information about menopause state tracking, see [HKCategoryTypeIdentifierMenopausalState](menopausalstate.md).

## See Also

### Menopause

- [Recording and querying menopausal state](../recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [HKCategoryTypeIdentifierMenopausalState](menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [HKCategoryValueMenopausalState](../hkcategoryvaluemenopausalstate.md): A value that indicates the menopausal state at a recorded point in time.
