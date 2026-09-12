> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettingsmanager/shared()](https://developer.apple.com/documentation/networkextension/nednssettingsmanager/shared())

# shared() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Access the single instance of a DNS settings manager.

## Declaration

```swift
class func shared() -> NEDNSSettingsManager
```

<a id="return-value"></a>

## Return Value

The DNS settings manager instance for the calling application.

## See Also

### Managing DNS configurations

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Access the single instance of a DNS settings manager.

## Declaration

```objectivec
+ (NEDNSSettingsManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

The DNS settings manager instance for the calling application.

## See Also

### Managing DNS configurations

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load your DNS settings configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save your DNS settings configuration to the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove your DNS settings configuration from the system networking preferences.
