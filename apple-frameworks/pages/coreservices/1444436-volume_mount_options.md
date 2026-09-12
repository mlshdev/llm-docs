> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444436-volume_mount_options](https://developer.apple.com/documentation/coreservices/1444436-volume_mount_options)

# Volume Mount Options

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

Specify how an alias should be resolved.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kResolveAliasFileNoUI](1444436-volume_mount_options/kresolvealiasfilenoui.md): Deprecated. The Alias Manager should resolve the alias without presenting a user interface.
- [kResolveAliasTryFileIDFirst](1444436-volume_mount_options/kresolvealiastryfileidfirst.md): Deprecated. The Alias Manager should search for the alias target using file IDs before searching using the path.
