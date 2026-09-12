> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/createcontext()](https://developer.apple.com/documentation/appkit/nsprintoperation/createcontext())

# createContext() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates the graphics context object used for drawing during the operation.

## Declaration

```swift
func createContext() -> NSGraphicsContext?
```

<a id="return-value"></a>

## Return Value

The graphics context object used for drawing. This object is created using the settings from the receiver’s `NSPrintInfo` object.

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly—it is invoked before any output is generated.

## See Also

### Managing the Drawing Context

- [context](context.md): The graphics context object used for generating output.
- [destroyContext()](destroycontext%28%29.md): Destroys the print operation’s graphics context.

# createContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates the graphics context object used for drawing during the operation.

## Declaration

```objectivec
- (NSGraphicsContext *) createContext;
```

<a id="return-value"></a>

## Return Value

The graphics context object used for drawing. This object is created using the settings from the receiver’s `NSPrintInfo` object.

<a id="Discussion"></a>

## Discussion

Do not invoke this method directly—it is invoked before any output is generated.

## See Also

### Managing the Drawing Context

- [context](context.md): The graphics context object used for generating output.
- [destroyContext](destroycontext%28%29.md): Destroys the print operation’s graphics context.
