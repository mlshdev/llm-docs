> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcorrelationtypeidentifier](https://developer.apple.com/documentation/healthkit/hkcorrelationtypeidentifier)

# HKCorrelationTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create correlation type objects.

## Declaration

```swift
struct HKCorrelationTypeIdentifier
```

<a id="overview"></a>

## Overview

To create an [HKCorrelationType](hkcorrelationtype.md) instance, pass an [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md) value to the [correlationType(forIdentifier:)](hkobjecttype/correlationtype%28foridentifier_%29.md) method.

## Topics

### Correlation Types

- [bloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [food](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.

### Initializers

- [init(rawValue:)](hkcorrelationtypeidentifier/init%28rawvalue_%29.md): Returns a newly initialized correlation type identifier using the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating correlation types

- [correlationType(forIdentifier:)](hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.

# HKCorrelationTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers that create correlation type objects.

## Declaration

```objectivec
typedef NSString * HKCorrelationTypeIdentifier;
```

<a id="overview"></a>

## Overview

To create an [HKCorrelationType](hkcorrelationtype.md) instance, pass an [HKCorrelationTypeIdentifier](hkcorrelationtypeidentifier.md) value to the [correlationTypeForIdentifier:](hkobjecttype/correlationtype%28foridentifier_%29.md) method.

## Topics

### Correlation Types

- [HKCorrelationTypeIdentifierBloodPressure](hkcorrelationtypeidentifier/bloodpressure.md): A correlation sample that combines a systolic sample and a diastolic sample into a single blood pressure reading.
- [HKCorrelationTypeIdentifierFood](hkcorrelationtypeidentifier/food.md): Food correlation types combine any number of nutritional samples into a single food object.

## See Also

### Creating correlation types

- [correlationTypeForIdentifier:](hkobjecttype/correlationtype%28foridentifier_%29.md): Deprecated. Returns the shared correlation type for the provided identifier.
