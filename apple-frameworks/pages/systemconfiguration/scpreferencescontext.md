> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescontext](https://developer.apple.com/documentation/systemconfiguration/scpreferencescontext)

# SCPreferencesContext (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure containing user-specified data and callbacks for accessing system configuration preferences.

## Declaration

```swift
struct SCPreferencesContext
```

## Topics

### Initializers

- [init()](scpreferencescontext/init%28%29.md): Creates a preferences context.
- [init(version:info:retain:release:copyDescription:)](scpreferencescontext/init%28version_info_retain_release_copydescription_%29.md): Creates a preferences context with the specified raw values.

### Instance Properties

- [copyDescription](scpreferencescontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scpreferencescontext/info.md): A C pointer to a user-specified block of data.
- [release](scpreferencescontext/release.md): The calllback used to remove a retain previously added for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [retain](scpreferencescontext/retain.md): The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [version](scpreferencescontext/version.md): The version number of the structure type being passed in as a parameter to [SCPreferencesSetCallback(\_:\_:\_:)](scpreferencessetcallback%28______%29.md). This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [SCPreferences](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesCallBack](scpreferencescallback.md): Type of the callback function used when the preferences have been updated or applied.

# SCPreferencesContext (Objective-C)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure containing user-specified data and callbacks for accessing system configuration preferences.

## Declaration

```objectivec
typedef struct { ... } SCPreferencesContext;
```

## Topics

### Instance Properties

- [copyDescription](scpreferencescontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scpreferencescontext/info.md): A C pointer to a user-specified block of data.
- [release](scpreferencescontext/release.md): The calllback used to remove a retain previously added for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [retain](scpreferencescontext/retain.md): The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value may be `NULL`.
- [version](scpreferencescontext/version.md): The version number of the structure type being passed in as a parameter to [SCPreferencesSetCallback](scpreferencessetcallback%28______%29.md). This structure is version `0`.

## See Also

### Data Types

- [SCPreferencesRef](scpreferences.md): The handle to an open preferences session for accessing system configuration preferences.
- [SCPreferencesCallBack](scpreferencescallback.md): Type of the callback function used when the preferences have been updated or applied.
