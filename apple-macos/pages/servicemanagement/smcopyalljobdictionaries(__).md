> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smcopyalljobdictionaries(_:)](https://developer.apple.com/documentation/servicemanagement/smcopyalljobdictionaries(_:))

# SMCopyAllJobDictionaries(\_:) (Swift)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Copies the job description dictionaries for all jobs in the specified domain.

## Declaration

```swift
func SMCopyAllJobDictionaries(_ domain: CFString!) -> Unmanaged<CFArray>!
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).

<a id="return-value"></a>

## Return Value

A new array containing all job dictionaries, or `NULL` if an error occurred. The caller must release the array.

## See Also

### Deprecated Functions

- [SMJobCopyDictionary(\_:\_:)](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobRemove(\_:\_:\_:\_:\_:)](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.
- [SMJobSubmit(\_:\_:\_:\_:)](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.

# SMCopyAllJobDictionaries (Objective-C)

**Framework:** Service Management  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.10)

Copies the job description dictionaries for all jobs in the specified domain.

## Declaration

```objectivec
extern CFArrayRefSMCopyAllJobDictionaries(CFStringRef domain);
```

## Parameters

- `domain`: The job’s domain (for example, [kSMDomainSystemLaunchd](ksmdomainsystemlaunchd.md)).

<a id="return-value"></a>

## Return Value

A new array containing all job dictionaries, or `NULL` if an error occurred. The caller must release the array.

## See Also

### Deprecated Functions

- [SMJobCopyDictionary](smjobcopydictionary%28____%29.md): Deprecated. Copies the job description dictionary for the specified job label.
- [SMJobRemove](smjobremove%28__________%29.md): Deprecated. Removes the job with the specified label from the specified domain.
- [SMJobSubmit](smjobsubmit%28________%29.md): Deprecated. Submits the specified job to the specified domain.
