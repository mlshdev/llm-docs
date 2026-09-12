> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/setfocusstack:](https://developer.apple.com/documentation/appkit/nsgraphicscontext/setfocusstack:)

# setFocusStack:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sets the object used by the receiver to track the hierarchy of views with locked focus.

## Declaration

```objectivec
- (void) setFocusStack:(id) stack;
```

## Parameters

- `stack`: The object used by the graphics context for view-hierarchy tracking.

<a id="Discussion"></a>

## Discussion

You should never need to get or modify the focus stack information. The use of focus stacks may be deprecated in a future release.

## See Also

### Managing the Focus Stack

- [focusStack](focusstack.md): Deprecated. Returns the object used by the context to track the hierarchy of views with locked focus.
