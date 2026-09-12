> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryprovider/beginrequest(with:)](https://developer.apple.com/documentation/callkit/cxcalldirectoryprovider/beginrequest(with:))

# beginRequest(with:) (Swift)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

Tells the extension to prepare for a host app’s request.

## Declaration

```swift
func beginRequest(with context: CXCallDirectoryExtensionContext)
```

## Parameters

- `context`: A `CXCallDirectoryExtensionContext` object that represents the context in which the host app makes the request.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

An extension prepares for a host app’s request by getting the context passed in this method and requesting related data items, if appropriate. This method is received after the extension is initialized, but before the principal object is asked to do anything with the context.

# beginRequestWithExtensionContext: (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Tells the extension to prepare for a host app’s request.

## Declaration

```objectivec
- (void) beginRequestWithExtensionContext:(CXCallDirectoryExtensionContext *) context;
```

## Parameters

- `context`: A `CXCallDirectoryExtensionContext` object that represents the context in which the host app makes the request.

## Mentioned In

- [Identifying and blocking calls](../identifying-and-blocking-calls.md)

<a id="Discussion"></a>

## Discussion

An extension prepares for a host app’s request by getting the context passed in this method and requesting related data items, if appropriate. This method is received after the extension is initialized, but before the principal object is asked to do anything with the context.
