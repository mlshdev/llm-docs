> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbarprovider/touchbar](https://developer.apple.com/documentation/appkit/nstouchbarprovider/touchbar)

# touchBar (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

The property you implement to provide a Touch Bar object.

## Declaration

```swift
@MainActor var touchBar: NSTouchBar? { get }
```

<a id="Discussion"></a>

## Discussion

This property supports key-value observing, which is used by the system, for example, if you replace a running bar. Many subclasses of [NSResponder](../nsresponder.md) implement this property and conform to the [NSTouchBarProvider](../nstouchbarprovider.md) protocol.

# touchBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

The property you implement to provide a Touch Bar object.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSTouchBar * touchBar;
```

<a id="Discussion"></a>

## Discussion

This property supports key-value observing, which is used by the system, for example, if you replace a running bar. Many subclasses of [NSResponder](../nsresponder.md) implement this property and conform to the [NSTouchBarProvider](../nstouchbarprovider.md) protocol.
