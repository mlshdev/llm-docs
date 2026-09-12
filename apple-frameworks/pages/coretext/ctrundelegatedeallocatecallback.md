> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatedeallocatecallback](https://developer.apple.com/documentation/coretext/ctrundelegatedeallocatecallback)

# CTRunDelegateDeallocateCallback (Swift)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.

## Declaration

```swift
typealias CTRunDelegateDeallocateCallback = (UnsafeMutableRawPointer) -> Void
```

## Parameters

- `refCon`: The reference-constant value supplied to the [CTRunDelegateCreate(\_:\_:)](ctrundelegatecreate%28____%29.md) function when the run delegate was created.

<a id="Discussion"></a>

## Discussion

You would declare the deallocation function like this if you were to name it `MyDeallocationCallback`:

## See Also

### Callbacks

- [CTRunDelegateGetAscentCallback](ctrundelegategetascentcallback.md): Defines a pointer to a function that determines typographic ascent of glyphs in the run.
- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.

# CTRunDelegateDeallocateCallback (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.

## Declaration

```objectivec
typedef void (*)(void *) CTRunDelegateDeallocateCallback;
```

## Parameters

- `refCon`: The reference-constant value supplied to the [CTRunDelegateCreate](ctrundelegatecreate%28____%29.md) function when the run delegate was created.

<a id="Discussion"></a>

## Discussion

You would declare the deallocation function like this if you were to name it `MyDeallocationCallback`:

## See Also

### Callbacks

- [CTRunDelegateGetAscentCallback](ctrundelegategetascentcallback.md): Defines a pointer to a function that determines typographic ascent of glyphs in the run.
- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.
