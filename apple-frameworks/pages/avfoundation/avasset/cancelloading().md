> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/cancelloading()](https://developer.apple.com/documentation/avfoundation/avasset/cancelloading())

# cancelLoading() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels all pending requests to asynchronously load property values.

## Declaration

```swift
func cancelLoading()
```

<a id="Discussion"></a>

## Discussion

Calling this method cancels pending requests to load an asset’s property values. Call this method only when you’re done using an asset and you want to cancel any outstanding requests. Deallocating an asset implicitly calls this method if loading requests are still pending.

# cancelLoading (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Cancels all pending requests to asynchronously load property values.

## Declaration

```objectivec
- (void) cancelLoading;
```

<a id="Discussion"></a>

## Discussion

Calling this method cancels pending requests to load an asset’s property values. Call this method only when you’re done using an asset and you want to cancel any outstanding requests. Deallocating an asset implicitly calls this method if loading requests are still pending.
