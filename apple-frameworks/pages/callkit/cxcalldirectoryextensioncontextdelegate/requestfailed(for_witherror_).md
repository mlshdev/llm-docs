> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontextdelegate/requestfailed(for:witherror:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontextdelegate/requestfailed(for:witherror:))

# requestFailed(for:withError:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Called when a Call Directory app extension request fails.

## Declaration

```swift
func requestFailed(for extensionContext: CXCallDirectoryExtensionContext, withError error: any Error)
```

## Parameters

- `extensionContext`: The extension context associated with the failed request.
- `error`: An error object containing information about the request failure.

# requestFailedForExtensionContext:withError: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Called when a Call Directory app extension request fails.

## Declaration

```objectivec
- (void) requestFailedForExtensionContext:(CXCallDirectoryExtensionContext *) extensionContext withError:(NSError *) error;
```

## Parameters

- `extensionContext`: The extension context associated with the failed request.
- `error`: An error object containing information about the request failure.
