> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/apple_events/1572741-callback_constants_for_the_aeres](https://developer.apple.com/documentation/coreservices/apple_events/1572741-callback_constants_for_the_aeres)

# Callback Constants for the AEResolve Function

**Framework:** Core Services

Specify supported callback features to the `AEResolve` function.

<a id="overview"></a>

## Overview

You use these constants to supply a value for the `callbackFlags` parameter to the [AEResolve(\_:\_:\_:)](../1449720-aeresolve.md) function. This value specifies whether your application supports whose descriptors or provides marking callback functions. To obtain a value for this parameter, you can add together constants to set the appropriate bits, as shown in the following example (for an application that supports both whose tests and marking):

<a id="2556034"></a>

**Listing 1**

```occ
    AEDesc objectSpecifier; // Previously obtained object specifier.     AEDesc  resultToken;
    OSErr myErr;
 
    myErr = AEResolve (&objectSpecifier,
                        kAEIDoWhose + kAEIDoMarking, &resultToken)
```

AppleScript generates whose clauses from script statements such as the following:

<a id="2556037"></a>

**Listing 2**

```occ
tell application "Finder"
    every file in control panels folder whose file type is "APPL"
end tell
```

## Topics

### Constants

- [kAEIDoMinimum](../kaeidominimum.md): The application does not handle whose tests or provide marking callbacks.
- [kAEIDoWhose](../kaeidowhose.md): The application supports whose tests (supports key form `formWhose`).
- [kAEIDoMarking](../kaeidomarking.md): The application provides marking callback functions. Marking callback functions are described in [Apple Event Manager](https://developer.apple.com/documentation/applicationservices/apple_event_manager).
- [kAEHandleSimpleRanges](../kaehandlesimpleranges.md)
- [kAEPassSubDescs](../kaepasssubdescs.md)
- [kAEResolveNestedLists](../kaeresolvenestedlists.md)
- [kAEUseRelativeIterators](../kaeuserelativeiterators.md)
