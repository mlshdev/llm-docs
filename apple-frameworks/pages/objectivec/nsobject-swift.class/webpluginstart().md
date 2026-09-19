> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginstart()

# webPlugInStart() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Tells the plug-in to start normal operation.

## Declaration

```swift
func webPlugInStart()
```

<a id="Discussion"></a>

## Discussion

The plug-in usually begins its primary task (such as drawing, playing sounds, or animating) in this method. This method may be called more than once, provided that the application has already called [webPlugInInitialize()](webplugininitialize%28%29.md) and that each call to this method is followed later by a call to [webPlugInStop()](webpluginstop%28%29.md).

## See Also

### Controlling the Plug-in

- [webPlugInDestroy()](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize()](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStop()](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.

# webPlugInStart (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Tells the plug-in to start normal operation.

## Declaration

```objectivec
- (void) webPlugInStart;
```

<a id="Discussion"></a>

## Discussion

The plug-in usually begins its primary task (such as drawing, playing sounds, or animating) in this method. This method may be called more than once, provided that the application has already called [webPlugInInitialize](webplugininitialize%28%29.md) and that each call to this method is followed later by a call to [webPlugInStop](webpluginstop%28%29.md).

## See Also

### Controlling the Plug-in

- [webPlugInDestroy](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStop](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.
