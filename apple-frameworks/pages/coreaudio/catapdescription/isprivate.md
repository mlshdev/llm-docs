> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/isprivate

# isPrivate (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```swift
var isPrivate: Bool { get set }
```

<a id="discussion"></a>

## Discussion

True if this tap is only visible to the client process that created the tap.

# privateTap (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, readwrite, getter=isPrivate, setter=setPrivate:) BOOL privateTap;
```

<a id="discussion"></a>

## Discussion

True if this tap is only visible to the client process that created the tap.
