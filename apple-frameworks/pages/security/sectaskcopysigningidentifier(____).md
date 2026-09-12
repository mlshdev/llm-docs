> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectaskcopysigningidentifier(_:_:)](https://developer.apple.com/documentation/security/sectaskcopysigningidentifier(_:_:))

# SecTaskCopySigningIdentifier(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of the code signing identifier.

## Declaration

```swift
func SecTaskCopySigningIdentifier(_ task: SecTask, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFString?
```

## Parameters

- `task`: The task whose code signing identifier you want.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A string representing the code signing identifier for the task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this string’s memory when you are done with it.

# SecTaskCopySigningIdentifier (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of the code signing identifier.

## Declaration

```objectivec
CFStringRefSecTaskCopySigningIdentifier(SecTaskRef task, CFErrorRef*error);
```

## Parameters

- `task`: The task whose code signing identifier you want.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A string representing the code signing identifier for the task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this string’s memory when you are done with it.
