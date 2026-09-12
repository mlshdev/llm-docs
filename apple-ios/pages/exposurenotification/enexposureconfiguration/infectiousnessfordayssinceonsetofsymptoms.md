> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enexposureconfiguration/infectiousnessfordayssinceonsetofsymptoms](https://developer.apple.com/documentation/exposurenotification/enexposureconfiguration/infectiousnessfordayssinceonsetofsymptoms)

# infectiousnessForDaysSinceOnsetOfSymptoms (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The mapping between the days since onset of symptoms to the degree of infectiousness.

> No longer supported.

## Declaration

```swift
var infectiousnessForDaysSinceOnsetOfSymptoms: [NSNumber : NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

The dictionary key is the day since the onset of symptoms. The corresponding value is an [ENInfectiousness](../eninfectiousness.md) value. When the day is not known, use [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md) as the dictionary key, like this:

```swift
infectiousnessForDaysSinceOnsetOfSymptoms[ENDaysSinceOnsetOfSymptionsUnknown] = 
        infectiousnessHighWeight;
```

You can’t change this property more often than once per week. During development, you can remove this limitation by adding the test entitlement `com.apple.developer.exposure-notification-test` to your project.

> **Note**

>  You must set this property when using the version 2 scoring algorithm.

## See Also

### Configuring Infectiousness

- [infectiousnessHighWeight](infectiousnesshighweight.md): Deprecated. The weight to apply for severe infectiousness.
- [infectiousnessStandardWeight](infectiousnessstandardweight.md): Deprecated. The weight to apply for mild infectiousness.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.

# infectiousnessForDaysSinceOnsetOfSymptoms (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The mapping between the days since onset of symptoms to the degree of infectiousness.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSNumber *,NSNumber *> * infectiousnessForDaysSinceOnsetOfSymptoms;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property is available in iOS 12.5, and in iOS 13.7 and later.

The dictionary key is the day since the onset of symptoms. The corresponding value is an [ENInfectiousness](../eninfectiousness.md) value. When the day is not known, use [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md) as the dictionary key, like this:

```swift
infectiousnessForDaysSinceOnsetOfSymptoms[ENDaysSinceOnsetOfSymptionsUnknown] = 
        infectiousnessHighWeight;
```

You can’t change this property more often than once per week. During development, you can remove this limitation by adding the test entitlement `com.apple.developer.exposure-notification-test` to your project.

> **Note**

>  You must set this property when using the version 2 scoring algorithm.

## See Also

### Configuring Infectiousness

- [infectiousnessHighWeight](infectiousnesshighweight.md): Deprecated. The weight to apply for severe infectiousness.
- [infectiousnessStandardWeight](infectiousnessstandardweight.md): Deprecated. The weight to apply for mild infectiousness.
- [ENDaysSinceOnsetOfSymptomsUnknown](../endayssinceonsetofsymptomsunknown.md): Deprecated. A value used when the number of days since onset of symptoms is unknown.
