> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/focusstack](https://developer.apple.com/documentation/appkit/nsgraphicscontext/focusstack)

# focusStack

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the object used by the context to track the hierarchy of views with locked focus.

## Declaration

```objectivec
- (id) focusStack;
```

<a id="return-value"></a>

## Return Value

The object used by the context to track the hierarchy of views with locked focus.

<a id="Discussion"></a>

## Discussion

You should never need to get or modify the focus stack information. The use of focus stacks may be deprecated in a future release.

## See Also

### Managing the Focus Stack

- [setFocusStack:](setfocusstack_.md): Deprecated. Sets the object used by the receiver to track the hierarchy of views with locked focus.
