> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/searchoptions/anchored](https://developer.apple.com/documentation/foundation/nsdata/searchoptions/anchored)

# anchored (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Search is limited to start (or end, if searching backwards) of the data object.

## Declaration

```swift
static var anchored: NSData.SearchOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option performs searching only on bytes at the beginning of the range (or the end when using [backwards](backwards.md)). No match at the beginning or end means nothing is found, even if a matching sequence of bytes occurs elsewhere in the data object.

## See Also

### Constants

- [backwards](backwards.md): Search from the end of the data object.

# NSDataSearchAnchored (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Search is limited to start (or end, if searching backwards) of the data object.

## Declaration

```objectivec
NSDataSearchAnchored
```

<a id="Discussion"></a>

## Discussion

This option performs searching only on bytes at the beginning of the range (or the end when using [NSDataSearchBackwards](backwards.md)). No match at the beginning or end means nothing is found, even if a matching sequence of bytes occurs elsewhere in the data object.

## See Also

### Constants

- [NSDataSearchBackwards](backwards.md): Search from the end of the data object.
