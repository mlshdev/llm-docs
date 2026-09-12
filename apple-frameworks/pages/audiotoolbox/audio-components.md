> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-components](https://developer.apple.com/documentation/audiotoolbox/audio-components)

# Audio Components (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Find, load, and configure audio components, such as Audio Units and audio codecs.

<a id="overview"></a>

## Overview

Use the Audio Components API to register and discover audio units, codecs, and other loadable code modules. This API replaces the Component Manager API used prior to macOS 10.6. The system searches for loadable bundles with a `.audiocomp` or `.component` filename extension in the following locations:

- `~/Library/Audio/Plug-Ins/Components`
- `/Library/Audio/Plug-Ins/Components`
- `/System/Library/Components`

The bundle `Info.plist` file needs to contain an `AudioComponents` item whose value is an array of dictionaries. For example:

```swift
<key>AudioComponents</key>
<array>
    <dict>
        <key>type</key>
        <string>aufx</string>
        <key>subtype</key>
        <string>XMPL</string>
        <key>manufacturer</key>
        <string>ACME</string>
        <key>name</key>
        <string>AUExample</string>
        <key>version</key>
        <integer>12345</integer>
        <key>factoryFunction</key>
        <string>AUExampleFactory</string>
        
        <!-- An AudioComponent is sandbox safe. -->
        
        <key>sandboxSafe</key>
        <true/>
        
        <!-- Or it can describe its resource usage. -->
        
        <key>resourceUsage</key>
        <dict>
            <key>iokit.user-client</key>
            <array>
                <string>CustomUserClient1</string>
                <string>CustomUserClient2</string>
            </array>
            <key>mach-lookup.global-name</key>
            <array>
                <string>MachServiceName1</string>
                <string>MachServiceName2</string>
            </array>
            <key>network.client</key>
            <true/>
            <key>temporary-exception.files.all.read-write</key>
            </true>
        </dict>

        <!-- An AudioComponent can define its tags. -->
        
        <key>tags</key>
        <array>
            <string>Effect</string>
            <string>Equalizer</string>
        </array>
    </dict>
</array>
```

## Topics

### Creating an Audio Component Instance

- [AudioComponentInstanceNew(\_:\_:)](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate(\_:\_:\_:)](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose(\_:)](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)

### Creating an Audio Component Dynamically

- [AudioComponentRegister(\_:\_:\_:\_:)](audiocomponentregister%28________%29.md)
- [AudioComponentCount(\_:)](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext(\_:\_:)](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent(\_:)](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

### Getting Information About a Component

- [AudioComponentInstanceCanDo(\_:\_:)](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription(\_:\_:)](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName(\_:\_:)](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion(\_:\_:)](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon(\_:)](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo(\_:\_:)](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

### Validating an Audio Component

- [AudioComponentValidate(\_:\_:\_:)](audiocomponentvalidate%28______%29.md)
- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)
- [AudioComponentValidationResult](audiocomponentvalidationresult.md)

### Constants

- [kAudioComponentConfigurationInfo_ValidationResult](kaudiocomponentconfigurationinfo_validationresult.md)
- [kAudioComponentInstanceInvalidationNotification](kaudiocomponentinstanceinvalidationnotification.md)
- [kAudioComponentRegistrationsChangedNotification](kaudiocomponentregistrationschangednotification.md)
- [kAudioComponentValidationParameter_ForceValidation](kaudiocomponentvalidationparameter_forcevalidation.md)
- [kAudioComponentValidationParameter_TimeOut](kaudiocomponentvalidationparameter_timeout.md)

## See Also

### Audio Units

- [Generating spatial audio from a multichannel audio stream](generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Unit v2 (C) API](audio-unit-v2-c-api.md): Configure an Audio Unit and prepare it to render audio.
- [Audio Unit Properties](audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.

# Audio Components (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Find, load, and configure audio components, such as Audio Units and audio codecs.

<a id="overview"></a>

## Overview

Use the Audio Components API to register and discover audio units, codecs, and other loadable code modules. This API replaces the Component Manager API used prior to macOS 10.6. The system searches for loadable bundles with a `.audiocomp` or `.component` filename extension in the following locations:

- `~/Library/Audio/Plug-Ins/Components`
- `/Library/Audio/Plug-Ins/Components`
- `/System/Library/Components`

The bundle `Info.plist` file needs to contain an `AudioComponents` item whose value is an array of dictionaries. For example:

```swift
<key>AudioComponents</key>
<array>
    <dict>
        <key>type</key>
        <string>aufx</string>
        <key>subtype</key>
        <string>XMPL</string>
        <key>manufacturer</key>
        <string>ACME</string>
        <key>name</key>
        <string>AUExample</string>
        <key>version</key>
        <integer>12345</integer>
        <key>factoryFunction</key>
        <string>AUExampleFactory</string>
        
        <!-- An AudioComponent is sandbox safe. -->
        
        <key>sandboxSafe</key>
        <true/>
        
        <!-- Or it can describe its resource usage. -->
        
        <key>resourceUsage</key>
        <dict>
            <key>iokit.user-client</key>
            <array>
                <string>CustomUserClient1</string>
                <string>CustomUserClient2</string>
            </array>
            <key>mach-lookup.global-name</key>
            <array>
                <string>MachServiceName1</string>
                <string>MachServiceName2</string>
            </array>
            <key>network.client</key>
            <true/>
            <key>temporary-exception.files.all.read-write</key>
            </true>
        </dict>

        <!-- An AudioComponent can define its tags. -->
        
        <key>tags</key>
        <array>
            <string>Effect</string>
            <string>Equalizer</string>
        </array>
    </dict>
</array>
```

## Topics

### Creating an Audio Component Instance

- [AudioComponentInstanceNew](audiocomponentinstancenew%28____%29.md): Creates a new instance of an audio component.
- [AudioComponentInstantiate](audiocomponentinstantiate%28______%29.md)
- [AudioComponentInstanceDispose](audiocomponentinstancedispose%28__%29.md): Disposes of an audio component instance.
- [AudioComponent](audiocomponent.md): An audio component.
- [AudioComponentInstantiationOptions](audiocomponentinstantiationoptions.md)
- [Audio Component Errors](1619490-audio-component-errors.md)

### Creating an Audio Component Dynamically

- [AudioComponentRegister](audiocomponentregister%28________%29.md)
- [AudioComponentCount](audiocomponentcount%28__%29.md): Returns the number of audio components that match a specified `AudioComponentDescription` structure.
- [AudioComponentFindNext](audiocomponentfindnext%28____%29.md): Finds the next component that matches a specified `AudioComponentDescription` structure after a specified audio component.
- [AudioComponentInstanceGetComponent](audiocomponentinstancegetcomponent%28__%29.md): Retrieves a reference to an audio component from an instance of that audio component.
- [AudioComponentDescription](audiocomponentdescription.md): Identifying information for an audio component.
- [AudioComponentInstance](audiocomponentinstance.md): A component instance, or object, is an audio unit or audio codec.
- [AudioComponentFlags](audiocomponentflags.md)
- [AudioComponentFactoryFunction](audiocomponentfactoryfunction.md)

### Getting Information About a Component

- [AudioComponentInstanceCanDo](audiocomponentinstancecando%28____%29.md): Determines if an audio component instance implements a particular function.
- [AudioComponentGetDescription](audiocomponentgetdescription%28____%29.md): Gets the class description, as an `AudioComponentDescription` structure, of an audio component.
- [AudioComponentCopyName](audiocomponentcopyname%28____%29.md): Returns the generic name of an audio component.
- [AudioComponentGetVersion](audiocomponentgetversion%28____%29.md): Gets the version of an audio component in hexadecimal form as `0xMMMMmmDD` (major, minor, dot).
- [AudioComponentCopyIcon](audiocomponentcopyicon%28__%29.md)
- [AudioComponentCopyConfigurationInfo](audiocomponentcopyconfigurationinfo%28____%29.md)
- [AudioComponentPlugInInterface](audiocomponentplugininterface.md)
- [AudioComponentMethod](audiocomponentmethod.md)

### Validating an Audio Component

- [AudioComponentValidate](audiocomponentvalidate%28______%29.md)
- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)
- [AudioComponentValidationResult](audiocomponentvalidationresult.md)

### Constants

- [kAudioComponentConfigurationInfo_ValidationResult](kaudiocomponentconfigurationinfo_validationresult.md)
- [kAudioComponentInstanceInvalidationNotification](kaudiocomponentinstanceinvalidationnotification.md)
- [kAudioComponentRegistrationsChangedNotification](kaudiocomponentregistrationschangednotification.md)
- [kAudioComponentValidationParameter_ForceValidation](kaudiocomponentvalidationparameter_forcevalidation.md)
- [kAudioComponentValidationParameter_TimeOut](kaudiocomponentvalidationparameter_timeout.md)

## See Also

### Audio Units

- [Generating spatial audio from a multichannel audio stream](generating-spatial-audio-from-a-multichannel-audio-stream.md): Convert 8-channel audio to 2-channel spatial audio by using a spatial mixer audio unit.
- [Audio Unit v3 Plug-Ins](audio-unit-v3-plug-ins.md): Deliver custom audio effects, instruments, and other audio behaviors using an Audio Unit v3 app extension.
- [Audio Unit v2 (C) API](audio-unit-v2-c-api.md): Configure an Audio Unit and prepare it to render audio.
- [Audio Unit Properties](audio-unit-properties.md): Obtain information about the built-in mixers, equalizers, filters, effects, and other Audio Unit app extensions.
- [Audio Unit Voice I/O](audio-unit-voice-i-o.md): Configure system voice processing and respond to speech events.
