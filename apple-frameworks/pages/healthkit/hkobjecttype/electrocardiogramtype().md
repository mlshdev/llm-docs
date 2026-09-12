> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/electrocardiogramtype()](https://developer.apple.com/documentation/healthkit/hkobjecttype/electrocardiogramtype())

# electrocardiogramType() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the shared electrocardiogram type.

## Declaration

```swift
class func electrocardiogramType() -> HKElectrocardiogramType
```

<a id="return-value"></a>

## Return Value

The shared [HKElectrocardiogramType](../hkelectrocardiogramtype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKElectrocardiogramType](../hkelectrocardiogramtype.md) concrete subclass. Use this type to request permission to read [HKElectrocardiogram](../hkelectrocardiogram.md) objects from the HealthKit store.

> **Note**

>  You can’t request permission to share [HKActivitySummary](../hkactivitysummary.md) objects.

# electrocardiogramType (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Returns the shared electrocardiogram type.

## Declaration

```objectivec
+ (HKElectrocardiogramType *) electrocardiogramType;
```

<a id="return-value"></a>

## Return Value

The shared [HKElectrocardiogramType](../hkelectrocardiogramtype.md) instance.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKElectrocardiogramType](../hkelectrocardiogramtype.md) concrete subclass. Use this type to request permission to read [HKElectrocardiogram](../hkelectrocardiogram.md) objects from the HealthKit store.

> **Note**

>  You can’t request permission to share [HKActivitySummary](../hkactivitysummary.md) objects.
