> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurldownload/cancel()](https://developer.apple.com/documentation/foundation/nsurldownload/cancel())

# cancel() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Cancels the receiver’s download and deletes the downloaded file.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

This method deletes the partially downloaded file unless you have previously called [deletesFileUponFailure](deletesfileuponfailure.md), passing [false](https://developer.apple.com/documentation/swift/false).

# cancel (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.2+

Cancels the receiver’s download and deletes the downloaded file.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

This method deletes the partially downloaded file unless you have previously called [deletesFileUponFailure](deletesfileuponfailure.md), passing [false](https://developer.apple.com/documentation/swift/false).
