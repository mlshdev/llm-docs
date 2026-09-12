> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentresourceextension/1516636-componentversion](https://developer.apple.com/documentation/coreservices/componentresourceextension/1516636-componentversion)

# componentVersion

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

The version number of the component. If you specify the `componentDoAutoVersion` flag in `componentRegisterFlags`, the Component Manager must obtain the version number of your component when your component is registered. Either you can provide a version number in your component’s resource, or you can specify a value of 0 for its version number. If you specify 0, the Component Manager sends your component a version request to get the version number of your component.

## Declaration

```objectivec
SInt32 componentVersion;
```
