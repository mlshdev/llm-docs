> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanager/shared()](https://developer.apple.com/documentation/networkextension/nerelaymanager/shared())

# shared() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Access the single instance of a network relay manager.

## Declaration

```swift
class func shared() -> NERelayManager
```

<a id="return-value"></a>

## Return Value

The network relay manager instance for the calling application.

## See Also

### Managing relay configurations

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove your relay configuration from the system networking preferences.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Access the single instance of a network relay manager.

## Declaration

```objectivec
+ (NERelayManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

The network relay manager instance for the calling application.

## See Also

### Managing relay configurations

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load your relay configuration from the system networking preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save your relay configuration to the system networking preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove your relay configuration from the system networking preferences.
