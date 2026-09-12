> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/identifier](https://developer.apple.com/documentation/healthkit/hkobjecttype/identifier)

# identifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A unique string identifying the HealthKit object type.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Each object type has a unique identifier. The identifiers can be grouped into different categories: [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md), [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md), [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md), [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md), and [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md) Each group of identifiers is associated with a different concrete subclass of `HKObjectType`.

## See Also

### Getting property data

- [requiresPerObjectAuthorization()](requiresperobjectauthorization%28%29.md): Returns a Boolean that indicates whether the data type requires per-object authorization.

# identifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

A unique string identifying the HealthKit object type.

## Declaration

```objectivec
@property (strong, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Each object type has a unique identifier. The identifiers can be grouped into different categories: [HKQuantityTypeIdentifier](../hkquantitytypeidentifier.md), [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md), [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md), [HKCorrelationTypeIdentifier](../hkcorrelationtypeidentifier.md), and [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md) Each group of identifiers is associated with a different concrete subclass of `HKObjectType`.

## See Also

### Getting property data

- [requiresPerObjectAuthorization](requiresperobjectauthorization%28%29.md): Returns a Boolean that indicates whether the data type requires per-object authorization.
