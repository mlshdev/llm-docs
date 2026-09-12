> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/correlationtype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/correlationtype(foridentifier:))

# correlationType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the shared correlation type for the provided identifier.

## Declaration

```swift
class func correlationType(forIdentifier identifier: HKCorrelationTypeIdentifier) -> HKCorrelationType?
```

## Parameters

- `identifier`: A correlation type identifier. For a list of valid identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKCorrelationType](../hkcorrelationtype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCorrelationType](../hkcorrelationtype.md) concrete subclass. HealthKit uses correlation types to create complex data objects that contain multiple values. Use correlation type instances to create correlation objects that you can save in the HealthKit store. For more information, see [HKCorrelation](../hkcorrelation.md).

## See Also

### Creating correlation types

- [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.

# correlationTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared correlation type for the provided identifier.

## Declaration

```objectivec
+ (HKCorrelationType *) correlationTypeForIdentifier:(HKCorrelationTypeIdentifier) identifier;
```

## Parameters

- `identifier`: A correlation type identifier. For a list of valid identifiers, see [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKCorrelationType](../hkcorrelationtype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCorrelationType](../hkcorrelationtype.md) concrete subclass. HealthKit uses correlation types to create complex data objects that contain multiple values. Use correlation type instances to create correlation objects that you can save in the HealthKit store. For more information, see [HKCorrelation](../hkcorrelation.md).

## See Also

### Creating correlation types

- [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md): The identifiers that create correlation type objects.
