> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchfsrefspec](https://developer.apple.com/documentation/coreservices/lslaunchfsrefspec)

# LSLaunchFSRefSpec (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.10)

The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.

## Declaration

```swift
struct LSLaunchFSRefSpec
```

<a id="overview"></a>

## Overview

This data type defines a file-based launch specification designating,by file-system reference, an application to launch, items to open,or both. To request that items be opened in a particular application,set `appRef`, `numDocs`,and `itemRefs` accordingly.To request that each designated item be opened in its own preferredapplication, set `appRef` to `NULL`. Torequest that a particular application be launched without openingany documents, set `appRef` accordinglyand set `numDocs` to `0`.

## Topics

### Initializers

- [init()](lslaunchfsrefspec/1443478-init.md): Deprecated.
- [init(appRef:numDocs:itemRefs:passThruParams:launchFlags:asyncRefCon:)](lslaunchfsrefspec/1442457-init.md): Deprecated.

### Instance Properties

- [appRef](lslaunchfsrefspec/1448321-appref.md): Deprecated. A pointer to a file-system reference designatingthe application to launch; see the *File Manager Reference* inthe Carbon File Management Documentation for a description of the `FSRef` datatype. Set this field to `NULL` torequest that each item in the `itemRefs` arraybe opened in its own preferred application.
- [asyncRefCon](lslaunchfsrefspec/1450600-asyncrefcon.md): Deprecated. A pointer to an arbitrary application-definedvalue, passed in the Carbon event notifying you of an application’slaunch or termination (if you have registered for such notification).The value of this field can be `NULL`.
- [itemRefs](lslaunchfsrefspec/1444360-itemrefs.md): Deprecated. An array of file-system references designatingthe item or items to open. If the value of `numDocs` is `0`,this field is ignored and can be set to `NULL`.
- [launchFlags](lslaunchfsrefspec/1449431-launchflags.md): Deprecated. Launch flags specifying how to launch each application(including whether to print or merely open documents); see [LSLaunchFlags](lslaunchflags.md) fora description of these flags.
- [numDocs](lslaunchfsrefspec/1450323-numdocs.md): Deprecated. The number of elements in the array specifiedby the `itemRefs` field.The value of this field can be `0`,in which case the application designated by `appRef` islaunched without opening any items.
- [passThruParams](lslaunchfsrefspec/1445933-passthruparams.md): Deprecated. A pointer to an Apple event descriptor that ispassed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`),in the Apple event sent to each application launched or activated(whether individual preferred applications or the application designatedby `appRef`). See the *AppleEvent Manager Reference* in the Carbon Interapplication CommunicationDocumentation for a description of the `AEDesc` datatype. The value of this field can be `NULL`.

## See Also

### Deprecated Structures

- [LSApplicationParameters](lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSItemInfoRecord](lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.

# LSLaunchFSRefSpec (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.10)

The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.

## Declaration

```objectivec
typedef struct LSLaunchFSRefSpec {
    ...
} LSLaunchFSRefSpec;
```

<a id="overview"></a>

## Overview

This data type defines a file-based launch specification designating,by file-system reference, an application to launch, items to open,or both. To request that items be opened in a particular application,set `appRef`, `numDocs`,and `itemRefs` accordingly.To request that each designated item be opened in its own preferredapplication, set `appRef` to `NULL`. Torequest that a particular application be launched without openingany documents, set `appRef` accordinglyand set `numDocs` to `0`.

## Topics

### Instance Properties

- [appRef](lslaunchfsrefspec/1448321-appref.md): Deprecated. A pointer to a file-system reference designatingthe application to launch; see the *File Manager Reference* inthe Carbon File Management Documentation for a description of the `FSRef` datatype. Set this field to `NULL` torequest that each item in the `itemRefs` arraybe opened in its own preferred application.
- [asyncRefCon](lslaunchfsrefspec/1450600-asyncrefcon.md): Deprecated. A pointer to an arbitrary application-definedvalue, passed in the Carbon event notifying you of an application’slaunch or termination (if you have registered for such notification).The value of this field can be `NULL`.
- [itemRefs](lslaunchfsrefspec/1444360-itemrefs.md): Deprecated. An array of file-system references designatingthe item or items to open. If the value of `numDocs` is `0`,this field is ignored and can be set to `NULL`.
- [launchFlags](lslaunchfsrefspec/1449431-launchflags.md): Deprecated. Launch flags specifying how to launch each application(including whether to print or merely open documents); see [LSLaunchFlags](lslaunchflags.md) fora description of these flags.
- [numDocs](lslaunchfsrefspec/1450323-numdocs.md): Deprecated. The number of elements in the array specifiedby the `itemRefs` field.The value of this field can be `0`,in which case the application designated by `appRef` islaunched without opening any items.
- [passThruParams](lslaunchfsrefspec/1445933-passthruparams.md): Deprecated. A pointer to an Apple event descriptor that ispassed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`),in the Apple event sent to each application launched or activated(whether individual preferred applications or the application designatedby `appRef`). See the *AppleEvent Manager Reference* in the Carbon Interapplication CommunicationDocumentation for a description of the `AEDesc` datatype. The value of this field can be `NULL`.

## See Also

### Deprecated Structures

- [LSApplicationParameters](lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSItemInfoRecord](lsiteminforecord.md): Deprecated. The specification that contains requested information about an item.
