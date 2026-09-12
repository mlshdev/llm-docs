> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvdisplaylinkstop(_:)](https://developer.apple.com/documentation/corevideo/cvdisplaylinkstop(_:))

# CVDisplayLinkStop(\_:) (Swift)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Stops a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```swift
func CVDisplayLinkStop(_ displayLink: CVDisplayLink) -> CVReturn
```

## Parameters

- `displayLink`: The display link to be stopped.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

If the specified display link is already stopped, `CVDisplayLinkStop` returns an error.

In macOS 10.4 and later, the display link thread is automatically stopped if the user employs Fast User Switching. The display link is restarted when switching back to the original user.

## See Also

### Managing Display Links

- [CVDisplayLinkStart(\_:)](cvdisplaylinkstart%28__%29.md): Deprecated. Activates a display link.

# CVDisplayLinkStop (Objective-C)

**Framework:** Core Video  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.4+ (deprecated in 15.0)

Stops a display link.

> use NSView.displayLink(target:selector:), NSWindow.displayLink(target:selector:), or NSScreen.displayLink(target:selector:)

## Declaration

```objectivec
extern CVReturn CVDisplayLinkStop(CVDisplayLinkRef displayLink);
```

## Parameters

- `displayLink`: The display link to be stopped.

<a id="return-value"></a>

## Return Value

A Core Video result code. See [Core Video Constants](core-video-constants.md) for possible values.

<a id="Discussion"></a>

## Discussion

If the specified display link is already stopped, `CVDisplayLinkStop` returns an error.

In macOS 10.4 and later, the display link thread is automatically stopped if the user employs Fast User Switching. The display link is restarted when switching back to the original user.

## See Also

### Managing Display Links

- [CVDisplayLinkStart](cvdisplaylinkstart%28__%29.md): Deprecated. Activates a display link.
