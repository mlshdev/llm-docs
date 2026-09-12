> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:in:)-ia14](https://developer.apple.com/documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:in:)-ia14)

# configuration(shielding:in:)

**Framework:** Managed Settings UI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Requests a configuration to use for a shield that covers an application because of its category.

## Declaration

```swift
func configuration(shielding application: Application, in category: ActivityCategory) -> ShieldConfiguration
```

## Parameters

- `application`: The application the shield covers.
- `category`: The category of the application that the shield covers.

<a id="return-value"></a>

## Return Value

The shield to display.

## See Also

### Styling an application shield

- [configuration(shielding:)](configuration%28shielding_%29-5uqm1.md): Requests a configuration to use for a shield that covers an application.
