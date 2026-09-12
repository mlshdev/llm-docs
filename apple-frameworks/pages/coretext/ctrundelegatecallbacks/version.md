> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatecallbacks/version](https://developer.apple.com/documentation/coretext/ctrundelegatecallbacks/version)

# version (Swift)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate(\_:\_:)](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).

## Declaration

```swift
var version: CFIndex
```

## See Also

### Instance Properties

- [dealloc](dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getAscent](getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.

# version (Objective-C)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).

## Declaration

```objectivec
CFIndex version;
```

## See Also

### Instance Properties

- [dealloc](dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getAscent](getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
