> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingserrordomain](https://developer.apple.com/documentation/networkextension/nednssettingserrordomain)

# NEDNSSettingsErrorDomain (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The domain for errors resulting from calls to the DNS settings manager.

## Declaration

```swift
let NEDNSSettingsErrorDomain: String
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEDNSSettingsManager](nednssettingsmanager.md). The [NEDNSSettingsManagerError](nednssettingsmanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [NEDNSSettingsManagerError](nednssettingsmanagererror.md): Error codes specific to DNS managers.

# NEDNSSettingsErrorDomain (Objective-C)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The domain for errors resulting from calls to the DNS settings manager.

## Declaration

```objectivec
extern NSString * const NEDNSSettingsErrorDomain;
```

<a id="Discussion"></a>

## Discussion

Match this constant to the [domain](../foundation/nserror/domain.md) of an [NSError](../foundation/nserror.md) encountered when calling methods on [NEDNSSettingsManager](nednssettingsmanager.md). The [NEDNSSettingsManagerError](nednssettingsmanagererror.md) enumeration defines possible [code](../foundation/nserror/code.md) values for these errors.

## See Also

### Handling errors

- [NEDNSSettingsManagerError](nednssettingsmanagererror.md): Error codes specific to DNS managers.
