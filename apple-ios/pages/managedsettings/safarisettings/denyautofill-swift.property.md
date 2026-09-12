> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/safarisettings/denyautofill-swift.property](https://developer.apple.com/documentation/managedsettings/safarisettings/denyautofill-swift.property)

# denyAutoFill

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether Safari’s AutoFill feature is active.

## Declaration

```swift
var denyAutoFill: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to `true` to prevent Safari from automatically entering passwords, contact information, and credit cards in form fields. This value also denies Safari permission to use the keychain to AutoFill stored credentials. If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Denying autofill

- [denyAutoFill](denyautofill-swift.type.property.md): The metadata associated with the setting that deactivates Safari’s AutoFill feature.
