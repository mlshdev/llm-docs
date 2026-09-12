> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/compressorextensionsettings](https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettings)

# CompressorExtensionSettings (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Encoder Extensions 1.0+

A set of methods you use to manage the extension UI that displays the current encoder settings for users to view and customize.

## Declaration

```swift
protocol CompressorExtensionSettings
```

<a id="overview"></a>

## Overview

Encoder extensions provide a default settings template with audio and video settings for the extension’s custom output format. To allow users to view and customize these settings, implement the [edit(\_:completionHandler:)](compressorextensionsettings/edit%28__completionhandler_%29.md) method.

Encoder extension sessions are stateless and cannot persist data across different sessions. To save the encoder settings values, and make them persistent across different sessions, implement the [settingsString()](compressorextensionsettings/settingsstring%28%29.md) method.  When a user updates the encoder settings from the UI, the Compressor app calls this method to retrieve and save those settings as XML at the compressor end. When an extension restarts, or during an encoding process, the Compressor app provides these settings back to the extension.

Implement the methods in this interface to send other extension details, such as extension name and description, to the Compressor app to display them on its interface.

## Topics

### Displaying the Extension View

- [edit(\_:completionHandler:)](compressorextensionsettings/edit%28__completionhandler_%29.md): Displays a view that enables users to edit the current encoder settings, and then calls a handler upon completion.

### Configuring Extension Settings

- [setSettingsString(\_:)](compressorextensionsettings/setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](compressorextensionsettings/audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](compressorextensionsettings/videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.

### Getting Extension Settings and Details

- [settingsString()](compressorextensionsettings/settingsstring%28%29.md): Returns the current encoder settings string.
- [settingsAttributes()](compressorextensionsettings/settingsattributes%28%29.md): Returns a set of audio and video encoding attributes to display on the Compressor app interface.
- [settingsDescription()](compressorextensionsettings/settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName()](compressorextensionsettings/encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.

# CompressorExtensionSettings (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

A set of methods you use to manage the extension UI that displays the current encoder settings for users to view and customize.

## Declaration

```objectivec
@protocol CompressorExtensionSettings
```

<a id="overview"></a>

## Overview

Encoder extensions provide a default settings template with audio and video settings for the extension’s custom output format. To allow users to view and customize these settings, implement the [editSettings:completionHandler:](compressorextensionsettings/edit%28__completionhandler_%29.md) method.

Encoder extension sessions are stateless and cannot persist data across different sessions. To save the encoder settings values, and make them persistent across different sessions, implement the [settingsString](compressorextensionsettings/settingsstring%28%29.md) method.  When a user updates the encoder settings from the UI, the Compressor app calls this method to retrieve and save those settings as XML at the compressor end. When an extension restarts, or during an encoding process, the Compressor app provides these settings back to the extension.

Implement the methods in this interface to send other extension details, such as extension name and description, to the Compressor app to display them on its interface.

## Topics

### Displaying the Extension View

- [editSettings:completionHandler:](compressorextensionsettings/edit%28__completionhandler_%29.md): Displays a view that enables users to edit the current encoder settings, and then calls a handler upon completion.

### Configuring Extension Settings

- [setSettingsString:](compressorextensionsettings/setsettingsstring%28__%29.md): Sets the encoder settings based on the string value supplied.
- [audioEnabled](compressorextensionsettings/audioenabled.md): A Boolean value that indicates whether audio is enabled for the source media.
- [videoEnabled](compressorextensionsettings/videoenabled.md): A Boolean value that indicates whether video is enabled for the source media.
- [CompressorExtensionSettingsPtr](compressorextensionsettingsptr.md): The type alias for referencing the `CompressorExtensionSettings` object.

### Getting Extension Settings and Details

- [settingsString](compressorextensionsettings/settingsstring%28%29.md): Returns the current encoder settings string.
- [settingsAttributes](compressorextensionsettings/settingsattributes%28%29.md): Returns a set of audio and video encoding attributes to display on the Compressor app interface.
- [settingsDescription](compressorextensionsettings/settingsdescription%28%29.md): Returns a description of the current encoder settings to display in the Compressor app interface.
- [encoderName](compressorextensionsettings/encodername%28%29.md): Returns the encoder extension name to display in the Compressor app interface.

## See Also

### Encoder Extension Settings

- [CompressorExtensionColorSpaces](compressorextensioncolorspaces.md): An interface you use to specify the supported color spaces in an extension.
