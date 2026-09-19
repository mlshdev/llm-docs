> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1455376-fseventstreamcreateflags/kfseventstreamcreateflagusecftypes

# kFSEventStreamCreateFlagUseCFTypes

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kFSEventStreamCreateFlagUseCFTypes = 0x00000001
```

<a id="discussion"></a>

## Discussion

The framework will invoke your callback function with CF types rather than raw C types (i.e., a CFArrayRef of CFStringRefs, rather than a raw C array of raw C string pointers). See FSEventStreamCallback.
