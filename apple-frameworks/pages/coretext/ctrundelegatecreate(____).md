> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegatecreate(_:_:)](https://developer.apple.com/documentation/coretext/ctrundelegatecreate(_:_:))

# CTRunDelegateCreate(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable instance of a run delegate.

## Declaration

```swift
func CTRunDelegateCreate(_ callbacks: UnsafePointer<CTRunDelegateCallbacks>, _ refCon: UnsafeMutableRawPointer?) -> CTRunDelegate?
```

## Parameters

- `callbacks`: A structure holding pointers to the callbacks for this run delegate.
- `refCon`: A constant value associated with the run delegate to identify it.

<a id="return-value"></a>

## Return Value

If  successful, a reference to an immutable CTRunDelegate object. Otherwise, returns `NULL`.

<a id="Discussion"></a>

## Discussion

The run-delegate object can be used for reserving space in a line or for eliding the glyphs for a range of text altogether.

# CTRunDelegateCreate (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable instance of a run delegate.

## Declaration

```objectivec
extern CTRunDelegateRefCTRunDelegateCreate(const CTRunDelegateCallbacks *callbacks, void *refCon);
```

## Parameters

- `callbacks`: A structure holding pointers to the callbacks for this run delegate.
- `refCon`: A constant value associated with the run delegate to identify it.

<a id="return-value"></a>

## Return Value

If  successful, a reference to an immutable CTRunDelegate object. Otherwise, returns `NULL`.

<a id="Discussion"></a>

## Discussion

The run-delegate object can be used for reserving space in a line or for eliding the glyphs for a range of text altogether.
