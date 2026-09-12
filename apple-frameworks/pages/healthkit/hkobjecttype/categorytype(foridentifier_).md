> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/categorytype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/categorytype(foridentifier:))

# categoryType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the shared category type for the provided identifier.

## Declaration

```swift
class func categoryType(forIdentifier identifier: HKCategoryTypeIdentifier) -> HKCategoryType?
```

## Parameters

- `identifier`: A category type identifier. For a list of valid identifiers, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKCategoryType` instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCategoryType](../hkcategorytype.md) concrete subclass. HealthKit uses category types to represent data that can be categorized into an enumeration of values. Use category type instances to create category samples that you can then save in the HealthKit store. For more information, see [HKCategorySample](../hkcategorysample.md).

## See Also

### Creating category types

- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.

# categoryTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared category type for the provided identifier.

## Declaration

```objectivec
+ (HKCategoryType *) categoryTypeForIdentifier:(HKCategoryTypeIdentifier) identifier;
```

## Parameters

- `identifier`: A category type identifier. For a list of valid identifiers, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKCategoryType` instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCategoryType](../hkcategorytype.md) concrete subclass. HealthKit uses category types to represent data that can be categorized into an enumeration of values. Use category type instances to create category samples that you can then save in the HealthKit store. For more information, see [HKCategorySample](../hkcategorysample.md).

## See Also

### Creating category types

- [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md): Identifiers for creating category types.
