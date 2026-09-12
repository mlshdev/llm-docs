> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/componentresourceextension](https://developer.apple.com/documentation/coreservices/componentresourceextension)

# ComponentResourceExtension

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct ComponentResourceExtension {
    ...
} ComponentResourceExtension;
```

<a id="overview"></a>

## Overview

You can optionally include in your component resource the information defined by the `ComponentResourceExtension` data type:

## Topics

### Instance Properties

- [componentIconFamily](componentresourceextension/1516662-componenticonfamily.md): The resource ID of an icon family. You can provide an icon family in addition to the icon provided in the `componentIcon` field. Note that members of this icon family are not used by the Finder you supply an icon family only so that other components or applications can display your component’s icon in a dialog box if needed.
- [componentRegisterFlags](componentresourceextension/1516519-componentregisterflags.md): A set of flags containing additional registration information. See [Component Resource Extension Flags](1516650-component_resource_extension_fla.md) for the flag values.
- [componentVersion](componentresourceextension/1516636-componentversion.md): The version number of the component. If you specify the `componentDoAutoVersion` flag in `componentRegisterFlags`, the Component Manager must obtain the version number of your component when your component is registered. Either you can provide a version number in your component’s resource, or you can specify a value of 0 for its version number. If you specify 0, the Component Manager sends your component a version request to get the version number of your component.
