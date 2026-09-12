> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescallback](https://developer.apple.com/documentation/systemconfiguration/scpreferencescallback)

# SCPreferencesCallBack (Swift)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Type of the callback function used when the preferences have been updated or applied.

## Declaration

```swift
typealias SCPreferencesCallBack = (SCPreferences, SCPreferencesNotification, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `prefs`: The preferences session.
- `notificationType`: The type of notification, such as changes committed or changes applied. See [SCPreferencesNotification](scpreferencesnotification.md) for information about possible values.
- `info`: A C pointer to a user-specified block of data.

## Topics

### Fields

- [prefs](1808420-prefs.md): The preferences session.
- [notificationType](1808421-notificationtype.md): The type of notification, such as changes committed or changes applied. See [SCPreferencesNotification](scpreferencesnotification.md) for information about possible values.

## See Also

### Data Types

- [SCPreferences](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesContext](scpreferencescontext.md): A structure containing user-specified data and callbacks for accessing system configuration preferences.

# SCPreferencesCallBack (Objective-C)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Type of the callback function used when the preferences have been updated or applied.

## Declaration

```objectivec
typedef void (*)(const struct __SCPreferences *, enum SCPreferencesNotification, void *) SCPreferencesCallBack;
```

## Parameters

- `prefs`: The preferences session.
- `notificationType`: The type of notification, such as changes committed or changes applied. See [SCPreferencesNotification](scpreferencesnotification.md) for information about possible values.
- `info`: A C pointer to a user-specified block of data.

## Topics

### Fields

- [prefs](1808420-prefs.md): The preferences session.
- [notificationType](1808421-notificationtype.md): The type of notification, such as changes committed or changes applied. See [SCPreferencesNotification](scpreferencesnotification.md) for information about possible values.

## See Also

### Data Types

- [SCPreferencesRef](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesContext](scpreferencescontext.md): A structure containing user-specified data and callbacks for accessing system configuration preferences.
