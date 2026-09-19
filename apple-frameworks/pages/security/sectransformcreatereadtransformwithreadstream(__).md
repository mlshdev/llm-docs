> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sectransformcreatereadtransformwithreadstream(_:)

# SecTransformCreateReadTransformWithReadStream(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a read transform from a read stream reference.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformCreateReadTransformWithReadStream(_ inputStream: CFReadStream) -> SecTransform
```

## Parameters

- `inputStream`: The stream that is to be opened and read from when the chain executes.

<a id="return-value"></a>

## Return Value

A pointer to a new transform. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.

# SecTransformCreateReadTransformWithReadStream (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 13.0)

Creates a read transform from a read stream reference.

> SecTransform is no longer supported

## Declaration

```objectivec
SecTransformRefSecTransformCreateReadTransformWithReadStream(CFReadStreamRef inputStream);
```

## Parameters

- `inputStream`: The stream that is to be opened and read from when the chain executes.

<a id="return-value"></a>

## Return Value

A pointer to a new transform. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this object’s memory when you are done with it.
