> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfpreferencesremovesuitepreferencesfromapp(_:_:)

# CFPreferencesRemoveSuitePreferencesFromApp(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes suite preferences from an application’s search chain.

## Declaration

```swift
func CFPreferencesRemoveSuitePreferencesFromApp(_ applicationID: CFString, _ suiteID: CFString)
```

## Parameters

- `applicationID`: The ID of the application from which to remove suite preferences, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `suiteID`: The ID of the application suite preferences to remove. Takes the form of a Java package name, `com.foosoft`.

## See Also

### Adding and Removing Suite Preferences

- [CFPreferencesAddSuitePreferencesToApp(\_:\_:)](cfpreferencesaddsuitepreferencestoapp%28____%29.md): Adds suite preferences to an application’s preference search chain.

# CFPreferencesRemoveSuitePreferencesFromApp (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes suite preferences from an application’s search chain.

## Declaration

```objectivec
extern void CFPreferencesRemoveSuitePreferencesFromApp(CFStringRef applicationID, CFStringRef suiteID);
```

## Parameters

- `applicationID`: The ID of the application from which to remove suite preferences, typically [kCFPreferencesCurrentApplication](kcfpreferencescurrentapplication.md). Do not pass `NULL` or [kCFPreferencesAnyApplication](kcfpreferencesanyapplication.md). Takes the form of a Java package name, `com.foosoft`.
- `suiteID`: The ID of the application suite preferences to remove. Takes the form of a Java package name, `com.foosoft`.

## See Also

### Adding and Removing Suite Preferences

- [CFPreferencesAddSuitePreferencesToApp](cfpreferencesaddsuitepreferencestoapp%28____%29.md): Adds suite preferences to an application’s preference search chain.
