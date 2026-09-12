> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/destroycontext()](https://developer.apple.com/documentation/appkit/nsprintoperation/destroycontext())

# destroyContext() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Destroys the print operation’s graphics context.

## Declaration

```swift
func destroyContext()
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly—it is invoked at the end of a print operation.

## See Also

### Managing the Drawing Context

- [context](context.md): The graphics context object used for generating output.
- [createContext()](createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.

# destroyContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Destroys the print operation’s graphics context.

## Declaration

```objectivec
- (void) destroyContext;
```

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly—it is invoked at the end of a print operation.

## See Also

### Managing the Drawing Context

- [context](context.md): The graphics context object used for generating output.
- [createContext](createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.
