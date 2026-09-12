> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasset/cancontainfragments](https://developer.apple.com/documentation/avfoundation/avasset/cancontainfragments)

# canContainFragments (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 16.0) · iPadOS 9.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 16.0)

A Boolean value that indicates whether you can extend the asset by fragments.

> Load the value of [canContainFragments](../avpartialasyncproperty/cancontainfragments.md) asynchronously instead.

## Declaration

```swift
var canContainFragments: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if an `mvex` box is present in the `moov` box. For those types, the `mvex` box signals the possible presence of later `moof` boxes.

# canContainFragments (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether you can extend the asset by fragments.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canContainFragments;
```

<a id="Discussion"></a>

## Discussion

For QuickTime movie files and MPEG-4 files, the value is [true](https://developer.apple.com/documentation/swift/true) if an `mvex` box is present in the `moov` box. For those types, the `mvex` box signals the possible presence of later `moof` boxes.

## See Also

### Accessing fragment support

- [containsFragments](containsfragments.md): Deprecated. A Boolean value that indicates whether at least one movie fragment extends the asset.
- [overallDurationHint](overalldurationhint.md): Deprecated. The total duration of fragments that currently exist, or may exist in the future.
