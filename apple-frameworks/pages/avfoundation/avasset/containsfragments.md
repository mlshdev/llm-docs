> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/containsfragments](https://developer.apple.com/documentation/avfoundation/avasset/containsfragments)

# containsFragments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 16.0) · iPadOS 9.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether at least one movie fragment extends the asset.

> Load the value of [containsFragments](../avpartialasyncproperty/containsfragments.md) asynchronously instead.

## Declaration

```swift
var containsFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if [canContainFragments](cancontainfragments.md) is [true](https://developer.apple.com/documentation/swift/true) and at least one `moof` box is present after the `moov` box.

# containsFragments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether at least one movie fragment extends the asset.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsFragments;
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if [canContainFragments](cancontainfragments.md) is [true](https://developer.apple.com/documentation/swift/true) and at least one `moof` box is present after the `moov` box.

## See Also

### Accessing fragment support

- [canContainFragments](cancontainfragments.md): Deprecated. A Boolean value that indicates whether you can extend the asset by fragments.
- [overallDurationHint](overalldurationhint.md): Deprecated. The total duration of fragments that currently exist, or may exist in the future.
