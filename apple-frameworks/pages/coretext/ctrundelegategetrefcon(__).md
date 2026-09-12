> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegategetrefcon(_:)](https://developer.apple.com/documentation/coretext/ctrundelegategetrefcon(_:))

# CTRunDelegateGetRefCon(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a run delegate’s “refCon” value.

## Declaration

```swift
func CTRunDelegateGetRefCon(_ runDelegate: CTRunDelegate) -> UnsafeMutableRawPointer
```

## Parameters

- `runDelegate`: The run delegate object being queried.

<a id="return-value"></a>

## Return Value

A constant value associated with the run delegate as an identifier.

<a id="Discussion"></a>

## Discussion

The run delegate object was created with the returned “refCon” value.

## See Also

### Getting Information About a Run Delegate

- [CTRunDelegateGetTypeID()](ctrundelegategettypeid%28%29.md): Returns the type of CTRunDelegate objects.

# CTRunDelegateGetRefCon (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a run delegate’s “refCon” value.

## Declaration

```objectivec
extern void *CTRunDelegateGetRefCon(CTRunDelegateRef runDelegate);
```

## Parameters

- `runDelegate`: The run delegate object being queried.

<a id="return-value"></a>

## Return Value

A constant value associated with the run delegate as an identifier.

<a id="Discussion"></a>

## Discussion

The run delegate object was created with the returned “refCon” value.

## See Also

### Getting Information About a Run Delegate

- [CTRunDelegateGetTypeID](ctrundelegategettypeid%28%29.md): Returns the type of CTRunDelegate objects.
