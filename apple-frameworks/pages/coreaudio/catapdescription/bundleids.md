> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/bundleids](https://developer.apple.com/documentation/coreaudio/catapdescription/bundleids)

# bundleIDs (Swift)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
var bundleIDs: [String] { get set }
```

<a id="discussion"></a>

## Discussion

An Array of Strings where each String holds the bundle ID of a process to tap or exclude.

# bundleIDs (Objective-C)

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```objectivec
@property (atomic, copy, readwrite) NSArray<NSString *> * bundleIDs;
```

<a id="discussion"></a>

## Discussion

An Array of Strings where each String holds the bundle ID of a process to tap or exclude.
