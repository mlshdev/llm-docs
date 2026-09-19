> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/isprovideostoragesupported

# isProVideoStorageSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether this movie file output supports writing to Pro Video Storage in its current configuration.

## Declaration

```swift
var isProVideoStorageSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

A value of `YES` indicates that Pro Video Storage support is enabled for this output while `NO` indicates it is not. Check this value prior to setting property usesProVideoStorage to avoid exceptions when Pro Video Storage support is not enabled.

# proVideoStorageSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether this movie file output supports writing to Pro Video Storage in its current configuration.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isProVideoStorageSupported) BOOL proVideoStorageSupported;
```

<a id="discussion"></a>

## Discussion

A value of `YES` indicates that Pro Video Storage support is enabled for this output while `NO` indicates it is not. Check this value prior to setting property usesProVideoStorage to avoid exceptions when Pro Video Storage support is not enabled.
