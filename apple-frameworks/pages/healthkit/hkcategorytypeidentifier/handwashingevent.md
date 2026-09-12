> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategorytypeidentifier/handwashingevent](https://developer.apple.com/documentation/healthkit/hkcategorytypeidentifier/handwashingevent)

# handwashingEvent (Swift)

**Framework:** HealthKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A category sample type for handwashing events.

## Declaration

```swift
static let handwashingEvent: HKCategoryTypeIdentifier
```

<a id="Discussion"></a>

## Discussion

Use this type to read or share handwashing events. When creating a handwashing event sample, set the value to [HKCategoryValue.notApplicable](../hkcategoryvalue/notapplicable.md), and set the duration by specifying different start and end dates. The Health app uses the sample’s duration to determine if the handwashing event completed.

Apple Watch automatically detects and records handwashing events on Apple Watch Series 4 and later.

## See Also

### Self care

- [toothbrushingEvent](toothbrushingevent.md): A category sample type for toothbrushing events.

# HKCategoryTypeIdentifierHandwashingEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

A category sample type for handwashing events.

## Declaration

```objectivec
extern HKCategoryTypeIdentifier const HKCategoryTypeIdentifierHandwashingEvent;
```

<a id="Discussion"></a>

## Discussion

Use this type to read or share handwashing events. When creating a handwashing event sample, set the value to [HKCategoryValueNotApplicable](../hkcategoryvalue/notapplicable.md), and set the duration by specifying different start and end dates. The Health app uses the sample’s duration to determine if the handwashing event completed.

Apple Watch automatically detects and records handwashing events on Apple Watch Series 4 and later.

## See Also

### Self care

- [HKCategoryTypeIdentifierToothbrushingEvent](toothbrushingevent.md): A category sample type for toothbrushing events.
