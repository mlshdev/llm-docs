> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxcommandapi](https://developer.apple.com/documentation/professional_video_applications/fxcommandapi)

# FxCommandAPI (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** FxPlug 4.1+

Commands that you can tell the host to perform.

## Declaration

```swift
protocol FxCommandAPI
```

## Topics

### Instructing the Host to Perform a Command

- [perform(\_:)](fxcommandapi/perform%28__%29.md): Instructs the host application to perform a command.

### Handling and Defining Commands

- [FxCommandHandler](fxcommandhandler.md): Defines the methods a plug-in must implement to be notified of the application’s key binding for common commands.
- [FxCommand](fxcommand.md): Defines the commands that can be performed by the host.

### Constants

- [kKeyChar_UpArrow](kkeychar_uparrow.md): The key character for Unicode 0x21de.
- [kKeyChar_LeftArrow](kkeychar_leftarrow.md): The key character for Unicode 0x21e0.
- [kKeyChar_DownArrow](kkeychar_downarrow.md): The key character for Unicode 0x21df.
- [kKeyChar_RightArrow](kkeychar_rightarrow.md): The key character for Unicode 0x21e2.
- [kKey_Command](kkey_command.md): The FxCommand that will be invoked by this keypress.
- [kKey_Character](kkey_character.md): The character the user must press to invoke the command.
- [kKey_Modifiers](kkey_modifiers.md): The modifiers the user must include in the keypress to invoke the command.

## Relationships

### Inherited By

- [FxCommandAPI_v2](fxcommandapi_v2.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.

# FxCommandAPI (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

Commands that you can tell the host to perform.

## Declaration

```objectivec
@protocol FxCommandAPI
```

## Topics

### Instructing the Host to Perform a Command

- [performCommand:error:](fxcommandapi/perform%28__%29.md): Instructs the host application to perform a command.

### Handling and Defining Commands

- [FxCommandHandler](fxcommandhandler.md): Defines the methods a plug-in must implement to be notified of the application’s key binding for common commands.
- [FxCommand](fxcommand.md): Defines the commands that can be performed by the host.

### Constants

- [kKeyChar_UpArrow](kkeychar_uparrow.md): The key character for Unicode 0x21de.
- [kKeyChar_LeftArrow](kkeychar_leftarrow.md): The key character for Unicode 0x21e0.
- [kKeyChar_DownArrow](kkeychar_downarrow.md): The key character for Unicode 0x21df.
- [kKeyChar_RightArrow](kkeychar_rightarrow.md): The key character for Unicode 0x21e2.
- [kKey_Command](kkey_command.md): The FxCommand that will be invoked by this keypress.
- [kKey_Character](kkey_character.md): The character the user must press to invoke the command.
- [kKey_Modifiers](kkey_modifiers.md): The modifiers the user must include in the keypress to invoke the command.

## Relationships

### Inherited By

- [FxCommandAPI_v2](fxcommandapi_v2.md)

## See Also

### User interface

- [Adding parameters to plug-ins](../professional-video-applications/adding-parameters-to-plug-ins.md): Create standard and custom user-facing parameters for your plug-in that will appear in the inspector.
- [Adding onscreen controls to plug-ins](../professional-video-applications/adding-onscreen-controls-to-plug-ins.md): Simplify user interaction by using onscreen controls for your FxPlug plug-in.
- [FxPathAPI_v3](fxpathapi_v3.md): An API that defines the methods to retrieve information about paths, shapes, and masks the user has drawn on an object.
- [FxUndoAPI](fxundoapi.md): An API that defines the methods that the host app implements to handle plug-in management of the host app’s undo queue.
- [FxCommandAPI_v2](fxcommandapi_v2.md): Adds functionality to move the playhead to a specific timeline time.
- [FxRemoteWindowAPI](fxremotewindowapi.md): A protocol that allows the plug-in to request that the host create a window.
- [FxRemoteWindowAPI_v2](fxremotewindowapi_v2.md): A protocol that allows the plug-in to request that the host create a window with a defined minimum and maximum size.
