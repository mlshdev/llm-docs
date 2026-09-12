> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/activitysummarytype()](https://developer.apple.com/documentation/healthkit/hkobjecttype/activitysummarytype())

# activitySummaryType() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns the shared activity summary type.

## Declaration

```swift
class func activitySummaryType() -> HKActivitySummaryType
```

<a id="return-value"></a>

## Return Value

The shared [HKActivitySummaryType](../hkactivitysummarytype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKActivitySummaryType](../hkactivitysummarytype.md) concrete subclass. Use this type to request permission to read [HKActivitySummary](../hkactivitysummary.md) objects from the HealthKit store.

> **Note**

>  You cannot request permission to share [HKActivitySummary](../hkactivitysummary.md) objects.

# activitySummaryType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Returns the shared activity summary type.

## Declaration

```objectivec
+ (HKActivitySummaryType *) activitySummaryType;
```

<a id="return-value"></a>

## Return Value

The shared [HKActivitySummaryType](../hkactivitysummarytype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKActivitySummaryType](../hkactivitysummarytype.md) concrete subclass. Use this type to request permission to read [HKActivitySummary](../hkactivitysummary.md) objects from the HealthKit store.

> **Note**

>  You cannot request permission to share [HKActivitySummary](../hkactivitysummary.md) objects.
