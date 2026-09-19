> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_retain(_:)

# xpc_retain(\_:)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 4.0+ (deprecated in 17.4) · macOS 10.7+ (deprecated in 14.4)

> Use Swift’s automatic reference counting to manage the lifetime of XPC objects

## Declaration

```swift
func xpc_retain(_ object: xpc_object_t) -> xpc_object_t
```

## See Also

### Object life cycle

- [xpc_release(\_:)](xpc_release%28__%29.md): Deprecated.
