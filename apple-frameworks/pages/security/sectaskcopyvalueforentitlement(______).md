> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectaskcopyvalueforentitlement(_:_:_:)](https://developer.apple.com/documentation/security/sectaskcopyvalueforentitlement(_:_:_:))

# SecTaskCopyValueForEntitlement(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of a single entitlement for the represented task.

## Declaration

```swift
func SecTaskCopyValueForEntitlement(_ task: SecTask, _ entitlement: CFString, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> CFTypeRef?
```

## Parameters

- `task`: The task whose entitlement you want.
- `entitlement`: The name of the entitlement to be fetched.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

The value of the specified entitlement for the process or `NULL` if the entitlement value could not be retrieved. The type of the returned value depends on the entitlement specified. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

An empty return value may indicate an error, or it may indicate that the entitlement is simply not present.  In the latter case, no error is returned.

# SecTaskCopyValueForEntitlement (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of a single entitlement for the represented task.

## Declaration

```objectivec
CFTypeRefSecTaskCopyValueForEntitlement(SecTaskRef task, CFStringRef entitlement, CFErrorRef*error);
```

## Parameters

- `task`: The task whose entitlement you want.
- `entitlement`: The name of the entitlement to be fetched.
- `error`: A pointer that the function uses to provide an error object with details if an error occurs. The caller becomes responsible for the object’s memory. Pass `NULL` to ignore the error.

<a id="return-value"></a>

## Return Value

The value of the specified entitlement for the process or `NULL` if the entitlement value could not be retrieved. The type of the returned value depends on the entitlement specified. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

An empty return value may indicate an error, or it may indicate that the entitlement is simply not present.  In the latter case, no error is returned.
