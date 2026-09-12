> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecallback](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecallback)

# SCDynamicStoreCallBack (Swift)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Callback used when notification of changes made to the dynamic store is delivered.

## Declaration

```swift
typealias SCDynamicStoreCallBack = (SCDynamicStore, CFArray, UnsafeMutableRawPointer?) -> Void
```

## Topics

### Fields

- [store](1807875-store.md): The dynamic store session.
- [changedKeys](1807876-changedkeys.md): The list of changed keys.
- [info](1807877-info.md): A C pointer to a user-specified block of data.

## See Also

### Data Types

- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.
- [SCDynamicStore](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.

# SCDynamicStoreCallBack (Objective-C)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Callback used when notification of changes made to the dynamic store is delivered.

## Declaration

```objectivec
typedef void (*)(const struct __SCDynamicStore *, const struct __CFArray *, void *) SCDynamicStoreCallBack;
```

## Topics

### Fields

- [store](1807875-store.md): The dynamic store session.
- [changedKeys](1807876-changedkeys.md): The list of changed keys.
- [info](1807877-info.md): A C pointer to a user-specified block of data.

## See Also

### Data Types

- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.
- [SCDynamicStoreRef](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.
