> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/isprocessrestoreenabled

# isProcessRestoreEnabled (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
var isProcessRestoreEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

True if this tap should save tapped processes by bundle ID when they exit, and restore them to the tap when they start up again.

# processRestoreEnabled (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```objectivec
@property (atomic, readwrite, getter=isProcessRestoreEnabled) BOOL processRestoreEnabled;
```

<a id="discussion"></a>

## Discussion

True if this tap should save tapped processes by bundle ID when they exit, and restore them to the tap when they start up again.
