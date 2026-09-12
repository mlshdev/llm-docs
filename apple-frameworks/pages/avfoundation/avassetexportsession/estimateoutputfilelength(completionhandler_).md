> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/estimateoutputfilelength(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetexportsession/estimateoutputfilelength(completionhandler:))

# estimateOutputFileLength(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts estimating the output file length of the export while considering the asset, preset, and time range configuration of the export session.

## Declaration

```swift
func estimateOutputFileLength(completionHandler handler: @escaping @Sendable (Int64, (any Error)?) -> Void)
```

```swift
var estimatedOutputFileLengthInBytes: Int64 { get async throws }
```

## Parameters

- `handler`: A callback the system invokes when it finishes its estimation. It passes the callback the following parameters:

  - **`estimatedOutputFileLength`**: The system’s estimation of the output file length.
  - **`error`**: An error object if the request fails; otherwise, `nil`.

# estimateOutputFileLengthWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Starts estimating the output file length of the export while considering the asset, preset, and time range configuration of the export session.

## Declaration

```objectivec
- (void) estimateOutputFileLengthWithCompletionHandler:(void (^)(int64_t estimatedOutputFileLength, NSError *error)) handler;
```

## Parameters

- `handler`: A callback the system invokes when it finishes its estimation. It passes the callback the following parameters:

  - **`estimatedOutputFileLength`**: The system’s estimation of the output file length.
  - **`error`**: An error object if the request fails; otherwise, `nil`.
