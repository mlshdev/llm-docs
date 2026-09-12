> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidfailwitherror(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webpluginmainresourcedidfailwitherror(_:))

# webPlugInMainResourceDidFailWithError(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when an error occurs loading the main resource.

## Declaration

```swift
func webPlugInMainResourceDidFailWithError(_ error: (any Error)!)
```

## Parameters

- `error`: An error object containing details of why the connection failed to load the request successfully.

<a id="Discussion"></a>

## Discussion

This message is invoked when the underlying `NSURLConnection` object for the main resource sends the connection:didFailWithError: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFinishLoading()](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceive(\_:)](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.

# webPlugInMainResourceDidFailWithError: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked when an error occurs loading the main resource.

## Declaration

```objectivec
- (void) webPlugInMainResourceDidFailWithError:(NSError *) error;
```

## Parameters

- `error`: An error object containing details of why the connection failed to load the request successfully.

<a id="Discussion"></a>

## Discussion

This message is invoked when the underlying `NSURLConnection` object for the main resource sends the connection:didFailWithError: message to its delegate.

## See Also

### Main resource messages

- [webPlugInMainResourceDidFinishLoading](webpluginmainresourcedidfinishloading%28%29.md): Invoked when the connection successfully finishes loading data.
- [webPlugInMainResourceDidReceiveData:](webpluginmainresourcedidreceive%28__%29-5b6f6.md): Invoked when the connection loads data incrementally.
- [webPlugInMainResourceDidReceiveResponse:](webpluginmainresourcedidreceive%28__%29-6x7b9.md): Invoked when the connection receives sufficient data to construct the URL response for its request.
