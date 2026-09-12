> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-file-components](https://developer.apple.com/documentation/audiotoolbox/audio-file-components)

# Audio File Components (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Get information about audio file formats, and about files containing audio data.

## Topics

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL(\_:\_:\_:\_:)](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL(\_:\_:\_:\_:)](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks(\_:\_:\_:\_:\_:\_:)](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile(\_:)](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize(\_:)](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)

### Configuring the Callbacks

- [AudioFileComponentInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentinitializewithcallbacks%28__________________%29.md)
- [Audio File Component Selectors](1404047-audio-file-component-selectors.md)
- [AudioFileComponentInitializeWithCallbacksProc](audiofilecomponentinitializewithcallbacksproc.md)

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoSize(\_:\_:\_:\_:\_:)](audiofilecomponentgetglobalinfosize%28__________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)
- [AudioFileComponentGetGlobalInfoSizeProc](audiofilecomponentgetglobalinfosizeproc.md)

### Accessing the User Data

- [AudioFileComponentGetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData(\_:\_:\_:)](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData(\_:\_:\_:)](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)

### Accessing Properties

- [AudioFileComponentGetProperty(\_:\_:\_:\_:)](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty(\_:\_:\_:\_:)](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

### Reading and Writing Data

- [AudioFileComponentReadBytes(\_:\_:\_:\_:\_:)](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes(\_:\_:\_:\_:\_:)](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat(\_:\_:\_:\_:)](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat(\_:\_:\_:)](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.

# Audio File Components (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Get information about audio file formats, and about files containing audio data.

## Topics

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)

### Configuring the Callbacks

- [AudioFileComponentInitializeWithCallbacks](audiofilecomponentinitializewithcallbacks%28__________________%29.md)
- [Audio File Component Selectors](1404047-audio-file-component-selectors.md)
- [AudioFileComponentInitializeWithCallbacksProc](audiofilecomponentinitializewithcallbacksproc.md)

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoSize](audiofilecomponentgetglobalinfosize%28__________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)
- [AudioFileComponentGetGlobalInfoSizeProc](audiofilecomponentgetglobalinfosizeproc.md)

### Accessing the User Data

- [AudioFileComponentGetUserData](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)

### Accessing Properties

- [AudioFileComponentGetProperty](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

### Reading and Writing Data

- [AudioFileComponentReadBytes](audiofilecomponentreadbytes%28__________%29.md)
- [AudioFileComponentReadPacketData](audiofilecomponentreadpacketdata%28______________%29.md)
- [AudioFileComponentReadPackets](audiofilecomponentreadpackets%28______________%29.md)
- [AudioFileComponentWriteBytes](audiofilecomponentwritebytes%28__________%29.md)
- [AudioFileComponentWritePackets](audiofilecomponentwritepackets%28______________%29.md)
- [AudioFileComponentReadBytesProc](audiofilecomponentreadbytesproc.md)
- [AudioFileComponentReadPacketDataProc](audiofilecomponentreadpacketdataproc.md)
- [AudioFileComponentReadPacketsProc](audiofilecomponentreadpacketsproc.md)
- [AudioFileComponentWriteBytesProc](audiofilecomponentwritebytesproc.md)
- [AudioFileComponentWritePacketsProc](audiofilecomponentwritepacketsproc.md)

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)

## See Also

### Audio Files and Formats

- [Audio Format Services](audio-format-services.md): Access information about audio formats and codecs.
- [Audio File Services](audio-file-services.md): Read or write a variety of audio data to or from disk or a memory buffer.
- [Extended Audio File Services](extended-audio-file-services.md): Read and write compressed files and linear PCM audio files using a simplified interface.
- [Audio File Stream Services](audio-file-stream-services.md): Parse streamed audio files as the data arrives on the user’s computer.
- [Core Audio File Format](core-audio-file-format.md): Parse the structure of Core Audio files.
