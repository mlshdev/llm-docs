> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsurldownload/request

# request (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns the request that initiated the receiver’s download.

## Declaration

```swift
var request: URLRequest { get }
```

<a id="return-value"></a>

## Return Value

The URL request that initiated the receiver’s download.

## See Also

### Getting download properties

- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.

# request (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.2+

Returns the request that initiated the receiver’s download.

## Declaration

```objectivec
@property (copy, readonly) NSURLRequest * request;
```

<a id="return-value"></a>

## Return Value

The URL request that initiated the receiver’s download.

## See Also

### Getting download properties

- [deletesFileUponFailure](deletesfileuponfailure.md): Returns whether the receiver deletes partially downloaded files when a download stops prematurely.
