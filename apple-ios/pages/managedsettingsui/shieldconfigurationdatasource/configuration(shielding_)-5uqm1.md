> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:)-5uqm1](https://developer.apple.com/documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:)-5uqm1)

# configuration(shielding:)

**Framework:** Managed Settings UI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Requests a configuration to use for a shield that covers an application.

## Declaration

```swift
func configuration(shielding application: Application) -> ShieldConfiguration
```

## Parameters

- `application`: The application the shield covers.

<a id="return-value"></a>

## Return Value

The shield to display.

## See Also

### Styling an application shield

- [configuration(shielding:in:)](configuration%28shielding_in_%29-ia14.md): Requests a configuration to use for a shield that covers an application because of its category.
