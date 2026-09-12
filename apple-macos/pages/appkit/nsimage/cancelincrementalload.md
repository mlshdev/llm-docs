> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/cancelincrementalload](https://developer.apple.com/documentation/appkit/nsimage/cancelincrementalload)

# cancelIncrementalLoad

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.4)

Cancels the current download operation, if any, for an incrementally loaded image.

## Declaration

```objectivec
- (void) cancelIncrementalLoad;
```

<a id="Discussion"></a>

## Discussion

This call has no effect if the image is not loading.
