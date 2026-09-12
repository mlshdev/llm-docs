> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdictionarykeycallbacks/retain](https://developer.apple.com/documentation/corefoundation/cfdictionarykeycallbacks/retain)

# retain (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to retain each key as they are added to the collection. This callback returns the value to use as the key in the dictionary, which is usually the value parameter passed to this callback, but may be a different value if a different value should be used as the key. If `NULL`, keys are not retained. See [CFDictionaryRetainCallBack](../cfdictionaryretaincallback.md) for a descriptions of this function’s parameters.

## Declaration

```swift
var retain: CFDictionaryRetainCallBack!
```

# retain (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback used to retain each key as they are added to the collection. This callback returns the value to use as the key in the dictionary, which is usually the value parameter passed to this callback, but may be a different value if a different value should be used as the key. If `NULL`, keys are not retained. See [CFDictionaryRetainCallBack](../cfdictionaryretaincallback.md) for a descriptions of this function’s parameters.

## Declaration

```objectivec
CFDictionaryRetainCallBack retain;
```
