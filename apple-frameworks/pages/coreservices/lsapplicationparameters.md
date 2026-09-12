> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsapplicationparameters](https://developer.apple.com/documentation/coreservices/lsapplicationparameters)

# LSApplicationParameters (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** macOS 10.4+ (deprecated in 10.10)

The specification that defines the app, launch flags, and additional parameters that control how an app launches.

## Declaration

```swift
struct LSApplicationParameters
```

<a id="overview"></a>

## Overview

This structure is passed as a parameter to [LSOpenApplication(\_:\_:)](1447930-lsopenapplication.md), [LSOpenItemsWithRole(\_:\_:\_:\_:\_:\_:\_:)](1449783-lsopenitemswithrole.md), and [LSOpenURLsWithRole(\_:\_:\_:\_:\_:\_:)](1448184-lsopenurlswithrole.md).

## Topics

### Initializers

- [init()](lsapplicationparameters/1441947-init.md): Deprecated.
- [init(version:flags:application:asyncLaunchRefCon:environment:argv:initialEvent:)](lsapplicationparameters/1446779-init.md): Deprecated.

### Instance Properties

- [application](lsapplicationparameters/1447460-application.md): Deprecated. The `FSRef` ofthe application to open.
- [argv](lsapplicationparameters/1445515-argv.md): Deprecated. An array of values of type [CFString](../corefoundation/cfstring.md) that specify the arguments that are to be passed to `main()` in the launched process. The value of this field can be `NULL`. This field is ignored in macOS 10.4.
- [asyncLaunchRefCon](lsapplicationparameters/1444464-asynclaunchrefcon.md): Deprecated. The client `refCon` thatis to appear in subsequent launch notifications.
- [environment](lsapplicationparameters/1449247-environment.md): Deprecated. A dictionary of `CFStringRef` keysand values for environment variables to set in the launched process.The value of this field can be `NULL`.
- [flags](lsapplicationparameters/1450209-flags.md): Deprecated. Launch flags. For possible values, see [LSLaunchFlags](lslaunchflags.md).
- [initialEvent](lsapplicationparameters/1446633-initialevent.md): Deprecated. The first Apple Event to send to the launchedprocess. The value of this field can be `NULL`.
- [version](lsapplicationparameters/1441822-version.md): Deprecated. The version of the structure. The value of thisfield must be `0`.

## See Also

### Deprecated Structures

- [LSLaunchFSRefSpec](lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.
- [LSItemInfoRecord](lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.

# LSApplicationParameters (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** macOS 10.4+ (deprecated in 10.10)

The specification that defines the app, launch flags, and additional parameters that control how an app launches.

## Declaration

```objectivec
typedef struct LSApplicationParameters {
    ...
} LSApplicationParameters;
```

<a id="overview"></a>

## Overview

This structure is passed as a parameter to [LSOpenApplication](1447930-lsopenapplication.md), [LSOpenItemsWithRole](1449783-lsopenitemswithrole.md), and [LSOpenURLsWithRole](1448184-lsopenurlswithrole.md).

## Topics

### Instance Properties

- [application](lsapplicationparameters/1447460-application.md): Deprecated. The `FSRef` ofthe application to open.
- [argv](lsapplicationparameters/1445515-argv.md): Deprecated. An array of values of type [CFString](../corefoundation/cfstring.md) that specify the arguments that are to be passed to `main()` in the launched process. The value of this field can be `NULL`. This field is ignored in macOS 10.4.
- [asyncLaunchRefCon](lsapplicationparameters/1444464-asynclaunchrefcon.md): Deprecated. The client `refCon` thatis to appear in subsequent launch notifications.
- [environment](lsapplicationparameters/1449247-environment.md): Deprecated. A dictionary of `CFStringRef` keysand values for environment variables to set in the launched process.The value of this field can be `NULL`.
- [flags](lsapplicationparameters/1450209-flags.md): Deprecated. Launch flags. For possible values, see [LSLaunchFlags](lslaunchflags.md).
- [initialEvent](lsapplicationparameters/1446633-initialevent.md): Deprecated. The first Apple Event to send to the launchedprocess. The value of this field can be `NULL`.
- [version](lsapplicationparameters/1441822-version.md): Deprecated. The version of the structure. The value of thisfield must be `0`.

## See Also

### Deprecated Structures

- [LSLaunchFSRefSpec](lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.
- [LSItemInfoRecord](lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.
