> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smjobremove(_:_:_:_:_:)](https://developer.apple.com/documentation/servicemanagement/smjobremove(_:_:_:_:_:))

# SMJobRemove(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Removes the job with the specified label from the specified domain.

## Declaration

```swift
func SMJobRemove(_ domain: CFString!, _ jobLabel: CFString, _ auth: UnsafeMutableRawPointer!, _ wait: Bool, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

```swift
func SMJobRemove(_ domain: CFString!, _ jobLabel: CFString, _ auth: AuthorizationRef!, _ wait: Bool, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `jobLabel`: The label identifier of the job to remove.
- `auth`: An `AuthorizationRef` containing the [kSMRightModifySystemDaemons](ksmrightmodifysystemdaemons.md) right if the specified domain is [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md).
- `wait`: Pass `true` to block until the process for the specified job has exited.
- `outError`: An output reference to a `CFErrorRef` describing the specific error when removing the job, or `NULL` if no error occurred. It’s the responsibility of the app to release the error reference. This argument can be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `true` if the system successfully removes the job, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the job is currently running, it conditionally blocks until the running process has exited.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries(\_:)](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobCopyDictionary(\_:\_:)](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobSubmit(\_:\_:\_:\_:)](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.

# SMJobRemove (Objective-C)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Removes the job with the specified label from the specified domain.

## Declaration

```objectivec
extern Boolean SMJobRemove(CFStringRef domain, CFStringRef jobLabel, void *auth, Boolean wait, CFErrorRef*outError);
```

```objectivec
extern Boolean SMJobRemove(CFStringRef domain, CFStringRef jobLabel, AuthorizationRef auth, Boolean wait, CFErrorRef*outError);
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `jobLabel`: The label identifier of the job to remove.
- `auth`: An `AuthorizationRef` containing the [kSMRightModifySystemDaemons](ksmrightmodifysystemdaemons.md) right if the specified domain is [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md).
- `wait`: Pass `true` to block until the process for the specified job has exited.
- `outError`: An output reference to a `CFErrorRef` describing the specific error when removing the job, or `NULL` if no error occurred. It’s the responsibility of the app to release the error reference. This argument can be `NULL`.

<a id="return-value"></a>

## Return Value

Returns `true` if the system successfully removes the job, otherwise `false`.

<a id="Discussion"></a>

## Discussion

If the job is currently running, it conditionally blocks until the running process has exited.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobCopyDictionary](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobSubmit](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.
