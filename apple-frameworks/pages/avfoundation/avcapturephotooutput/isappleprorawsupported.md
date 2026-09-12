> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isappleprorawsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isappleprorawsupported)

# isAppleProRAWSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

A Boolean value that indicates whether the current device and configuration supports Apple ProRAW pixel formats.

## Declaration

```swift
var isAppleProRAWSupported: Bool { get }
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring ProRAW support

- [isAppleProRAWEnabled](isappleprorawenabled.md): A Boolean value that indicates whether you’ve configured the photo output to deliver Apple ProRAW formats.

# appleProRAWSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · tvOS 17.0+

A Boolean value that indicates whether the current device and configuration supports Apple ProRAW pixel formats.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAppleProRAWSupported) BOOL appleProRAWSupported;
```

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Configuring ProRAW support

- [appleProRAWEnabled](isappleprorawenabled.md): A Boolean value that indicates whether you’ve configured the photo output to deliver Apple ProRAW formats.
