> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/sirisettings/denysiri-swift.property

# denySiri

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent access to Siri.

## Declaration

```swift
var denySiri: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Restricting Siri usage

- [denySiri](denysiri-swift.type.property.md): The metadata for the constraint that configures access to Siri.
