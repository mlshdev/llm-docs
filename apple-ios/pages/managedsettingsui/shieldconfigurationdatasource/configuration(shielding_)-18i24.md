> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettingsui/shieldconfigurationdatasource/configuration(shielding:)-18i24

# configuration(shielding:)

**Framework:** Managed Settings UI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Requests a configuration to use for a shield that covers a website.

## Declaration

```swift
func configuration(shielding webDomain: WebDomain) -> ShieldConfiguration
```

## Parameters

- `webDomain`: The website that the shield covers.

<a id="return-value"></a>

## Return Value

The shield to display.

## See Also

### Styling a website shield

- [configuration(shielding:in:)](configuration%28shielding_in_%29-6n6rd.md): Requests a configuration to use for a shield that covers a website because of its category.
