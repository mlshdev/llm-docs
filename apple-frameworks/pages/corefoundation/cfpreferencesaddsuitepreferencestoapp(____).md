> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencesaddsuitepreferencestoapp(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencesaddsuitepreferencestoapp(_:_:))

# CFPreferencesAddSuitePreferencesToApp(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds suite preferences to an application’s preference search chain.

## Declaration

```swift
func CFPreferencesAddSuitePreferencesToApp(_ applicationID: CFString, _ suiteID: CFString)
```

## Parameters

- `applicationID`: The ID of the application to which to add suite preferences, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `suiteID`: The ID of the application suite preferences to add. Takes the form of a Java package name, `com.foosoft`.

<a id="Discussion"></a>

## Discussion

Suite preferences allow you to maintain a set of preferences that are common to all applications in the suite. When a suite is added to an application’s search chain, all of the domains pertaining to that suite are inserted into the chain. Suite preferences are added between the “Current Application” domains and the “Any Application” domains. If you add multiple suite preferences to one application, the order of the suites in the search chain is non-deterministic. You can override a suite preference for a given application by defining the same preference key in the application specific preferences.

## See Also

### Adding and Removing Suite Preferences

- [CFPreferencesRemoveSuitePreferencesFromApp(\_:\_:)](cfpreferencesremovesuitepreferencesfromapp%28____%29.md): Removes suite preferences from an application’s search chain.

# CFPreferencesAddSuitePreferencesToApp (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds suite preferences to an application’s preference search chain.

## Declaration

```objectivec
extern void CFPreferencesAddSuitePreferencesToApp(CFStringRef applicationID, CFStringRef suiteID);
```

## Parameters

- `applicationID`: The ID of the application to which to add suite preferences, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `suiteID`: The ID of the application suite preferences to add. Takes the form of a Java package name, `com.foosoft`.

<a id="Discussion"></a>

## Discussion

Suite preferences allow you to maintain a set of preferences that are common to all applications in the suite. When a suite is added to an application’s search chain, all of the domains pertaining to that suite are inserted into the chain. Suite preferences are added between the “Current Application” domains and the “Any Application” domains. If you add multiple suite preferences to one application, the order of the suites in the search chain is non-deterministic. You can override a suite preference for a given application by defining the same preference key in the application specific preferences.

## See Also

### Adding and Removing Suite Preferences

- [CFPreferencesRemoveSuitePreferencesFromApp](cfpreferencesremovesuitepreferencesfromapp%28____%29.md): Removes suite preferences from an application’s search chain.
