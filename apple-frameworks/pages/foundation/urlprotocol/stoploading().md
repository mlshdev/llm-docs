> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/stoploading()](https://developer.apple.com/documentation/foundation/urlprotocol/stoploading())

# stopLoading() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops protocol-specific loading of the request.

## Declaration

```swift
func stopLoading()
```

<a id="Discussion"></a>

## Discussion

When this method is called, the subclass implementation should stop loading a request. This could be in response to a cancel operation, so protocol implementations must be able to handle this call while a load is in progress. When your protocol receives a call to this method, it should also stop sending notifications to the client.

Subclasses must implement this method.

## See Also

### Starting and stopping downloads

- [startLoading()](startloading%28%29.md): Starts protocol-specific loading of the request.

# stopLoading (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops protocol-specific loading of the request.

## Declaration

```objectivec
- (void) stopLoading;
```

<a id="Discussion"></a>

## Discussion

When this method is called, the subclass implementation should stop loading a request. This could be in response to a cancel operation, so protocol implementations must be able to handle this call while a load is in progress. When your protocol receives a call to this method, it should also stop sending notifications to the client.

Subclasses must implement this method.

## See Also

### Starting and stopping downloads

- [startLoading](startloading%28%29.md): Starts protocol-specific loading of the request.
