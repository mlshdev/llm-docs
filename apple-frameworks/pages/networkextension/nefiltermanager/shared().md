> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanager/shared()](https://developer.apple.com/documentation/networkextension/nefiltermanager/shared())

# shared() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Access the single instance of `NEFilterManager`.

## Declaration

```swift
class func shared() -> NEFilterManager
```

<a id="return-value"></a>

## Return Value

The `NEFilterManager` instance for the calling application.

## See Also

### Managing the filter configuration

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Access the single instance of `NEFilterManager`.

## Declaration

```objectivec
+ (NEFilterManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

The `NEFilterManager` instance for the calling application.

## See Also

### Managing the filter configuration

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the filter configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the filter configuration in the Network Extension preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the filter configuration from the Network Extension preferences.
