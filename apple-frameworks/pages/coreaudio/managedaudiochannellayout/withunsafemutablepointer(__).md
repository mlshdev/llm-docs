> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/managedaudiochannellayout/withunsafemutablepointer(_:)](https://developer.apple.com/documentation/coreaudio/managedaudiochannellayout/withunsafemutablepointer(_:))

# withUnsafeMutablePointer(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Calls a closure with a mutable pointer to the backing `AudioChannelLayout`.

## Declaration

```swift
mutating func withUnsafeMutablePointer<Result>(_ body: (UnsafeMutablePointer<AudioChannelLayout>) throws -> Result) rethrows -> Result
```

## Parameters

- `body`: A closure that is called with a mutable pointer to the backing `AudioChannelLayout`.

<a id="discussion"></a>

## Discussion

It is invalid to increase mNumberChannelDescriptions.
