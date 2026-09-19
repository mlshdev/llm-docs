> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgdisplaystreamstart

# CGDisplayStreamStart

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern CGError CGDisplayStreamStart(CGDisplayStreamRef displayStream);
```

## Parameters

- `displayStream`: To be started

<a id="return-value"></a>

## Return Value

kCGErrorSuccess If the display stream was started, otherwise an error.

<a id="discussion"></a>

## Discussion

Begin delivering frame updates to the handler block.
