> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:in:)-6n6rd](https://developer.apple.com/documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:in:)-6n6rd)

# configuration(shielding:in:)

**Framework:** Managed Settings UI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Requests a configuration to use for a shield that covers a website because of its category.

## Declaration

```swift
func configuration(shielding webDomain: WebDomain, in category: ActivityCategory) -> ShieldConfiguration
```

## Parameters

- `webDomain`: The website that the shield covers.
- `category`: The category of the website that the shield covers.

<a id="return-value"></a>

## Return Value

The shield to display.

## See Also

### Styling a website shield

- [configuration(shielding:)](configuration%28shielding_%29-18i24.md): Requests a configuration to use for a shield that covers a website.
