> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidreceive(_:)-5b6f6](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidreceive(_:)-5b6f6)

# webPlugInMainResourceDidReceive(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection loads data incrementally.

## Declaration

```swift
func webPlugInMainResourceDidReceive(_ data: Data!)
```

## Parameters

- `data`: The newly available data.

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connection:didReceiveData: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError(\_:)](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading()](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.

# webPlugInMainResourceDidReceiveData: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection loads data incrementally.

## Declaration

```objectivec
- (void) webPlugInMainResourceDidReceiveData:(NSData *) data;
```

## Parameters

- `data`: The newly available data.

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connection:didReceiveData: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError:](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceiveResponse:](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.
