> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturesession/stoprunning()

# stopRunning() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Stops the flow of data through the capture pipeline.

## Declaration

```swift
func stopRunning()
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the flow of data from the inputs to the outputs connected to the capture session. This method is synchronous and blocks until the session stops running completely.

## See Also

### Managing the session life cycle

- [startRunning()](startrunning%28%29.md): Starts the flow of data through the capture pipeline.

# stopRunning (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Stops the flow of data through the capture pipeline.

## Declaration

```objectivec
- (void) stopRunning;
```

<a id="Discussion"></a>

## Discussion

Call this method to stop the flow of data from the inputs to the outputs connected to the capture session. This method is synchronous and blocks until the session stops running completely.

## See Also

### Managing the session life cycle

- [startRunning](startrunning%28%29.md): Starts the flow of data through the capture pipeline.
