> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/stepinpresentationorder(bycount:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/stepinpresentationorder(bycount:))

# stepInPresentationOrder(byCount:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor a given number of samples in presentation order.

## Declaration

```swift
func stepInPresentationOrder(byCount stepCount: Int64) -> Int64
```

## Parameters

- `stepCount`: The number of samples to move across. If positive, step forward this many samples. If negative, step backward this many samples.

<a id="return-value"></a>

## Return Value

The number of samples the cursor traversed. If the cursor reaches the beginning or the end of the sample sequence before the requested number of samples was traversed, the absolute value of the result will be less than the absolute value of the specified step count.

## See Also

### Navigating samples

- [step(byDecodeTime:wasPinned:)](step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [step(byPresentationTime:wasPinned:)](step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrder(byCount:)](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.

# stepInPresentationOrderByCount: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Moves the cursor a given number of samples in presentation order.

## Declaration

```objectivec
- (int64_t) stepInPresentationOrderByCount:(int64_t) stepCount;
```

## Parameters

- `stepCount`: The number of samples to move across. If positive, step forward this many samples. If negative, step backward this many samples.

<a id="return-value"></a>

## Return Value

The number of samples the cursor traversed. If the cursor reaches the beginning or the end of the sample sequence before the requested number of samples was traversed, the absolute value of the result will be less than the absolute value of the specified step count.

## See Also

### Navigating samples

- [stepByDecodeTime:wasPinned:](step%28bydecodetime_waspinned_%29.md): Moves the cursor by a given delta time on the decode timeline.
- [stepByPresentationTime:wasPinned:](step%28bypresentationtime_waspinned_%29.md): Moves the cursor by a given delta time on the presentation timeline.
- [stepInDecodeOrderByCount:](stepindecodeorder%28bycount_%29.md): Moves the cursor a given number of samples in decode order.
