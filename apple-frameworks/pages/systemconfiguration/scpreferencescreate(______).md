> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scpreferencescreate(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scpreferencescreate(_:_:_:))

# SCPreferencesCreate(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Initiates access to the per-system set of configuration preferences.

## Declaration

```swift
func SCPreferencesCreate(_ allocator: CFAllocator?, _ name: CFString, _ prefsID: CFString?) -> SCPreferences?
```

## Parameters

- `allocator`: The allocator to use to allocate memory for this preferences session. If the value is not a valid `CFAllocator`, the behavior is undefined. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default `CFAllocator`.
- `name`: The name of the calling process.
- `prefsID`: The name of the group of preferences to be accessed or updated. A name that starts with a leading “/” character specifies the absolute path to the file containing the preferences to be accessed. A name that does not start with a leading “/” character specifies a file relative to the default system preferences directory.

  To access the default system preferences, pass in `NULL`.

<a id="return-value"></a>

## Return Value

A reference to the new preferences session. You must release the returned value.

## See Also

### Creating a Preferences Session

- [SCPreferencesCreateWithAuthorization(\_:\_:\_:\_:)](scpreferencescreatewithauthorization%28________%29.md): Initiates access to the per-system set of configuration preferences with the specified authorization.

# SCPreferencesCreate (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.1+

Initiates access to the per-system set of configuration preferences.

## Declaration

```objectivec
SCPreferencesRefSCPreferencesCreate(CFAllocatorRef allocator, CFStringRef name, CFStringRef prefsID);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for this preferences session. If the value is not a valid `CFAllocator`, the behavior is undefined. Pass `NULL` or [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the current default `CFAllocator`.
- `name`: The name of the calling process.
- `prefsID`: The name of the group of preferences to be accessed or updated. A name that starts with a leading “/” character specifies the absolute path to the file containing the preferences to be accessed. A name that does not start with a leading “/” character specifies a file relative to the default system preferences directory.

  To access the default system preferences, pass in `NULL`.

<a id="return-value"></a>

## Return Value

A reference to the new preferences session. You must release the returned value.

## See Also

### Creating a Preferences Session

- [SCPreferencesCreateWithAuthorization](scpreferencescreatewithauthorization%28________%29.md): Initiates access to the per-system set of configuration preferences with the specified authorization.
