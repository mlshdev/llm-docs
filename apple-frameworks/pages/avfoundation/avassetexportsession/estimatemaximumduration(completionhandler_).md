> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/estimatemaximumduration(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/estimatemaximumduration(completionhandler:))

# estimateMaximumDuration(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts estimating the maximum duration of the export while considering the asset, preset, and time range configuration of the export session.

## Declaration

```swift
func estimateMaximumDuration(completionHandler handler: @escaping @Sendable (CMTime, (any Error)?) -> Void)
```

```swift
var estimatedMaximumDuration: CMTime { get async throws }
```

## Parameters

- `handler`: A callback the system invokes when it finishes its estimation. It passes the callback the following parameters:

  - **`estimatedMaximumDuration`**: The system’s estimation of the maximum duration.
  - **`error`**: An optional error object that indicates if an error occurred during processing.

# estimateMaximumDurationWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts estimating the maximum duration of the export while considering the asset, preset, and time range configuration of the export session.

## Declaration

```objectivec
- (void) estimateMaximumDurationWithCompletionHandler:(void (^)(CMTime estimatedMaximumDuration, NSError *error)) handler;
```

## Parameters

- `handler`: A callback the system invokes when it finishes its estimation. It passes the callback the following parameters:

  - **`estimatedMaximumDuration`**: The system’s estimation of the maximum duration.
  - **`error`**: An optional error object that indicates if an error occurred during processing.
