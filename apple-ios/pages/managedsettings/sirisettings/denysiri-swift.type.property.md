> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/sirisettings/denysiri-swift.type.property

# denySiri

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the constraint that configures access to Siri.

## Declaration

```swift
static let denySiri: SettingMetadata<Bool>
```

<a id="discussion"></a>

## Discussion

Use `denySiri`  to access the metadata for [denySiri](denysiri-swift.property.md). The default value is `false`.

## See Also

### Restricting Siri usage

- [denySiri](denysiri-swift.property.md): A Boolean value that indicates whether to prevent access to Siri.
