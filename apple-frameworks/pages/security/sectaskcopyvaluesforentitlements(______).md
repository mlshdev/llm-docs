> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectaskcopyvaluesforentitlements(_:_:_:)](https://developer.apple.com/documentation/security/sectaskcopyvaluesforentitlements(_:_:_:))

# SecTaskCopyValuesForEntitlements(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the values of multiple entitlements for the represented task.

## Declaration

```swift
func SecTaskCopyValuesForEntitlements(_ task: SecTask, _ entitlements: CFArray, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFDictionary?
```

## Parameters

- `task`: The task whose entitlements you want.
- `entitlements`: An array of the names of the entitlement to be fetched.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A dictionary containing the entitlement names as keys with the corresponding entitlements as the dictionary values, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this dictionary’s memory when you are done with it.

# SecTaskCopyValuesForEntitlements (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the values of multiple entitlements for the represented task.

## Declaration

```objectivec
CFDictionaryRefSecTaskCopyValuesForEntitlements(SecTaskRef task, CFArrayRef entitlements, CFErrorRef*error);
```

## Parameters

- `task`: The task whose entitlements you want.
- `entitlements`: An array of the names of the entitlement to be fetched.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

A dictionary containing the entitlement names as keys with the corresponding entitlements as the dictionary values, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this dictionary’s memory when you are done with it.
