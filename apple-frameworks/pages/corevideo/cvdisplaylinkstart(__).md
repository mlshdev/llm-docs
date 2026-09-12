> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkstart(_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkstart(_:))

# CVDisplayLinkStart(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Activates a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkStart(_ displayLink: CVDisplayLink) -> CVReturn
```

## Parameters

- `displayLink`: The display link to be activated.

<a id="return-value"></a>

## Return Value

A Core Video result code. See[Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Calling this function starts the display link thread, which then periodically calls back to your application to request that you display frames. If the specified display link is already running, `CVDisplayLinkStart` returns an error.

## See Also

### Managing Display Links

- [CVDisplayLinkStop(\_:)](cvdisplaylinkstop%28__%29.md): Deprecated. Stops a display link.

# CVDisplayLinkStart (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Activates a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkStart(CVDisplayLinkRef displayLink);
```

## Parameters

- `displayLink`: The display link to be activated.

<a id="return-value"></a>

## Return Value

A Core Video result code. See[Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

Calling this function starts the display link thread, which then periodically calls back to your application to request that you display frames. If the specified display link is already running, `CVDisplayLinkStart` returns an error.

## See Also

### Managing Display Links

- [CVDisplayLinkStop](cvdisplaylinkstop%28__%29.md): Deprecated. Stops a display link.
