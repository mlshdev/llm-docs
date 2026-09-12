> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidfinishloading()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidfinishloading())

# webPlugInMainResourceDidFinishLoading() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection successfully finishes loading data.

## Declaration

```swift
func webPlugInMainResourceDidFinishLoading()
```

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connectionDidFinishLoading: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError(\_:)](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.

# webPlugInMainResourceDidFinishLoading (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection successfully finishes loading data.

## Declaration

```objectivec
- (void) webPlugInMainResourceDidFinishLoading;
```

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connectionDidFinishLoading: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError:](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidReceiveData:](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceiveResponse:](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.
