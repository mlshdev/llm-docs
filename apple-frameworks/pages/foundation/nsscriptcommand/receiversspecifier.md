> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/receiversspecifier](https://developer.apple.com/documentation/foundation/nsscriptcommand/receiversspecifier)

# receiversSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.

## Declaration

```swift
var receiversSpecifier: NSScriptObjectSpecifier? { get set }
```

<a id="Discussion"></a>

## Discussion

If you create a subclass of `NSScriptCommand`, you don’t necessarily need to override this method, though some of Cocoa’s subclasses do. An override should perform the same function as the superclass method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. In an override, for example, if `receiversRef` is a specifier for `the third rectangle of the first document`, the receiver specifier is `the first document` while the key specifier is `the third rectangle`.

## See Also

### Accessing receivers

- [evaluatedReceivers](evaluatedreceivers.md): Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).

# receiversSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.

## Declaration

```objectivec
@property (retain, nullable) NSScriptObjectSpecifier * receiversSpecifier;
```

<a id="Discussion"></a>

## Discussion

If you create a subclass of `NSScriptCommand`, you don’t necessarily need to override this method, though some of Cocoa’s subclasses do. An override should perform the same function as the superclass method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. In an override, for example, if `receiversRef` is a specifier for `the third rectangle of the first document`, the receiver specifier is `the first document` while the key specifier is `the third rectangle`.

## See Also

### Accessing receivers

- [evaluatedReceivers](evaluatedreceivers.md): Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).
