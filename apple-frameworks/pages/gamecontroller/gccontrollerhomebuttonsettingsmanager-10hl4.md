> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-10hl4)

# GCControllerHomeButtonSettingsManager

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Access the game controller system Home button settings.

## Declaration

```objectivec
@interface GCControllerHomeButtonSettingsManager : NSObject
```

<a id="overview"></a>

## Overview

macOS, iOS, and visionOS allow the user to assign an action that launches a chosen application to a long press of the Home button (the logo button on PlayStation and Xbox controllers).  The \\c GCControllerHomeButtonSettingsManager class allows your application to partially inspect the user’s currently configured action, and to open the system game controller settings screen where the user can modify the action.

> **Note**

> Performing operations on `GCControllerHomeButtonSettingsManager` is only permitted while a game controller is connected.

## Topics

### Instance Properties

- [settingsDidChangeHandler](gccontrollerhomebuttonsettingsmanager-10hl4/settingsdidchangehandler.md): A block that is scheduled after Home button settings change.

### Instance Methods

- [init](gccontrollerhomebuttonsettingsmanager-10hl4/init.md)
- [initWithQueue:](gccontrollerhomebuttonsettingsmanager-10hl4/initwithqueue_.md)
- [openControllerHomeButtonSettingsForActivity:error:](gccontrollerhomebuttonsettingsmanager-10hl4/opencontrollerhomebuttonsettingsforactivity_error_.md): Opens the Settings app to the screen in game controller settings where the user can change the controller shortcut action.
- [readControllerHomeButtonInAppAction:withError:](gccontrollerhomebuttonsettingsmanager-10hl4/readcontrollerhomebuttoninappaction_witherror_.md): Get the current controller Home button in-app action setting.
- [readControllerHomeButtonInAppActionWithError:](gccontrollerhomebuttonsettingsmanager-10hl4/readcontrollerhomebuttoninappactionwitherror_.md)
- [readControllerHomeButtonSystemAction:withError:](gccontrollerhomebuttonsettingsmanager-10hl4/readcontrollerhomebuttonsystemaction_witherror_.md): Get the current controller Home button system action setting.
- [readControllerHomeButtonSystemActionWithError:](gccontrollerhomebuttonsettingsmanager-10hl4/readcontrollerhomebuttonsystemactionwitherror_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
