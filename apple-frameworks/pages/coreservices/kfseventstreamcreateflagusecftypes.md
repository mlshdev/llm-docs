> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kfseventstreamcreateflagusecftypes](https://developer.apple.com/documentation/coreservices/kfseventstreamcreateflagusecftypes)

# kFSEventStreamCreateFlagUseCFTypes

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
var kFSEventStreamCreateFlagUseCFTypes: Int { get }
```

<a id="discussion"></a>

## Discussion

The framework will invoke your callback function with CF types rather than raw C types (i.e., a CFArrayRef of CFStringRefs, rather than a raw C array of raw C string pointers). See FSEventStreamCallback.
