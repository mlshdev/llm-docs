> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectransformdebugattributename](https://developer.apple.com/documentation/security/ksectransformdebugattributename)

# kSecTransformDebugAttributeName (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 12.0)

A write stream that should receive debug data.

> SecTransform is no longer supported

## Declaration

```swift
let kSecTransformDebugAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

Set this attribute to a [CFWriteStream](../corefoundation/cfwritestream.md). This signals the transform to write debugging information to the stream. If you set this attribute to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), debug data is written to `stderr` instead.

# kSecTransformDebugAttributeName (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 12.0)

A write stream that should receive debug data.

> SecTransform is no longer supported

## Declaration

```objectivec
extern CFStringRef const kSecTransformDebugAttributeName;
```

<a id="Discussion"></a>

## Discussion

Set this attribute to a [CFWriteStreamRef](../corefoundation/cfwritestream.md). This signals the transform to write debugging information to the stream. If you set this attribute to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), debug data is written to `stderr` instead.
