> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webplugincontainerload(_:inframe:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webplugincontainerload(_:inframe:))

# webPlugInContainerLoad(\_:inFrame:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Loads a URL into a web frame.

## Declaration

```swift
func webPlugInContainerLoad(_ request: URLRequest!, inFrame target: String!)
```

## Parameters

- `request`: The request that specifies the URL.
- `target`: The frame into which the URL is loaded.

<a id="Discussion"></a>

## Discussion

If the frame specified by `target` is not found, a new window is opened, loaded with the URL request, and given the specified frame name. If `target` is `nil`, the frame enclosing the plug-in is loaded with the URL request.

## See Also

### Performing actions on the enclosing container

- [webPlugInContainerShowStatus(\_:)](webplugincontainershowstatus%28__%29.md): Tells the container to show a status message.

# webPlugInContainerLoadRequest:inFrame: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Loads a URL into a web frame.

## Declaration

```objectivec
- (void) webPlugInContainerLoadRequest:(NSURLRequest *) request inFrame:(NSString *) target;
```

## Parameters

- `request`: The request that specifies the URL.
- `target`: The frame into which the URL is loaded.

<a id="Discussion"></a>

## Discussion

If the frame specified by `target` is not found, a new window is opened, loaded with the URL request, and given the specified frame name. If `target` is `nil`, the frame enclosing the plug-in is loaded with the URL request.

## See Also

### Performing actions on the enclosing container

- [webPlugInContainerShowStatus:](webplugincontainershowstatus%28__%29.md): Tells the container to show a status message.
