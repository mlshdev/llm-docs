> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/usesprovideostorage

# usesProVideoStorage (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether this movie file output is configured to write to Pro Video Storage.

## Declaration

```swift
var usesProVideoStorage: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Default is `NO`. Raises an exception if set to `YES` while proVideoStorageSupported is `NO`.

# usesProVideoStorage (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Whether this movie file output is configured to write to Pro Video Storage.

## Declaration

```objectivec
@property (nonatomic) BOOL usesProVideoStorage;
```

<a id="discussion"></a>

## Discussion

Default is `NO`. Raises an exception if set to `YES` while proVideoStorageSupported is `NO`.
