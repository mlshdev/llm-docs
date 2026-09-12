> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/tecplugindispatchtable](https://developer.apple.com/documentation/coreservices/tecplugindispatchtable)

# TECPluginDispatchTable

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains version and signature information and pointers to the callback functions used by a text encoding converter plug-in.

## Declaration

```objectivec
typedef struct TECPluginDispatchTable {
    ...
} TECPluginDispatchTable;
```

## Topics

### Instance Properties

- [PluginClearContextInfo](tecplugindispatchtable/1498524-pluginclearcontextinfo.md)
- [PluginClearSnifferContextInfo](tecplugindispatchtable/1498588-pluginclearsniffercontextinfo.md)
- [PluginConvertTextEncoding](tecplugindispatchtable/1498402-pluginconverttextencoding.md)
- [PluginDisposeEncodingConverter](tecplugindispatchtable/1498432-plugindisposeencodingconverter.md)
- [PluginDisposeEncodingSniffer](tecplugindispatchtable/1498546-plugindisposeencodingsniffer.md)
- [PluginFlushConversion](tecplugindispatchtable/1498501-pluginflushconversion.md)
- [PluginGetCountAvailableSniffers](tecplugindispatchtable/1498428-plugingetcountavailablesniffers.md)
- [PluginGetCountAvailableTextEncodingPairs](tecplugindispatchtable/1498343-plugingetcountavailabletextencod.md)
- [PluginGetCountAvailableTextEncodings](tecplugindispatchtable/1498514-plugingetcountavailabletextencod.md)
- [PluginGetCountDestinationTextEncodings](tecplugindispatchtable/1498380-plugingetcountdestinationtextenc.md)
- [PluginGetCountMailTextEncodings](tecplugindispatchtable/1498527-plugingetcountmailtextencodings.md)
- [PluginGetCountSubTextEncodings](tecplugindispatchtable/1498410-plugingetcountsubtextencodings.md)
- [PluginGetCountWebTextEncodings](tecplugindispatchtable/1498455-plugingetcountwebtextencodings.md)
- [PluginGetTextEncodingFromInternetName](tecplugindispatchtable/1498475-plugingettextencodingfrominterne.md)
- [PluginGetTextEncodingInternetName](tecplugindispatchtable/1498487-plugingettextencodinginternetnam.md)
- [PluginID](tecplugindispatchtable/1498355-pluginid.md)
- [PluginNewEncodingConverter](tecplugindispatchtable/1498583-pluginnewencodingconverter.md)
- [PluginNewEncodingSniffer](tecplugindispatchtable/1498471-pluginnewencodingsniffer.md)
- [PluginSniffTextEncoding](tecplugindispatchtable/1498411-pluginsnifftextencoding.md)
- [compatibleVersion](tecplugindispatchtable/1498437-compatibleversion.md)
- [version](tecplugindispatchtable/1498479-version.md)
