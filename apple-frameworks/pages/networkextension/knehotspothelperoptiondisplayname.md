> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/knehotspothelperoptiondisplayname](https://developer.apple.com/documentation/networkextension/knehotspothelperoptiondisplayname)

# kNEHotspotHelperOptionDisplayName (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The string displayed in Wi-Fi Settings for a network handled by the application.

## Declaration

```swift
let kNEHotspotHelperOptionDisplayName: String
```

<a id="Discussion"></a>

## Discussion

This key specifies the display name for the application, if an alternate name is desired. If this property is not specified, the application’s name is used.

This name appears in Settings -\> Wi-Fi underneath the Wi-Fi network name if the helper indicated that it was able to handle the network.

## See Also

### Registering a hotspot helper

- [register(options:queue:handler:)](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [NEHotspotHelperHandler](nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.

# kNEHotspotHelperOptionDisplayName (Objective-C)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The string displayed in Wi-Fi Settings for a network handled by the application.

## Declaration

```objectivec
extern const NSString * kNEHotspotHelperOptionDisplayName;
```

<a id="Discussion"></a>

## Discussion

This key specifies the display name for the application, if an alternate name is desired. If this property is not specified, the application’s name is used.

This name appears in Settings -\> Wi-Fi underneath the Wi-Fi network name if the helper indicated that it was able to handle the network.

## See Also

### Registering a hotspot helper

- [registerWithOptions:queue:handler:](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [NEHotspotHelperHandler](nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.
