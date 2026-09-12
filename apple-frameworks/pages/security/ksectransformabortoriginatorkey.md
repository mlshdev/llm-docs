> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformabortoriginatorkey](https://developer.apple.com/documentation/security/ksectransformabortoriginatorkey)

# kSecTransformAbortOriginatorKey (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key in an error’s `userInfo` dictionary whose value indicates the transform that caused the chain to abort.

## Declaration

```swift
let kSecTransformAbortOriginatorKey: CFString
```

<a id="Discussion"></a>

## Discussion

Use the value associated with this key to determine exactly which transform failed when more than one error occurs during transform evaluation.

# kSecTransformAbortOriginatorKey (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The key in an error’s `userInfo` dictionary whose value indicates the transform that caused the chain to abort.

## Declaration

```objectivec
extern CFStringRef const kSecTransformAbortOriginatorKey;
```

<a id="Discussion"></a>

## Discussion

Use the value associated with this key to determine exactly which transform failed when more than one error occurs during transform evaluation.
