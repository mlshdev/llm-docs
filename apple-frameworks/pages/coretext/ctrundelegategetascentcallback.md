> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegategetascentcallback](https://developer.apple.com/documentation/coretext/ctrundelegategetascentcallback)

# CTRunDelegateGetAscentCallback (Swift)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a pointer to a function that determines typographic ascent of glyphs in the run.

## Declaration

```swift
typealias CTRunDelegateGetAscentCallback = (UnsafeMutableRawPointer) -> CGFloat
```

## Parameters

- `refCon`: The reference-constant value supplied to the [CTRunDelegateCreate(\_:\_:)](ctrundelegatecreate%28____%29.md) function when the run delegate was created.

<a id="return-value"></a>

## Return Value

The typographic ascent of glyphs in the run associated with the run delegate.

<a id="Discussion"></a>

## Discussion

You would declare the get-ascent function like this if you were to name it `MyGetAscentCallback`:

## See Also

### Callbacks

- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.
- [CTRunDelegateDeallocateCallback](ctrundelegatedeallocatecallback.md): Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.

# CTRunDelegateGetAscentCallback (Objective-C)

**Framework:** Core Text  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines a pointer to a function that determines typographic ascent of glyphs in the run.

## Declaration

```objectivec
typedef double (*)(void *) CTRunDelegateGetAscentCallback;
```

## Parameters

- `refCon`: The reference-constant value supplied to the [CTRunDelegateCreate](ctrundelegatecreate%28____%29.md) function when the run delegate was created.

<a id="return-value"></a>

## Return Value

The typographic ascent of glyphs in the run associated with the run delegate.

<a id="Discussion"></a>

## Discussion

You would declare the get-ascent function like this if you were to name it `MyGetAscentCallback`:

## See Also

### Callbacks

- [CTRunDelegateGetDescentCallback](ctrundelegategetdescentcallback.md): Defines a pointer to a function that determines typographic descent of glyphs in the run.
- [CTRunDelegateGetWidthCallback](ctrundelegategetwidthcallback.md): Defines a pointer to a function that determines the typographic width of glyphs in the run.
- [CTRunDelegateDeallocateCallback](ctrundelegatedeallocatecallback.md): Defines a pointer to a function that is invoked when a CTRunDelegate object is deallocated.
