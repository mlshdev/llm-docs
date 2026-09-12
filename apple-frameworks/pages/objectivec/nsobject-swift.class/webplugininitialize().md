> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webplugininitialize()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webplugininitialize())

# webPlugInInitialize() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the plug-in.

## Declaration

```swift
func webPlugInInitialize()
```

<a id="Discussion"></a>

## Discussion

Tells the plug-in to perform one-time initialization. This method must be called only once per instance of the plug-in object, before any other methods in the protocol are called.

## See Also

### Controlling the Plug-in

- [webPlugInDestroy()](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInStart()](webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop()](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.

# webPlugInInitialize (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Initializes the plug-in.

## Declaration

```objectivec
- (void) webPlugInInitialize;
```

<a id="Discussion"></a>

## Discussion

Tells the plug-in to perform one-time initialization. This method must be called only once per instance of the plug-in object, before any other methods in the protocol are called.

## See Also

### Controlling the Plug-in

- [webPlugInDestroy](webplugindestroy%28%29.md): Prepares the plug-in for deallocation.
- [webPlugInStart](webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.
