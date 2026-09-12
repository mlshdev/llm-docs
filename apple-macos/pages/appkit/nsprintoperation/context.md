> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/context](https://developer.apple.com/documentation/appkit/nsprintoperation/context)

# context (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The graphics context object used for generating output.

## Declaration

```swift
var context: NSGraphicsContext? { get }
```

<a id="return-value"></a>

## Return Value

The graphics context object used for drawing during the operation.

## See Also

### Managing the Drawing Context

- [createContext()](createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.
- [destroyContext()](destroycontext%28%29.md): Destroys the print operation’s graphics context.

# context (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The graphics context object used for generating output.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSGraphicsContext * context;
```

<a id="return-value"></a>

## Return Value

The graphics context object used for drawing during the operation.

## See Also

### Managing the Drawing Context

- [createContext](createcontext%28%29.md): Creates the graphics context object used for drawing during the operation.
- [destroyContext](destroycontext%28%29.md): Destroys the print operation’s graphics context.
