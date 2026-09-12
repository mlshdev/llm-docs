> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/maketouchbar()](https://developer.apple.com/documentation/appkit/nsresponder/maketouchbar())

# makeTouchBar() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](../nstouchbar.md) object.

## Declaration

```swift
func makeTouchBar() -> NSTouchBar?
```

## See Also

### Supporting the Touch Bar

- [touchBar](touchbar.md): The [NSTouchBar](../nstouchbar.md) object associated with the responder.

# makeTouchBar (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Your custom subclass of the `NSResponder` class should override this method to create and configure your subclass’s default [NSTouchBar](../nstouchbar.md) object.

## Declaration

```objectivec
- (NSTouchBar *) makeTouchBar;
```

## See Also

### Supporting the Touch Bar

- [touchBar](touchbar.md): The [NSTouchBar](../nstouchbar.md) object associated with the responder.
