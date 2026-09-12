> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/setinterfacestyle:](https://developer.apple.com/documentation/appkit/nsresponder/setinterfacestyle:)

# setInterfaceStyle:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the receiver’s style to the style specified by `interfaceStyle`, such as `NSMacintoshInterfaceStyle` or `NSWindows95InterfaceStyle`.

## Declaration

```objectivec
- (void) setInterfaceStyle:(NSInterfaceStyle) interfaceStyle;
```

## Parameters

- `interfaceStyle`: An `enum` constant identifying an interface style.

<a id="Discussion"></a>

## Discussion

[setInterfaceStyle:](setinterfacestyle_.md) is an abstract method in `NSResponder`, but is overridden in classes such as [NSWindow](../nswindow.md) and [NSView](../nsview.md) to actually set the interface style. You should almost never need to invoke or override this method, but if you do override it, your version should always invoke the implementation in `super`.

## See Also

### Setting the Interface Style

- [interfaceStyle](interfacestyle.md): Deprecated. Returns the receiver’s interface style.
- [NSInterfaceStyleDefault](../nsinterfacestyledefault.md): Deprecated. For more information, see the function [NSInterfaceStyleForKey](../nsinterfacestyleforkey.md).
