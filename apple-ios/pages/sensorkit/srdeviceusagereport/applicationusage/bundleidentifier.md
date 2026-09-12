> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/applicationusage/bundleidentifier](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The bundle identifier of the app in use.

## Declaration

```swift
var bundleIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The framework sets a value for this property only if the bundle identifier corresponds to an Apple app. Otherwise, you can correlate the app by using the [reportApplicationIdentifier](reportapplicationidentifier.md) property.

## See Also

### Identifying the App

- [reportApplicationIdentifier](reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](supplementalcategories.md): Categories that provide more information about an app.
- [SRSupplementalCategory](../../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.

# bundleIdentifier (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The bundle identifier of the app in use.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

The framework sets a value for this property only if the bundle identifier corresponds to an Apple app. Otherwise, you can correlate the app by using the [reportApplicationIdentifier](reportapplicationidentifier.md) property.

## See Also

### Identifying the App

- [reportApplicationIdentifier](reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](supplementalcategories.md): Categories that provide more information about an app.
- [SRSupplementalCategory](../../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.
