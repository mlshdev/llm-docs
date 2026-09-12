> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatecallbacks](https://developer.apple.com/documentation/coretext/ctrundelegatecallbacks)

# CTRunDelegateCallbacks (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure holding pointers to callbacks implemented by the run delegate.

## Declaration

```swift
struct CTRunDelegateCallbacks
```

<a id="overview"></a>

## Overview

You pass in a pointer to this structure when you create a CTRunDelegate object with the [CTRunDelegateCreate(\_:\_:)](ctrundelegatecreate%28____%29.md) function. The callbacks defined in this structure are provided by the owner of a run delegate and are used to modify glyph metrics during layout. The values returned by the delegate are applied to each glyph in the run or runs corresponding to the attribute containing that delegate.

See [CTRunDelegate](ctrundelegate.md) for a discussion of the function-pointer types associated with these callbacks.

## Topics

### Initializers

- [init(version:dealloc:getAscent:getDescent:getWidth:)](ctrundelegatecallbacks/init%28version_dealloc_getascent_getdescent_getwidth_%29.md)

### Instance Properties

- [dealloc](ctrundelegatecallbacks/dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getAscent](ctrundelegatecallbacks/getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](ctrundelegatecallbacks/getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](ctrundelegatecallbacks/getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](ctrundelegatecallbacks/version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate(\_:\_:)](ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](kctrundelegateversion1.md).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CTRunDelegateCallbacks (Objective-C)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure holding pointers to callbacks implemented by the run delegate.

## Declaration

```objectivec
typedef struct { ... } CTRunDelegateCallbacks;
```

<a id="overview"></a>

## Overview

You pass in a pointer to this structure when you create a CTRunDelegate object with the [CTRunDelegateCreate](ctrundelegatecreate%28____%29.md) function. The callbacks defined in this structure are provided by the owner of a run delegate and are used to modify glyph metrics during layout. The values returned by the delegate are applied to each glyph in the run or runs corresponding to the attribute containing that delegate.

See [CTRunDelegateRef](ctrundelegate.md) for a discussion of the function-pointer types associated with these callbacks.

## Topics

### Instance Properties

- [dealloc](ctrundelegatecallbacks/dealloc.md): The callback invoked when the retain count of a CTRunDelegate reaches 0 and the CTRunDelegate is deallocated. This callback may be `NULL`.
- [getAscent](ctrundelegatecallbacks/getascent.md): The callback invoked to request the run delegate to determine and return the typographic ascent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getAscent` callback that always returns 0.
- [getDescent](ctrundelegatecallbacks/getdescent.md): The callback invoked to request the run delegate to determine and return the typographic descent of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getDescent` callback that always returns 0.
- [getWidth](ctrundelegatecallbacks/getwidth.md): The callback invoked to request the run delegate to determine and return the typographic width of glyphs in the run. This callback may be `NULL`, which is equivalent to a `getWidth` callback that always returns 0.
- [version](ctrundelegatecallbacks/version.md): The version number of the callbacks being passed in as a parameter to [CTRunDelegateCreate](ctrundelegatecreate%28____%29.md). The initial version is [kCTRunDelegateVersion1](kctrundelegateversion1.md).
