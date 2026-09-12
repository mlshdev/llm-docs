> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideopreviewlayer/isdeferredstartsupported](https://developer.apple.com/documentation/avfoundation/avcapturevideopreviewlayer/isdeferredstartsupported)

# isDeferredStartSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the preview layer supports deferred start.

## Declaration

```swift
var isDeferredStartSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

You can only set the [isDeferredStartEnabled](isdeferredstartenabled.md) property to `true` if the preview layer supports deferred start.

## See Also

### Configuring deferred start

- [isDeferredStartEnabled](isdeferredstartenabled.md): A `BOOL` value that indicates whether to defer starting this preview layer.

# deferredStartSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the preview layer supports deferred start.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeferredStartSupported) BOOL deferredStartSupported;
```

<a id="discussion"></a>

## Discussion

You can only set the [deferredStartEnabled](isdeferredstartenabled.md) property to `true` if the preview layer supports deferred start.

## See Also

### Configuring deferred start

- [deferredStartEnabled](isdeferredstartenabled.md): A `BOOL` value that indicates whether to defer starting this preview layer.
