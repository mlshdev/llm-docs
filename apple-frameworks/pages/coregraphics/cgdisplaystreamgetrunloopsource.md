> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgdisplaystreamgetrunloopsource

# CGDisplayStreamGetRunLoopSource

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern CFRunLoopSourceRefCGDisplayStreamGetRunLoopSource(CGDisplayStreamRef displayStream);
```

## Parameters

- `displayStream`: The CGDisplayStream object

<a id="return-value"></a>

## Return Value

The CFRunLoopSource for this displayStream.  Note: This function will return NULL if the display stream was created via  CGDisplayStreamCreateWithDispatchQueue().

<a id="discussion"></a>

## Discussion

Return the singleton CFRunLoopSourceRef for a CGDisplayStream.
