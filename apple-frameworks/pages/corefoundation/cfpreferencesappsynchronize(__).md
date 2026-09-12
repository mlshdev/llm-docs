> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencesappsynchronize(_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencesappsynchronize(_:))

# CFPreferencesAppSynchronize(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.

## Declaration

```swift
func CFPreferencesAppSynchronize(_ applicationID: CFString) -> Bool
```

## Parameters

- `applicationID`: The ID of the application whose preferences to write to storage, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

`true` if synchronization was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Calling the function [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md) is not in itself sufficient for storing preferences. The [CFPreferencesAppSynchronize(\_:)](cfpreferencesappsynchronize%28__%29.md) function writes to permanent storage all pending preference changes for the application. Typically you would call this function after multiple calls to [CFPreferencesSetAppValue(\_:\_:\_:)](cfpreferencessetappvalue%28______%29.md). Conversely, preference data is cached after it is first read. Changes made externally are not automatically incorporated. The [CFPreferencesAppSynchronize(\_:)](cfpreferencesappsynchronize%28__%29.md) function reads the latest preferences from permanent storage.

## See Also

### Synchronizing Preferences

- [CFPreferencesSynchronize(\_:\_:\_:)](cfpreferencessynchronize%28______%29.md): For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.

# CFPreferencesAppSynchronize (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Writes to permanent storage all pending changes to the preference data for the application, and reads the latest preference data from permanent storage.

## Declaration

```objectivec
extern Boolean CFPreferencesAppSynchronize(CFStringRef applicationID);
```

## Parameters

- `applicationID`: The ID of the application whose preferences to write to storage, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.

<a id="return-value"></a>

## Return Value

`true` if synchronization was successful, otherwise `false`.

<a id="Discussion"></a>

## Discussion

Calling the function [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md) is not in itself sufficient for storing preferences. The [CFPreferencesAppSynchronize](cfpreferencesappsynchronize%28__%29.md) function writes to permanent storage all pending preference changes for the application. Typically you would call this function after multiple calls to [CFPreferencesSetAppValue](cfpreferencessetappvalue%28______%29.md). Conversely, preference data is cached after it is first read. Changes made externally are not automatically incorporated. The [CFPreferencesAppSynchronize](cfpreferencesappsynchronize%28__%29.md) function reads the latest preferences from permanent storage.

## See Also

### Synchronizing Preferences

- [CFPreferencesSynchronize](cfpreferencessynchronize%28______%29.md): For the specified domain, writes all pending changes to preference data to permanent storage, and reads latest preference data from permanent storage.
