> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatecallbacks/getascent](https://developer.apple.com/documentation/coretext/ctrundelegatecallbacks/getascent)

# getAscent (Swift)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.

## Declaration

```swift
var getAscent: CTRunDelegateGetAscentCallback
```

## See Also

### Instance Properties

- [dealloc](dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate(\_:\_:)](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).

# getAscent (Objective-C)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.

## Declaration

```objectivec
CTRunDelegateGetAscentCallback getAscent;
```

## See Also

### Instance Properties

- [dealloc](dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).
