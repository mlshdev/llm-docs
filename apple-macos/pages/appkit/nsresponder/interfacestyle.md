> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/interfacestyle](https://developer.apple.com/documentation/appkit/nsresponder/interfacestyle)

# interfaceStyle

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the receiver’s interface style.

## Declaration

```objectivec
- (NSInterfaceStyle) interfaceStyle;
```

<a id="Discussion"></a>

## Discussion

[interfaceStyle](interfacestyle.md) is an abstract method in `NSResponder` and just returns `NSNoInterfaceStyle`. It’s overridden in classes such as [NSWindow](../nswindow.md) and [NSView](../nsview.md) to return the interface style, such as `NSMacintoshInterfaceStyle`. A responder’s style (if other than `NSNoInterfaceStyle`) overrides all other settings, such as those established by the defaults system.

## See Also

### Setting the Interface Style

- [setInterfaceStyle:](setinterfacestyle_.md): Deprecated. Sets the receiver’s style to the style specified by `interfaceStyle`, such as `NSMacintoshInterfaceStyle` or `NSWindows95InterfaceStyle`.
- [NSInterfaceStyleDefault](../nsinterfacestyledefault.md): Deprecated. For more information, see the function [NSInterfaceStyleForKey](../nsinterfacestyleforkey.md).
