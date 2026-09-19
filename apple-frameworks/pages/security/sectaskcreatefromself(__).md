> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectaskcreatefromself(_:)

# SecTaskCreateFromSelf(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a task object for the current task.

## Declaration

```swift
func SecTaskCreateFromSelf(_ allocator: CFAllocator?) -> SecTask?
```

## Parameters

- `allocator`: An allocator. Pass `NULL` to use the default.

<a id="return-value"></a>

## Return Value

A new task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this task’s memory when you are done with it.

# SecTaskCreateFromSelf (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a task object for the current task.

## Declaration

```objectivec
SecTaskRefSecTaskCreateFromSelf(CFAllocatorRef allocator);
```

## Parameters

- `allocator`: An allocator. Pass `NULL` to use the default.

<a id="return-value"></a>

## Return Value

A new task, or `NULL` on error. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this task’s memory when you are done with it.
