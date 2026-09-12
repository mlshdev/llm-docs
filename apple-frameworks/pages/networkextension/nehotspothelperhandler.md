> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperhandler](https://developer.apple.com/documentation/networkextension/nehotspothelperhandler)

# NEHotspotHelperHandler (Swift)

**Framework:** Network Extension  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type definition for the Hotspot Helper’s command handler block.

## Declaration

```swift
typealias NEHotspotHelperHandler = (NEHotspotHelperCommand) -> Void
```

<a id="Discussion"></a>

## Discussion

The Hotspot Helper app provides a block of this type when it invokes the `registerWithOptions:queue:handler:` method.

The block is invoked every time there is a command to be processed.

## See Also

### Registering a hotspot helper

- [register(options:queue:handler:)](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [kNEHotspotHelperOptionDisplayName](knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.

# NEHotspotHelperHandler (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The type definition for the Hotspot Helper’s command handler block.

## Declaration

```objectivec
typedef void (^)(NEHotspotHelperCommand *) NEHotspotHelperHandler;
```

<a id="Discussion"></a>

## Discussion

The Hotspot Helper app provides a block of this type when it invokes the `registerWithOptions:queue:handler:` method.

The block is invoked every time there is a command to be processed.

## See Also

### Registering a hotspot helper

- [registerWithOptions:queue:handler:](nehotspothelper/register%28options_queue_handler_%29.md): Deprecated. Register the application as a Hotspot Helper.
- [kNEHotspotHelperOptionDisplayName](knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.
