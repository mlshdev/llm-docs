> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webplugindestroy()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webplugindestroy())

# webPlugInDestroy() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the plug-in for deallocation.

## Declaration

```swift
func webPlugInDestroy()
```

<a id="Discussion"></a>

## Discussion

Typically, this method frees the memory and other resources used by the plug-in. For example, if the plug-in had a copy of a WebPlugInContainer object, this method should relinquish ownership of that object. Do not send any other messages to the plug-in after invoking this method, because calling this method destroys the plug-in. No other methods in this interface may be called after the application has called this method.

## See Also

### Controlling the Plug-in

- [webPlugInInitialize()](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart()](webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop()](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.

# webPlugInDestroy (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the plug-in for deallocation.

## Declaration

```objectivec
- (void) webPlugInDestroy;
```

<a id="Discussion"></a>

## Discussion

Typically, this method frees the memory and other resources used by the plug-in. For example, if the plug-in had a copy of a WebPlugInContainer object, this method should relinquish ownership of that object. Do not send any other messages to the plug-in after invoking this method, because calling this method destroys the plug-in. No other methods in this interface may be called after the application has called this method.

## See Also

### Controlling the Plug-in

- [webPlugInInitialize](webplugininitialize%28%29.md): Initializes the plug-in.
- [webPlugInStart](webpluginstart%28%29.md): Tells the plug-in to start normal operation.
- [webPlugInStop](webpluginstop%28%29.md): Tells the plug-in to stop normal operation.
