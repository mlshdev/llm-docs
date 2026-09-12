> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/obexsession/seteventselector(_:target:refcon:)](https://developer.apple.com/documentation/iobluetooth/obexsession/seteventselector(_:target:refcon:))

# setEventSelector(\_:target:refCon:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allow you to set a selector to be called when events occur on the OBEX session.

## Declaration

```swift
func setEventSelector(_ inEventSelector: Selector!, target inEventSelectorTarget: Any!, refCon inUserRefCon: UnsafeMutableRawPointer!)
```

## Parameters

- `inEventSelector`: Selector to call on the target.
- `inEventSelectorTarget`: Target to be called with the selector.
- `inUserRefCon`: User’s refCon that will get passed when their event callback is invoked.

<a id="Discussion"></a>

## Discussion

Really not needed to be used, since the event selector will get set when an OBEX command is sent out.

# setEventSelector:target:refCon: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allow you to set a selector to be called when events occur on the OBEX session.

## Declaration

```objectivec
- (void) setEventSelector:(SEL) inEventSelector target:(id) inEventSelectorTarget refCon:(void *) inUserRefCon;
```

## Parameters

- `inEventSelector`: Selector to call on the target.
- `inEventSelectorTarget`: Target to be called with the selector.
- `inUserRefCon`: User’s refCon that will get passed when their event callback is invoked.

<a id="Discussion"></a>

## Discussion

Really not needed to be used, since the event selector will get set when an OBEX command is sent out.
