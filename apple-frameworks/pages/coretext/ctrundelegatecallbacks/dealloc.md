> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatecallbacks/dealloc](https://developer.apple.com/documentation/coretext/ctrundelegatecallbacks/dealloc)

# dealloc (Swift)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.

## Declaration

```swift
var dealloc: CTRunDelegateDeallocateCallback
```

## See Also

### Instance Properties

- [getAscent](getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate(\_:\_:)](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).

# dealloc (Objective-C)

**Framework:** Core Text  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.

## Declaration

```objectivec
CTRunDelegateDeallocateCallback dealloc;
```

## See Also

### Instance Properties

- [getAscent](getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate](../ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](../kctrundelegateversion1.md).
