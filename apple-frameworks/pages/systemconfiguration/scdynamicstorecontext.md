> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scdynamicstorecontext](https://developer.apple.com/documentation/systemconfiguration/scdynamicstorecontext)

# SCDynamicStoreContext (Swift)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Structure containing user-specified data and callbacks for a dynamic store session.

## Declaration

```swift
struct SCDynamicStoreContext
```

## Topics

### Initializers

- [init()](scdynamicstorecontext/init%28%29.md): Creates a dynamic store context.
- [init(version:info:retain:release:copyDescription:)](scdynamicstorecontext/init%28version_info_retain_release_copydescription_%29.md): Creates a dynamic store context with the specified values.

### Instance Properties

- [copyDescription](scdynamicstorecontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scdynamicstorecontext/info.md): A C pointer to a user-specified block of data.
- [release](scdynamicstorecontext/release.md): The callback used to remove a retain previously added for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.
- [retain](scdynamicstorecontext/retain.md): The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.
- [version](scdynamicstorecontext/version.md): The version number of the structure type being passed in as a parameter to the `SCDynamicStore` creation function (such as [SCDynamicStoreCreate(\_:\_:\_:\_:)](scdynamicstorecreate%28________%29.md)). This structure is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStore](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.

# SCDynamicStoreContext (Objective-C)

**Framework:** System Configuration  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Structure containing user-specified data and callbacks for a dynamic store session.

## Declaration

```objectivec
typedef struct { ... } SCDynamicStoreContext;
```

## Topics

### Instance Properties

- [copyDescription](scdynamicstorecontext/copydescription.md): The callback used to provide a description of the `info` field.
- [info](scdynamicstorecontext/info.md): A C pointer to a user-specified block of data.
- [release](scdynamicstorecontext/release.md): The callback used to remove a retain previously added for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.
- [retain](scdynamicstorecontext/retain.md): The callback used to add a retain for the `info` field. If this parameter is not a pointer to a function of the correct prototype, the behavior is undefined. The value of this parameter can be `NULL`.
- [version](scdynamicstorecontext/version.md): The version number of the structure type being passed in as a parameter to the `SCDynamicStore` creation function (such as [SCDynamicStoreCreate](scdynamicstorecreate%28________%29.md)). This structure is version `0`.

## See Also

### Data Types

- [SCDynamicStoreCallBack](scdynamicstorecallback.md): Callback used when notification of changes made to the dynamic store is delivered.
- [SCDynamicStoreRef](scdynamicstore.md): The handle to an open dynamic store session with the system configuration daemon.
