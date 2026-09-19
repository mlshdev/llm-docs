> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/systemconfiguration/scdynamicstore

# SCDynamicStore (Swift)

**Framework:** System Configuration  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The handle to an open dynamic store session with the system configuration daemon.

## Declaration

```swift
class SCDynamicStore
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.

# SCDynamicStoreRef (Objective-C)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The handle to an open dynamic store session with the system configuration daemon.

## Declaration

```objectivec
typedef const struct __SCDynamicStore * SCDynamicStoreRef;
```

## See Also

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStoreContext](scdynamicstorecontext.md): Structure containing user-specified data and callbacks for a dynamic store session.
