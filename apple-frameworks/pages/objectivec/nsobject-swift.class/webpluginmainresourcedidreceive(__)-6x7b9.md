> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidreceive(_:)-6x7b9](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidreceive(_:)-6x7b9)

# webPlugInMainResourceDidReceive(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection receives sufficient data to construct the URL response for its request.

## Declaration

```swift
func webPlugInMainResourceDidReceive(_ response: URLResponse!)
```

## Parameters

- `response`: The URL response for the connection’s request.

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connection:didReceiveResponse: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError(\_:)](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading()](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.

# webPlugInMainResourceDidReceiveResponse: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when the connection receives sufficient data to construct the URL response for its request.

## Declaration

```objectivec
- (void) webPlugInMainResourceDidReceiveResponse:(NSURLResponse *) response;
```

## Parameters

- `response`: The URL response for the connection’s request.

<a id="Discussion"></a>

## Discussion

This message is invoked when the `WebPlugInShouldLoadMainResourceKey` plug-in command-line argument is set to [NO](../no.md) and the underlying `NSURLConnection` object for the main resource sends the connection:didReceiveResponse: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFailWithError:](webpluginmainresourcedidfailwitherror%28__%29.md): Invoked when an error occurs loading the main resource.
- [webPlugInMainResourceDidFinishLoading](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceiveData:](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
