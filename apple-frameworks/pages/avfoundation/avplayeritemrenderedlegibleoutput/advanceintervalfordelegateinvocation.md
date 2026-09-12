> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemrenderedlegibleoutput/advanceintervalfordelegateinvocation](https://developer.apple.com/documentation/avfoundation/avplayeritemrenderedlegibleoutput/advanceintervalfordelegateinvocation)

# advanceIntervalForDelegateInvocation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Permits advance invocation of the associated delegate, if any.

## Declaration

```swift
var advanceIntervalForDelegateInvocation: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property specify the number of seconds early to invoke the delegate object. When possible, an AVPlayerItemLegibleOutput uses this value to call its delegate earlier than it would otherwise.

## See Also

### Configuring an output

- [videoDisplaySize](videodisplaysize.md): Set the video display size to use for rendering of pixel buffers.

# advanceIntervalForDelegateInvocation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Permits advance invocation of the associated delegate, if any.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSTimeInterval advanceIntervalForDelegateInvocation;
```

<a id="Discussion"></a>

## Discussion

Use this property specify the number of seconds early to invoke the delegate object. When possible, an AVPlayerItemLegibleOutput uses this value to call its delegate earlier than it would otherwise.

## See Also

### Configuring an output

- [videoDisplaySize](videodisplaysize.md): Set the video display size to use for rendering of pixel buffers.
