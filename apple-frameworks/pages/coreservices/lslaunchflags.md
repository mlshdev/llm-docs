> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchflags](https://developer.apple.com/documentation/coreservices/lslaunchflags)

# LSLaunchFlags (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification for launching an app.

## Declaration

```swift
struct LSLaunchFlags
```

<a id="overview"></a>

## Overview

They are passed in a launch specification structure (`LSLaunchFSRefSpec` to the `LSOpenFromRefSpec` function or `LSLaunchURLSpec` to the `LSOpenFromURLSpec` function), to control the manner in which apps are launched.

## Topics

### Creating Application Launch Flags

- [init(rawValue:)](lslaunchflags/1449893-init.md)

### Constants

- [defaults](lslaunchflags/1443121-defaults.md): Requests launching in the default manner (as if the only flags set were `kLSLaunchNoParams`, `kLSLaunchAsync`, and `kLSLaunchStartClassic`).
- [andPrint](lslaunchflags/1442495-andprint.md): Requests that documents opened in the application be printed.
- [andDisplayErrors](lslaunchflags/1443557-anddisplayerrors.md): Requests that launch and open failures be displayed in the UI.
- [dontAddToRecents](lslaunchflags/1442580-dontaddtorecents.md): Requests that the application or documents not be added to the Finder’s Recent Items menu.
- [dontSwitch](lslaunchflags/1442057-dontswitch.md): Requests that the application be launched without being brought to the foreground.
- [async](lslaunchflags/1445037-async.md): Requests that the application be launched asynchronously.
- [newInstance](lslaunchflags/1443359-newinstance.md): Requests that a new instance of the application be started, even if one is already running.
- [andHide](lslaunchflags/1444620-andhide.md): Requests that the application be hidden as soon as it completes its launch sequence.
- [andHideOthers](lslaunchflags/1448911-andhideothers.md): Requests that other applications be hidden as soon as the opened application completes its launch sequence.

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# LSLaunchFlags (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification for launching an app.

## Declaration

```objectivec
typedef enum LSLaunchFlags : OptionBits {
    ...
} LSLaunchFlags;
```

<a id="overview"></a>

## Overview

They are passed in a launch specification structure (`LSLaunchFSRefSpec` to the `LSOpenFromRefSpec` function or `LSLaunchURLSpec` to the `LSOpenFromURLSpec` function), to control the manner in which apps are launched.

## Topics

### Constants

- [kLSLaunchDefaults](lslaunchflags/klslaunchdefaults.md): Requests launching in the default manner (as if the only flags set were `kLSLaunchNoParams`, `kLSLaunchAsync`, and `kLSLaunchStartClassic`).
- [kLSLaunchAndPrint](lslaunchflags/klslaunchandprint.md): Requests that documents opened in the application be printed.
- [kLSLaunchAndDisplayErrors](lslaunchflags/klslaunchanddisplayerrors.md): Requests that launch and open failures be displayed in the UI.
- [kLSLaunchDontAddToRecents](lslaunchflags/klslaunchdontaddtorecents.md): Requests that the application or documents not be added to the Finder’s Recent Items menu.
- [kLSLaunchDontSwitch](lslaunchflags/klslaunchdontswitch.md): Requests that the application be launched without being brought to the foreground.
- [kLSLaunchAsync](lslaunchflags/klslaunchasync.md): Requests that the application be launched asynchronously.
- [kLSLaunchNewInstance](lslaunchflags/klslaunchnewinstance.md): Requests that a new instance of the application be started, even if one is already running.
- [kLSLaunchAndHide](lslaunchflags/klslaunchandhide.md): Requests that the application be hidden as soon as it completes its launch sequence.
- [kLSLaunchAndHideOthers](lslaunchflags/klslaunchandhideothers.md): Requests that other applications be hidden as soon as the opened application completes its launch sequence.
