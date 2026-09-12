> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smjobcopydictionary(_:_:)](https://developer.apple.com/documentation/servicemanagement/smjobcopydictionary(_:_:))

# SMJobCopyDictionary(\_:\_:) (Swift)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Copies the job description dictionary for the specified job label.

## Declaration

```swift
func SMJobCopyDictionary(_ domain: CFString!, _ jobLabel: CFString) -> Unmanaged<CFDictionary>!
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `jobLabel`: The label identifier of the job to copy.

<a id="return-value"></a>

## Return Value

A new dictionary describing the job, or `NULL` if the system couldn’t find the job. The caller must release the dictionary.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries(\_:)](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobRemove(\_:\_:\_:\_:\_:)](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.
- [SMJobSubmit(\_:\_:\_:\_:)](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.

# SMJobCopyDictionary (Objective-C)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Copies the job description dictionary for the specified job label.

## Declaration

```objectivec
extern CFDictionaryRefSMJobCopyDictionary(CFStringRef domain, CFStringRef jobLabel);
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).
- `jobLabel`: The label identifier of the job to copy.

<a id="return-value"></a>

## Return Value

A new dictionary describing the job, or `NULL` if the system couldn’t find the job. The caller must release the dictionary.

## See Also

### Deprecated Functions

- [SMCopyAllJobDictionaries](smcopyalljobdictionaries%28__%29.md): Deprecated. Copies the job description dictionaries for all jobs in the specified domain.
- [SMJobRemove](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.
- [SMJobSubmit](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.
