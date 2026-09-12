> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvaluemenopausalstate](https://developer.apple.com/documentation/healthkit/hkcategoryvaluemenopausalstate)

# HKCategoryValueMenopausalState (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that indicates the menopausal state at a recorded point in time.

## Declaration

```swift
enum HKCategoryValueMenopausalState
```

## Mentioned In

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)

<a id="overview"></a>

## Overview

Use these values when creating [HKCategorySample](hkcategorysample.md) instances with the [menopausalState](hkcategorytypeidentifier/menopausalstate.md) type. Each value records a person’s menopausal state at a specific date. Apps can query multiple samples over time to derive higher-level interpretations such as active periods, transitions, or current state.

## Topics

### Specifying a menopausal state value

- [HKCategoryValueMenopausalState.menopause](hkcategoryvaluemenopausalstate/menopause.md): A value that indicates the person is in menopause at the sample date.
- [HKCategoryValueMenopausalState.perimenopause](hkcategoryvaluemenopausalstate/perimenopause.md): A value that indicates the person is in perimenopause at the sample date.
- [HKCategoryValueMenopausalState.none](hkcategoryvaluemenopausalstate/none.md): A value that indicates no menopausal state applies at the sample date.

### Creating a value

- [init(rawValue:)](hkcategoryvaluemenopausalstate/init%28rawvalue_%29.md): Initializes information about menopausal state.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKCategoryValuePredicateProviding](hkcategoryvaluepredicateproviding.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Menopause

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [menopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [bleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.

# HKCategoryValueMenopausalState (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A value that indicates the menopausal state at a recorded point in time.

## Declaration

```objectivec
enum HKCategoryValueMenopausalState : NSInteger;
```

## Mentioned In

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md)

<a id="overview"></a>

## Overview

Use these values when creating [HKCategorySample](hkcategorysample.md) instances with the [HKCategoryTypeIdentifierMenopausalState](hkcategorytypeidentifier/menopausalstate.md) type. Each value records a person’s menopausal state at a specific date. Apps can query multiple samples over time to derive higher-level interpretations such as active periods, transitions, or current state.

## Topics

### Specifying a menopausal state value

- [HKCategoryValueMenopausalStateMenopause](hkcategoryvaluemenopausalstate/menopause.md): A value that indicates the person is in menopause at the sample date.
- [HKCategoryValueMenopausalStatePerimenopause](hkcategoryvaluemenopausalstate/perimenopause.md): A value that indicates the person is in perimenopause at the sample date.
- [HKCategoryValueMenopausalStateNone](hkcategoryvaluemenopausalstate/none.md): A value that indicates no menopausal state applies at the sample date.

## See Also

### Menopause

- [Recording and querying menopausal state](recording-and-querying-menopausal-state.md): Personalize someone’s experience on a health app by tracking the information they record on menopausal state.
- [HKCategoryTypeIdentifierMenopausalState](hkcategorytypeidentifier/menopausalstate.md): An identifier for samples that record a person’s menopausal state.
- [HKCategoryTypeIdentifierBleedingAfterMenopause](hkcategorytypeidentifier/bleedingaftermenopause.md): An identifier for samples that record bleeding after menopause.
