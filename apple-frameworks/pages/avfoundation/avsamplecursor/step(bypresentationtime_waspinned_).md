> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/step(bypresentationtime:waspinned:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/step(bypresentationtime:waspinned:))

# step(byPresentationTime:wasPinned:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor by a given delta time on the presentation timeline.

## Declaration

```swift
func step(byPresentationTime deltaPresentationTime: CMTime, wasPinned outWasPinned: UnsafeMutablePointer<ObjCBool>?) -> CMTime
```

## Parameters

- `deltaPresentationTime`: The amount of time to move in the presentation timeline.
- `outWasPinned`: The system sets the value of this pointer to [true](https://developer.apple.com/documentation/swift/true) if the cursor reaches the beginning or the end of the sample sequence before it reaches the requested time. You may specify `nil` if you’re not interested in this information.

<a id="return-value"></a>

## Return Value

The amount of time the cursor was moved along the presentation timeline. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the specified time delta even if the cursor was not pinned.

## See Also

### Navigating samples

- [step(byDecodeTime:wasPinned:)](step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [stepInDecodeOrder(byCount:)](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(byCount:)](stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.

# stepByPresentationTime:wasPinned: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor by a given delta time on the presentation timeline.

## Declaration

```objectivec
- (CMTime) stepByPresentationTime:(CMTime) deltaPresentationTime wasPinned:(BOOL *) outWasPinned;
```

## Parameters

- `deltaPresentationTime`: The amount of time to move in the presentation timeline.
- `outWasPinned`: The system sets the value of this pointer to [true](https://developer.apple.com/documentation/swift/true) if the cursor reaches the beginning or the end of the sample sequence before it reaches the requested time. You may specify `nil` if you’re not interested in this information.

<a id="return-value"></a>

## Return Value

The amount of time the cursor was moved along the presentation timeline. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the specified time delta even if the cursor was not pinned.

## See Also

### Navigating samples

- [stepByDecodeTime:wasPinned:](step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [stepInDecodeOrderByCount:](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:](stepinpresentationorder%28bycount_%29.md): Moves the cursor a given number of samples in presentation order.
