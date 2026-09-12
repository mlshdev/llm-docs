> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionaryvaluecallbacks/release](https://developer.apple.com/documentation/corefoundation/cfdictionaryvaluecallbacks/release)

# release (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to release values as they are removed from the dictionary. If `NULL`, values are not released. See [CFDictionaryReleaseCallBack](../cfdictionaryreleasecallback.md) for a description of this callback.

## Declaration

```swift
var release: CFDictionaryReleaseCallBack!
```

# release (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to release values as they are removed from the dictionary. If `NULL`, values are not released. See [CFDictionaryReleaseCallBack](../cfdictionaryreleasecallback.md) for a description of this callback.

## Declaration

```objectivec
CFDictionaryReleaseCallBack release;
```
