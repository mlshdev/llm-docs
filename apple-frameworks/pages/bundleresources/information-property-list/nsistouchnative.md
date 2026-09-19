> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nsistouchnative

# NSIsTouchNative

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 27.0+

A Boolean value that indicates whether your app handles touch input natively, without relying on AppKit’s extra mouse emulation.

## Details

`NSIsTouchNative`

<a id="Discussion"></a>

## Discussion

By default, AppKit injects gesture recognizers to emulate mouse events from touch input for apps that use a third-party UI framework. These emulation gesture recognizers translate raw touches into the mouse events those frameworks expect.

If your app manages touch input directly and doesn’t need this emulation layer, set this key to `YES` so AppKit skips injecting those gesture recognizers, preventing them from interfering with your own touch handling.

Most AppKit apps don’t need this key. It’s primarily intended for apps that embed a non-AppKit rendering or input framework and implement their own touch-handling pipeline.
