> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginstop()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginstop())

# webPlugInStop() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Tells the plug-in to stop normal operation.

## Declaration

```swift
func webPlugInStop()
```

<a id="Discussion"></a>

## Discussion

This method may be called more than once, provided that the application has already called [webPlugInInitialize()](webplugininitialize%28%29.md) and that each call to this method is preceded by a call to [webPlugInStart()](webpluginstart%28%29.md).

## See Also

### Controlling the Plug-in

- [webPlugInDestroy()](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize()](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart()](webpluginstart%28%29.md): Tells the plug-in to start normal operation.

# webPlugInStop (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Tells the plug-in to stop normal operation.

## Declaration

```objectivec
- (void) webPlugInStop;
```

<a id="Discussion"></a>

## Discussion

This method may be called more than once, provided that the application has already called [webPlugInInitialize](webplugininitialize%28%29.md) and that each call to this method is preceded by a call to [webPlugInStart](webpluginstart%28%29.md).

## See Also

### Controlling the Plug-in

- [webPlugInDestroy](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInInitialize](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart](webpluginstart%28%29.md): Tells the plug-in to start normal operation.
