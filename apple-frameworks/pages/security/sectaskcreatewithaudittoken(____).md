> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectaskcreatewithaudittoken(_:_:)](https://developer.apple.com/documentation/security/sectaskcreatewithaudittoken(_:_:))

# SecTaskCreateWithAuditToken(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a task object for the task that sent the Mach message represented by the audit token.

## Declaration

```swift
func SecTaskCreateWithAuditToken(_ allocator: CFAllocator?, _ token: audit_token_t) -> SecTask?
```

## Parameters

- `allocator`: An allocator. Pass `NULL` to use the default.
- `token`: The audit token of a Mach message.

<a id="return-value"></a>

## Return Value

A new task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this task’s memory when you are done with it.

# SecTaskCreateWithAuditToken (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a task object for the task that sent the Mach message represented by the audit token.

## Declaration

```objectivec
SecTaskRefSecTaskCreateWithAuditToken(CFAllocatorRef allocator, audit_token_t token);
```

## Parameters

- `allocator`: An allocator. Pass `NULL` to use the default.
- `token`: The audit token of a Mach message.

<a id="return-value"></a>

## Return Value

A new task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this task’s memory when you are done with it.
