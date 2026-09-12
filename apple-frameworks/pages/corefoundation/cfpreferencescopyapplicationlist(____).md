> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfpreferencescopyapplicationlist(_:_:)](https://developer.apple.com/documentation/corefoundation/cfpreferencescopyapplicationlist(_:_:))

# CFPreferencesCopyApplicationList(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.

> Unsupported API

## Declaration

```swift
func CFPreferencesCopyApplicationList(_ userName: CFString, _ hostName: CFString) -> CFArray?
```

## Parameters

- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The list of application IDs. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Miscellaneous Functions

- [CFPreferencesAppValueIsForced(\_:\_:)](cfpreferencesappvalueisforced%28____%29.md): Determines whether or not a given key has been imposed on the user.

# CFPreferencesCopyApplicationList (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Constructs and returns the list of all applications that have preferences in the scope of the specified user and host.

> Unsupported API

## Declaration

```objectivec
extern CFArrayRefCFPreferencesCopyApplicationList(CFStringRef userName, CFStringRef hostName);
```

## Parameters

- `userName`: [kCFPreferencesCurrentUser](kcfpreferencescurrentuser.md) to search the current-user domain, otherwise [kCFPreferencesAnyUser](kcfpreferencesanyuser.md) to search the any-user domain.
- `hostName`: [kCFPreferencesCurrentHost](kcfpreferencescurrenthost.md) to search the current-host domain, otherwise [kCFPreferencesAnyHost](kcfpreferencesanyhost.md) to search the any-host domain.

<a id="return-value"></a>

## Return Value

The list of application IDs. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Miscellaneous Functions

- [CFPreferencesAppValueIsForced](cfpreferencesappvalueisforced%28____%29.md): Determines whether or not a given key has been imposed on the user.
