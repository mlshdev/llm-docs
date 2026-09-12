> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srsupplementalcategory](https://developer.apple.com/documentation/sensorkit/srsupplementalcategory)

# SRSupplementalCategory (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A more detailed category that provides additional context to the app category.

## Declaration

```swift
class SRSupplementalCategory
```

<a id="overview"></a>

## Overview

Use a supplemental category to interpret the detailed relationships of app usage data within a [SRDeviceUsageReport](srdeviceusagereport.md). The device usage report contains high level primary categories defined by the [SRDeviceUsageReport.CategoryKey](srdeviceusagereport/categorykey.md), which are then broken down into more specific descriptions with the supplemental category. Each category maps to a unique [identifier](srsupplementalcategory/identifier.md), which you can access with the [supplementalCategories](srdeviceusagereport/applicationusage/supplementalcategories.md) property and group the app usage relationships.

Use this [table](https://developer.apple.com/download/files/SRSupplementalCategoryTable.zip) to access this supplemental category. It’s organized with the identifier that maps to a set of related words called *representative words*. For example, if you’re tracking usage within apps in the Games category, use the cluster UUID with representative words like *puzzle*, *gameplay*, *addictive*, and so on to track the specific types of apps and common descriptions within Games.

> **Note**

> These representative words are subject to change in future releases, that’s why each table is associated with a version number that helps you keep track of the categories you use.

## Topics

### Identifying the category

- [identifier](srsupplementalcategory/identifier.md): A unique identifier for the supplemental category.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the App

- [bundleIdentifier](srdeviceusagereport/applicationusage/bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](srdeviceusagereport/applicationusage/reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](srdeviceusagereport/applicationusage/supplementalcategories.md): Categories that provide more information about an app.

# SRSupplementalCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

A more detailed category that provides additional context to the app category.

## Declaration

```objectivec
@interface SRSupplementalCategory : NSObject
```

<a id="overview"></a>

## Overview

Use a supplemental category to interpret the detailed relationships of app usage data within a [SRDeviceUsageReport](srdeviceusagereport.md). The device usage report contains high level primary categories defined by the [SRDeviceUsageCategoryKey](srdeviceusagereport/categorykey.md), which are then broken down into more specific descriptions with the supplemental category. Each category maps to a unique [identifier](srsupplementalcategory/identifier.md), which you can access with the [supplementalCategories](srdeviceusagereport/applicationusage/supplementalcategories.md) property and group the app usage relationships.

Use this [table](https://developer.apple.com/download/files/SRSupplementalCategoryTable.zip) to access this supplemental category. It’s organized with the identifier that maps to a set of related words called *representative words*. For example, if you’re tracking usage within apps in the Games category, use the cluster UUID with representative words like *puzzle*, *gameplay*, *addictive*, and so on to track the specific types of apps and common descriptions within Games.

> **Note**

> These representative words are subject to change in future releases, that’s why each table is associated with a version number that helps you keep track of the categories you use.

## Topics

### Identifying the category

- [identifier](srsupplementalcategory/identifier.md): A unique identifier for the supplemental category.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Identifying the App

- [bundleIdentifier](srdeviceusagereport/applicationusage/bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](srdeviceusagereport/applicationusage/reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](srdeviceusagereport/applicationusage/supplementalcategories.md): Categories that provide more information about an app.
