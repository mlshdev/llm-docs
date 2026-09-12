> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo](https://developer.apple.com/documentation/foundation/processinfo)

# ProcessInfo (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of information about the current process.

## Declaration

```swift
class ProcessInfo
```

<a id="overview"></a>

## Overview

Each process has a single, shared [ProcessInfo](processinfo.md) object known as a *process information agent* that can return information such as arguments, environment variables, host name, and process name. The [processInfo](processinfo/processinfo.md) class method returns the shared agent for the current process. For example, the following line returns the [ProcessInfo](processinfo.md) object, which then provides the name of the current process:

**Swift**

```swift
let processName = ProcessInfo.processInfo.processName
```

**Objective-C**

```objc
NSString *processName = [[NSProcessInfo processInfo] processName];
```

> **Note**

>  [ProcessInfo](processinfo.md) is thread-safe in macOS 10.7 and later.

The [ProcessInfo](processinfo.md) class also includes the [operatingSystemVersion](processinfo/operatingsystemversion.md) property, which returns an [OperatingSystemVersion](operatingsystemversion.md) structure identifying the operating system version on which the process is executing.

[ProcessInfo](processinfo.md) objects attempt to interpret environment variables and command-line arguments in the user’s default C string encoding if they can’t convert to Unicode as UTF-8 strings. If neither the Unicode nor C string conversion works, the [ProcessInfo](processinfo.md) object ignores these values.

<a id="Manage-Activities"></a>

### Manage Activities

The system has heuristics to improve battery life, performance, and responsiveness of applications for the benefit of the user. You can use the following methods to manage *activities* that give hints to the system that your application has special requirements:

- [beginActivity(options:reason:)](processinfo/beginactivity%28options_reason_%29.md)
- [endActivity(\_:)](processinfo/endactivity%28__%29.md)
- [performActivity(options:reason:using:)](processinfo/performactivity%28options_reason_using_%29.md)

In response to creating an activity, the system disables some or all of the heuristics so your application can finish quickly while still providing responsive behavior if the user needs it.

You use activities when your application performs a long-running operation. If the activity can take different amounts of time (for example, calculating the next move in a chess game), it should use this API to ensure correct behavior when the amount of data or the capabilities of the user’s computer varies. Activities fall into two major categories:

- *User-initiated* activities are explicitly started by the user. Examples include exporting or downloading a user-specified file.
- *Background* activities perform the normal operations of your application and aren’t explicitly started by the user. Examples include autosaving, indexing, and automatic downloading of files.

In addition, if your application requires high priority input/output (I/O), you can include the [latencyCritical](processinfo/activityoptions/latencycritical.md) flag (using a bitwise `OR`). You should only use this flag for activities like audio or video recording that require high priority I/O.

If your activity takes place synchronously inside an event callback on the main thread, you don’t need to use this API.

Be aware that failing to end these activities for an extended period of time can have significant negative impacts on the performance of your user’s computer, so be sure to use only the minimum amount of time required. User preferences may override your application’s request.

You can also use this API to control automatic termination or sudden termination (see [Support Sudden Termination](processinfo.md#Support-Sudden-Termination)). For example, the following code brackets the work to protect it from sudden termination:

**Swift**

```swift
let activity = ProcessInfo.processInfo.beginActivity(
    options: .automaticTerminationDisabled, 
    reason: "Good Reason")
// Perform some work.
ProcessInfo.processInfo.endActivity(activity)
```

**Objective-C**

```objc
id activity = [[NSProcessInfo processInfo] beginActivityWithOptions:NSActivityAutomaticTerminationDisabled reason:@"Good Reason"];
// Perform some work.
[[NSProcessInfo processInfo] endActivity:activity];
```

The above example is equivalent to the following code, which uses the [disableAutomaticTermination(\_:)](processinfo/disableautomatictermination%28__%29.md) method:

**Swift**

```swift
ProcessInfo.processInfo.disableAutomaticTermination("Good Reason")
// Perform some work.
ProcessInfo.processInfo.enableAutomaticTermination("Good Reason")
```

**Objective-C**

```objc
[[NSProcessInfo processInfo] disableAutomaticTermination:@"Good Reason"];
// Perform some work.
[[NSProcessInfo processInfo] enableAutomaticTermination:@"Good Reason"];
```

Because this API returns an object, it may be easier to pair begins and ends than when using the automatic termination API. If your app deallocates the object before the [endActivity(\_:)](processinfo/endactivity%28__%29.md) call, the activity ends automatically.

This API also provides a mechanism to disable system-wide idle sleep and display idle sleep. These can have a large impact on the user experience, so be careful to end activities that disable sleep (including [userInitiated](processinfo/activityoptions/userinitiated.md)).

<a id="Support-Sudden-Termination"></a>

### Support Sudden Termination

macOS 10.6 and later includes a mechanism that allows the system to log out or shut down more quickly by, whenever possible, killing applications instead of requesting that they quit themselves.

Your application can enable this capability on a global basis and then manually override its availability during actions that could cause data corruption or a poor user experience by allowing sudden termination.

Alternatively, your application can manually enable and disable this functionality. Creating a process assigns a counter that indicates if the process is safe to terminate. You decrement and increment the counter using the methods [enableSuddenTermination()](processinfo/enablesuddentermination%28%29.md) and [disableSuddenTermination()](processinfo/disablesuddentermination%28%29.md). A value of `0` enables the system to terminate the process without first sending a notification or event.

Your application can support sudden termination upon launch by adding a key to the application’s `Info.plist` file. If the [NSSupportsSuddenTermination](../bundleresources/information-property-list/nssupportssuddentermination.md) key exists in the `Info.plist` file and has a value of [true](https://developer.apple.com/documentation/swift/true), it’s the equivalent of calling [enableSuddenTermination()](processinfo/enablesuddentermination%28%29.md) during your application launch. This allows the system to terminate the process immediately. You can still override this behavior by invoking [disableSuddenTermination()](processinfo/disablesuddentermination%28%29.md).

Typically, you disable sudden termination whenever your app defers work that the app must complete before it terminates. If, for example, your app defers writing data to disk and enables sudden termination, you should bracket the sensitive operations with a call to [disableSuddenTermination()](processinfo/disablesuddentermination%28%29.md), perform the necessary operations, and then send a balancing [enableSuddenTermination()](processinfo/enablesuddentermination%28%29.md) message.

In agents or daemon executables that don’t depend on AppKit, you can manually invoke [enableSuddenTermination()](processinfo/enablesuddentermination%28%29.md) right away. You can then use the enable and disable methods whenever the process has work it must do before it terminates.

Some AppKit functionality automatically disables sudden termination on a temporary basis to ensure data integrity.

- [UserDefaults](userdefaults.md) temporarily disables sudden termination to prevent the process from terminating between the time at which it sets the default and the time at which it writes the preferences file — including that default — to disk.
- [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) temporarily disables sudden termination to prevent the process from terminating between the time at which the user has made a change to a document and the time at which [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) writes the user’s change to disk.

> **Tip**

>  You can determine the value of the sudden termination using the following LLDB command.
>
> ```objc
> print (long)[[NSClassFromString(@"NSProcessInfo") processInfo] _suddenTerminationDisablingCount]
> ```
>
> Don’t attempt to invoke or override `suddenTerminationDisablingCount` (a private method) in your application. It’s there for this debugging purpose and may disappear at any time.

<a id="Monitor-Thermal-State-to-Adjust-App-Performance"></a>

### Monitor Thermal State to Adjust App Performance

*Thermal state* indicates the level of heat generated by logic components as they run apps. As the thermal state increases, the system decreases heat by reducing the speed of the processors. Optimize your app’s performance by monitoring the thermal state and reducing system usage as the thermal state increases. Query the current state with [thermalState](processinfo/thermalstate-swift.property.md) to determine if your app needs to reduce system usage. You can register the [thermalStateDidChangeNotification](processinfo/thermalstatedidchangenotification.md) for notifications of a change in thermal state. For recommended actions, see [ProcessInfo.ThermalState](processinfo/thermalstate-swift.enum.md).

## Topics

### Getting the process-information agent

- [processInfo](processinfo/processinfo.md): Returns the process information agent for the process.

### Accessing process information

- [arguments](processinfo/arguments.md): Array of strings with the command-line arguments for the process.
- [environment](processinfo/environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](processinfo/globallyuniquestring.md): Global unique identifier for the process.
- [isMacCatalystApp](processinfo/ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [isiOSAppOnMac](processinfo/isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [isiOSAppOnVision](processinfo/isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processinfo/processidentifier.md): The identifier of the process (often called process ID).
- [processName](processinfo/processname.md): The name of the process.

### Accessing user information

Each user account in macOS has a full name (e.g., “Johnny Appleseed”) and an account name (e.g., “jappleseed”). You can view these names from the *Users & Groups* pane of System Preferences, and you can use either name to log in to your Mac.

- [userName](processinfo/username.md): Returns the account name of the current user.
- [fullUserName](processinfo/fullusername.md): Returns the full name of the current user.

### Working with sudden application termination

- [disableSuddenTermination()](processinfo/disablesuddentermination%28%29.md): Disables the application for quickly killing using sudden termination.
- [enableSuddenTermination()](processinfo/enablesuddentermination%28%29.md): Enables the application for quick killing using sudden termination.

### Controlling automatic termination

- [disableAutomaticTermination(\_:)](processinfo/disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [enableAutomaticTermination(\_:)](processinfo/enableautomatictermination%28__%29.md): Enables automatic termination for the application.
- [automaticTerminationSupportEnabled](processinfo/automaticterminationsupportenabled.md): A Boolean value indicating whether the app supports automatic termination.

### Getting host information

- [hostName](processinfo/hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](processinfo/operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](processinfo/operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeast(\_:)](processinfo/isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [OperatingSystemVersion](operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem()](processinfo/operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem()](processinfo/operatingsystem%28%29.md).
- [operatingSystemName()](processinfo/operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

### Getting computer information

- [processorCount](processinfo/processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](processinfo/activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](processinfo/physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertified(for:)](processinfo/isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile(\_:)](processinfo/hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](processinfo/systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

### Managing activities

- [beginActivity(options:reason:)](processinfo/beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity(\_:)](processinfo/endactivity%28__%29.md): Ends the given activity.
- [performActivity(options:reason:using:)](processinfo/performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivity(withReason:using:)](processinfo/performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [ProcessInfo.ActivityOptions](processinfo/activityoptions.md): Option flags used with [beginActivity(options:reason:)](processinfo/beginactivity%28options_reason_%29.md) and [performActivity(options:reason:using:)](processinfo/performactivity%28options_reason_using_%29.md).

### Getting the thermal state

- [thermalState](processinfo/thermalstate-swift.property.md): The current thermal state of the system.
- [ProcessInfo.ThermalState](processinfo/thermalstate-swift.enum.md): Values used to indicate the system’s thermal state.

### Determining whether low power mode is enabled

- [isLowPowerModeEnabled](processinfo/islowpowermodeenabled.md): A Boolean value that indicates the current state of Low Power Mode.

### Working with notifications

- [thermalStateDidChangeNotification](processinfo/thermalstatedidchangenotification.md): Posts when the thermal state of the system changes.
- [NSProcessInfoPowerStateDidChange](nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.

### Working with notification messsages

- [ProcessInfo.PowerStateDidChangeMessage](processinfo/powerstatedidchangemessage.md): A message the system sends when the device’s power state changes.
- [ProcessInfo.ThermalStateDidChangeMessage](processinfo/thermalstatedidchangemessage.md): A message the system sends when the device’s thermal state changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSProcessInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A collection of information about the current process.

## Declaration

```objectivec
@interface NSProcessInfo : NSObject
```

<a id="overview"></a>

## Overview

Each process has a single, shared [NSProcessInfo](processinfo.md) object known as a *process information agent* that can return information such as arguments, environment variables, host name, and process name. The [processInfo](processinfo/processinfo.md) class method returns the shared agent for the current process. For example, the following line returns the [NSProcessInfo](processinfo.md) object, which then provides the name of the current process:

**Swift**

```swift
let processName = ProcessInfo.processInfo.processName
```

**Objective-C**

```objc
NSString *processName = [[NSProcessInfo processInfo] processName];
```

> **Note**

>  [NSProcessInfo](processinfo.md) is thread-safe in macOS 10.7 and later.

The [NSProcessInfo](processinfo.md) class also includes the [operatingSystemVersion](processinfo/operatingsystemversion.md) property, which returns an [NSOperatingSystemVersion](operatingsystemversion.md) structure identifying the operating system version on which the process is executing.

[NSProcessInfo](processinfo.md) objects attempt to interpret environment variables and command-line arguments in the user’s default C string encoding if they can’t convert to Unicode as UTF-8 strings. If neither the Unicode nor C string conversion works, the [NSProcessInfo](processinfo.md) object ignores these values.

<a id="Manage-Activities"></a>

### Manage Activities

The system has heuristics to improve battery life, performance, and responsiveness of applications for the benefit of the user. You can use the following methods to manage *activities* that give hints to the system that your application has special requirements:

- [beginActivityWithOptions:reason:](processinfo/beginactivity%28options_reason_%29.md)
- [endActivity:](processinfo/endactivity%28__%29.md)
- [performActivityWithOptions:reason:usingBlock:](processinfo/performactivity%28options_reason_using_%29.md)

In response to creating an activity, the system disables some or all of the heuristics so your application can finish quickly while still providing responsive behavior if the user needs it.

You use activities when your application performs a long-running operation. If the activity can take different amounts of time (for example, calculating the next move in a chess game), it should use this API to ensure correct behavior when the amount of data or the capabilities of the user’s computer varies. Activities fall into two major categories:

- *User-initiated* activities are explicitly started by the user. Examples include exporting or downloading a user-specified file.
- *Background* activities perform the normal operations of your application and aren’t explicitly started by the user. Examples include autosaving, indexing, and automatic downloading of files.

In addition, if your application requires high priority input/output (I/O), you can include the [NSActivityLatencyCritical](processinfo/activityoptions/latencycritical.md) flag (using a bitwise `OR`). You should only use this flag for activities like audio or video recording that require high priority I/O.

If your activity takes place synchronously inside an event callback on the main thread, you don’t need to use this API.

Be aware that failing to end these activities for an extended period of time can have significant negative impacts on the performance of your user’s computer, so be sure to use only the minimum amount of time required. User preferences may override your application’s request.

You can also use this API to control automatic termination or sudden termination (see [Support Sudden Termination](processinfo.md#Support-Sudden-Termination)). For example, the following code brackets the work to protect it from sudden termination:

**Swift**

```swift
let activity = ProcessInfo.processInfo.beginActivity(
    options: .automaticTerminationDisabled, 
    reason: "Good Reason")
// Perform some work.
ProcessInfo.processInfo.endActivity(activity)
```

**Objective-C**

```objc
id activity = [[NSProcessInfo processInfo] beginActivityWithOptions:NSActivityAutomaticTerminationDisabled reason:@"Good Reason"];
// Perform some work.
[[NSProcessInfo processInfo] endActivity:activity];
```

The above example is equivalent to the following code, which uses the [disableAutomaticTermination:](processinfo/disableautomatictermination%28__%29.md) method:

**Swift**

```swift
ProcessInfo.processInfo.disableAutomaticTermination("Good Reason")
// Perform some work.
ProcessInfo.processInfo.enableAutomaticTermination("Good Reason")
```

**Objective-C**

```objc
[[NSProcessInfo processInfo] disableAutomaticTermination:@"Good Reason"];
// Perform some work.
[[NSProcessInfo processInfo] enableAutomaticTermination:@"Good Reason"];
```

Because this API returns an object, it may be easier to pair begins and ends than when using the automatic termination API. If your app deallocates the object before the [endActivity:](processinfo/endactivity%28__%29.md) call, the activity ends automatically.

This API also provides a mechanism to disable system-wide idle sleep and display idle sleep. These can have a large impact on the user experience, so be careful to end activities that disable sleep (including [NSActivityUserInitiated](processinfo/activityoptions/userinitiated.md)).

<a id="Support-Sudden-Termination"></a>

### Support Sudden Termination

macOS 10.6 and later includes a mechanism that allows the system to log out or shut down more quickly by, whenever possible, killing applications instead of requesting that they quit themselves.

Your application can enable this capability on a global basis and then manually override its availability during actions that could cause data corruption or a poor user experience by allowing sudden termination.

Alternatively, your application can manually enable and disable this functionality. Creating a process assigns a counter that indicates if the process is safe to terminate. You decrement and increment the counter using the methods [enableSuddenTermination](processinfo/enablesuddentermination%28%29.md) and [disableSuddenTermination](processinfo/disablesuddentermination%28%29.md). A value of `0` enables the system to terminate the process without first sending a notification or event.

Your application can support sudden termination upon launch by adding a key to the application’s `Info.plist` file. If the [NSSupportsSuddenTermination](../bundleresources/information-property-list/nssupportssuddentermination.md) key exists in the `Info.plist` file and has a value of [true](https://developer.apple.com/documentation/swift/true), it’s the equivalent of calling [enableSuddenTermination](processinfo/enablesuddentermination%28%29.md) during your application launch. This allows the system to terminate the process immediately. You can still override this behavior by invoking [disableSuddenTermination](processinfo/disablesuddentermination%28%29.md).

Typically, you disable sudden termination whenever your app defers work that the app must complete before it terminates. If, for example, your app defers writing data to disk and enables sudden termination, you should bracket the sensitive operations with a call to [disableSuddenTermination](processinfo/disablesuddentermination%28%29.md), perform the necessary operations, and then send a balancing [enableSuddenTermination](processinfo/enablesuddentermination%28%29.md) message.

In agents or daemon executables that don’t depend on AppKit, you can manually invoke [enableSuddenTermination](processinfo/enablesuddentermination%28%29.md) right away. You can then use the enable and disable methods whenever the process has work it must do before it terminates.

Some AppKit functionality automatically disables sudden termination on a temporary basis to ensure data integrity.

- [NSUserDefaults](userdefaults.md) temporarily disables sudden termination to prevent the process from terminating between the time at which it sets the default and the time at which it writes the preferences file — including that default — to disk.
- [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) temporarily disables sudden termination to prevent the process from terminating between the time at which the user has made a change to a document and the time at which [NSDocument](https://developer.apple.com/documentation/appkit/nsdocument) writes the user’s change to disk.

> **Tip**

>  You can determine the value of the sudden termination using the following LLDB command.
>
> ```objc
> print (long)[[NSClassFromString(@"NSProcessInfo") processInfo] _suddenTerminationDisablingCount]
> ```
>
> Don’t attempt to invoke or override `suddenTerminationDisablingCount` (a private method) in your application. It’s there for this debugging purpose and may disappear at any time.

<a id="Monitor-Thermal-State-to-Adjust-App-Performance"></a>

### Monitor Thermal State to Adjust App Performance

*Thermal state* indicates the level of heat generated by logic components as they run apps. As the thermal state increases, the system decreases heat by reducing the speed of the processors. Optimize your app’s performance by monitoring the thermal state and reducing system usage as the thermal state increases. Query the current state with [thermalState](processinfo/thermalstate-swift.property.md) to determine if your app needs to reduce system usage. You can register the [NSProcessInfoThermalStateDidChangeNotification](processinfo/thermalstatedidchangenotification.md) for notifications of a change in thermal state. For recommended actions, see [NSProcessInfoThermalState](processinfo/thermalstate-swift.enum.md).

## Topics

### Getting the process-information agent

- [processInfo](processinfo/processinfo.md): Returns the process information agent for the process.

### Accessing process information

- [arguments](processinfo/arguments.md): Array of strings with the command-line arguments for the process.
- [environment](processinfo/environment.md): The variable names (keys) and their values in the environment from which the process was launched.
- [globallyUniqueString](processinfo/globallyuniquestring.md): Global unique identifier for the process.
- [macCatalystApp](processinfo/ismaccatalystapp.md): A Boolean value that indicates whether the process originated as an iOS app and runs on macOS.
- [iOSAppOnMac](processinfo/isiosapponmac.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on a Mac.
- [iOSAppOnVision](processinfo/isiosapponvision.md): A Boolean value that indicates whether the process is an iPhone or iPad app running on visionOS.
- [processIdentifier](processinfo/processidentifier.md): The identifier of the process (often called process ID).
- [processName](processinfo/processname.md): The name of the process.

### Accessing user information

Each user account in macOS has a full name (e.g., “Johnny Appleseed”) and an account name (e.g., “jappleseed”). You can view these names from the *Users & Groups* pane of System Preferences, and you can use either name to log in to your Mac.

- [userName](processinfo/username.md): Returns the account name of the current user.
- [fullUserName](processinfo/fullusername.md): Returns the full name of the current user.

### Working with sudden application termination

- [disableSuddenTermination](processinfo/disablesuddentermination%28%29.md): Disables the application for quickly killing using sudden termination.
- [enableSuddenTermination](processinfo/enablesuddentermination%28%29.md): Enables the application for quick killing using sudden termination.

### Controlling automatic termination

- [disableAutomaticTermination:](processinfo/disableautomatictermination%28__%29.md): Disables automatic termination for the application.
- [enableAutomaticTermination:](processinfo/enableautomatictermination%28__%29.md): Enables automatic termination for the application.
- [automaticTerminationSupportEnabled](processinfo/automaticterminationsupportenabled.md): A Boolean value indicating whether the app supports automatic termination.
- [automaticTerminationOptOutCounter](nsprocessinfo/automaticterminationoptoutcounter.md)

### Getting host information

- [hostName](processinfo/hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](processinfo/operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](processinfo/operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeastVersion:](processinfo/isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [NSOperatingSystemVersion](operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem](processinfo/operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem](processinfo/operatingsystem%28%29.md).
- [operatingSystemName](processinfo/operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

### Getting computer information

- [processorCount](processinfo/processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](processinfo/activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](processinfo/physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertifiedFor:](processinfo/isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile:](processinfo/hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](processinfo/systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

### Managing activities

- [beginActivityWithOptions:reason:](processinfo/beginactivity%28options_reason_%29.md): Begin an activity using the given options and reason.
- [endActivity:](processinfo/endactivity%28__%29.md): Ends the given activity.
- [performActivityWithOptions:reason:usingBlock:](processinfo/performactivity%28options_reason_using_%29.md): Synchronously perform an activity defined by a given block using the given options.
- [performExpiringActivityWithReason:usingBlock:](processinfo/performexpiringactivity%28withreason_using_%29.md): Performs the specified block asynchronously and notifies you if the process is about to be suspended.
- [NSActivityOptions](processinfo/activityoptions.md): Option flags used with [beginActivityWithOptions:reason:](processinfo/beginactivity%28options_reason_%29.md) and [performActivityWithOptions:reason:usingBlock:](processinfo/performactivity%28options_reason_using_%29.md).

### Getting the thermal state

- [thermalState](processinfo/thermalstate-swift.property.md): The current thermal state of the system.
- [NSProcessInfoThermalState](processinfo/thermalstate-swift.enum.md): Values used to indicate the system’s thermal state.

### Determining whether low power mode is enabled

- [lowPowerModeEnabled](processinfo/islowpowermodeenabled.md): A Boolean value that indicates the current state of Low Power Mode.

### Working with notifications

- [NSProcessInfoThermalStateDidChangeNotification](processinfo/thermalstatedidchangenotification.md): Posts when the thermal state of the system changes.
- [NSProcessInfoPowerStateDidChangeNotification](nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.

### Instance Variables

- [arguments](nsprocessinfo/arguments-c.ivar.md)
- [environment](nsprocessinfo/environment-c.ivar.md)
- [hostName](nsprocessinfo/hostname-c.ivar.md)
- [name](nsprocessinfo/name.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
