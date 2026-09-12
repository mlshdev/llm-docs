> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/step(bydecodetime:waspinned:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/step(bydecodetime:waspinned:))

# step(byDecodeTime:wasPinned:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor by a given delta time on the decode timeline.

## Declaration

```swift
func step(byDecodeTime deltaDecodeTime: CMTime, wasPinned outWasPinned: UnsafeMutablePointer<ObjCBool>?) -> CMTime
```

## Parameters

- `deltaDecodeTime`: The amount of time to move in the decode timeline.
- `outWasPinned`: The system sets the value of this pointer to [true](https://developer.apple.com/documentation/swift/true) if the cursor reaches the beginning or the end of the sample sequence before it reaches the requested time. You may specify `nil` if you’re not interested in this information.

<a id="return-value"></a>

## Return Value

The amount of time the cursor was moved along the decode timeline. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the specified time delta even if the cursor wasn’t pinned.

## See Also

### Navigating samples

- [step(byPresentationTime:wasPinned:)](step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrder(byCount:)](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(byCount:)](stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.

# stepByDecodeTime:wasPinned: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor by a given delta time on the decode timeline.

## Declaration

```objectivec
- (CMTime) stepByDecodeTime:(CMTime) deltaDecodeTime wasPinned:(BOOL *) outWasPinned;
```

## Parameters

- `deltaDecodeTime`: The amount of time to move in the decode timeline.
- `outWasPinned`: The system sets the value of this pointer to [true](https://developer.apple.com/documentation/swift/true) if the cursor reaches the beginning or the end of the sample sequence before it reaches the requested time. You may specify `nil` if you’re not interested in this information.

<a id="return-value"></a>

## Return Value

The amount of time the cursor was moved along the decode timeline. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the specified time delta even if the cursor wasn’t pinned.

## See Also

### Navigating samples

- [stepByPresentationTime:wasPinned:](step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrderByCount:](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:](stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.
