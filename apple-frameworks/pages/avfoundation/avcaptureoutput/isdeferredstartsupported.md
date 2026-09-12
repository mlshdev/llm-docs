> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureoutput/isdeferredstartsupported](https://developer.apple.com/documentation/avfoundation/avcaptureoutput/isdeferredstartsupported)

# isDeferredStartSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the output supports deferred start.

## Declaration

```swift
var isDeferredStartSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

You can only set the [isDeferredStartEnabled](isdeferredstartenabled.md) property value to `true` if the output supports deferred start.

## See Also

### Managing deferred start

- [isDeferredStartEnabled](isdeferredstartenabled.md): A Boolean value that indicates whether to defer starting this capture output.

# deferredStartSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A `BOOL` value that indicates whether the output supports deferred start.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeferredStartSupported) BOOL deferredStartSupported;
```

<a id="discussion"></a>

## Discussion

You can only set the [deferredStartEnabled](isdeferredstartenabled.md) property value to `true` if the output supports deferred start.

## See Also

### Managing deferred start

- [deferredStartEnabled](isdeferredstartenabled.md): A Boolean value that indicates whether to defer starting this capture output.
