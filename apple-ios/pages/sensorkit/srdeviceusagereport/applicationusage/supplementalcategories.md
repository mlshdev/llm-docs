> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/applicationusage/supplementalcategories](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage/supplementalcategories)

# supplementalCategories (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Categories that provide more information about an app.

## Declaration

```swift
var supplementalCategories: [SRSupplementalCategory] { get }
```

## See Also

### Identifying the App

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [SRSupplementalCategory](../../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.

# supplementalCategories (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Categories that provide more information about an app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<SRSupplementalCategory *> * supplementalCategories;
```

## See Also

### Identifying the App

- [bundleIdentifier](bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [SRSupplementalCategory](../../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.
