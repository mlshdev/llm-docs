> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundelegategettypeid()](https://developer.apple.com/documentation/coretext/ctrundelegategettypeid())

# CTRunDelegateGetTypeID() (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type of CTRunDelegate objects.

## Declaration

```swift
func CTRunDelegateGetTypeID() -> CFTypeID
```

<a id="Discussion"></a>

## Discussion

The return type is a Core Foundation type (CTType).

## See Also

### Getting Information About a Run Delegate

- [CTRunDelegateGetRefCon(\_:)](ctrundelegategetrefcon%28__%29.md): Returns a run delegate’s “refCon” value.

# CTRunDelegateGetTypeID (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type of CTRunDelegate objects.

## Declaration

```objectivec
extern CFTypeID CTRunDelegateGetTypeID();
```

<a id="Discussion"></a>

## Discussion

The return type is a Core Foundation type (CTType).

## See Also

### Getting Information About a Run Delegate

- [CTRunDelegateGetRefCon](ctrundelegategetrefcon%28__%29.md): Returns a run delegate’s “refCon” value.
