> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smjobsubmit(_:_:_:_:)](https://developer.apple.com/documentation/servicemanagement/smjobsubmit(_:_:_:_:))

# SMJobSubmit(\_:\_:\_:\_:) (Swift)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Submits the specified job to the specified domain.

## Declaration

```swift
func SMJobSubmit(_ domain: CFString!, _ job: CFDictionary, _ auth: UnsafeMutableRawPointer!, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

```swift
func SMJobSubmit(_ domain: CFString!, _ job: CFDictionary, _ auth: AuthorizationRef!, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `job`: A dictionary describing a job.
- `auth`: An `AuthorizationRef` containing the [kSMRightModifySystemDaemons](ksmrightmodifysystemdaemons.md) right if the specified

  domain is [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md).
- `outError`: An output reference to a `CFErrorRef` describing the specific error when submitting the job, or `NULL` if no error occurred. It’s the responsibility of the app to release the error reference. This argument can be `NULL`.

<a id="return-value"></a>

## Return Value

Returns true if the system successfully submits the job, otherwise `false`.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries(\_:)](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobCopyDictionary(\_:\_:)](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobRemove(\_:\_:\_:\_:\_:)](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.

# SMJobSubmit (Objective-C)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Submits the specified job to the specified domain.

## Declaration

```objectivec
extern Boolean SMJobSubmit(CFStringRef domain, CFDictionaryRef job, void *auth, CFErrorRef*outError);
```

```objectivec
extern Boolean SMJobSubmit(CFStringRef domain, CFDictionaryRef job, AuthorizationRef auth, CFErrorRef*outError);
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `job`: A dictionary describing a job.
- `auth`: An `AuthorizationRef` containing the [kSMRightModifySystemDaemons](ksmrightmodifysystemdaemons.md) right if the specified

  domain is [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md).
- `outError`: An output reference to a `CFErrorRef` describing the specific error when submitting the job, or `NULL` if no error occurred. It’s the responsibility of the app to release the error reference. This argument can be `NULL`.

<a id="return-value"></a>

## Return Value

Returns true if the system successfully submits the job, otherwise `false`.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobCopyDictionary](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobRemove](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.
