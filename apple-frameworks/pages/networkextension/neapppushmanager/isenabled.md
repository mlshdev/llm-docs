> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/isenabled](https://developer.apple.com/documentation/networkextension/neapppushmanager/isenabled)

# isEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A property you use to toggle enabling the configuration.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The framework sets this value to NO when your app saves a configuration that overlaps with this configuration. This overlap occurs when a new [NEAppPushManager](../neapppushmanager.md) saves a configuration with a [matchSSIDs](matchssids.md) list that contains an SSID which is also a member of this manager’s SSID list.

## See Also

### Inspecting manager properties

- [isActive](isactive.md): A Boolean value that indicates whether a configuration is in use.
- [localizedDescription](localizeddescription.md): A string that contains the localized description of the app push manager.

# enabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A property you use to toggle enabling the configuration.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

The framework sets this value to NO when your app saves a configuration that overlaps with this configuration. This overlap occurs when a new [NEAppPushManager](../neapppushmanager.md) saves a configuration with a [matchSSIDs](matchssids.md) list that contains an SSID which is also a member of this manager’s SSID list.

## See Also

### Inspecting manager properties

- [active](isactive.md): A Boolean value that indicates whether a configuration is in use.
- [localizedDescription](localizeddescription.md): A string that contains the localized description of the app push manager.
