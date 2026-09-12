> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/startloading()](https://developer.apple.com/documentation/foundation/urlprotocol/startloading())

# startLoading() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts protocol-specific loading of the request.

## Declaration

```swift
func startLoading()
```

<a id="Discussion"></a>

## Discussion

When this method is called, the subclass implementation should start loading the request, providing feedback to the URL loading system via the [URLProtocolClient](../urlprotocolclient.md) protocol.

Subclasses must implement this method.

## See Also

### Starting and stopping downloads

- [stopLoading()](stoploading%28%29.md): Stops protocol-specific loading of the request.

# startLoading (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Starts protocol-specific loading of the request.

## Declaration

```objectivec
- (void) startLoading;
```

<a id="Discussion"></a>

## Discussion

When this method is called, the subclass implementation should start loading the request, providing feedback to the URL loading system via the [NSURLProtocolClient](../urlprotocolclient.md) protocol.

Subclasses must implement this method.

## See Also

### Starting and stopping downloads

- [stopLoading](stoploading%28%29.md): Stops protocol-specific loading of the request.
