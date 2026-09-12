> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmovecommand/setreceiversspecifier(_:)](https://developer.apple.com/documentation/foundation/nsmovecommand/setreceiversspecifier(_:))

# setReceiversSpecifier(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s object specifier.

## Declaration

```swift
func setReceiversSpecifier(_ receiversRef: NSScriptObjectSpecifier?)
```

## Parameters

- `receiversRef`: The receiver’s object specifier.

<a id="Discussion"></a>

## Discussion

When evaluated, `receiversRef` indicates the receiver or receivers of the `move` AppleScript command.

This method overrides [receiversSpecifier](../nsscriptcommand/receiversspecifier.md) in [NSScriptCommand](../nsscriptcommand.md). It performs the same function as the overridden method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. If, for example, `receiversRef` is a specifier for `the third paragraph of the first document`, the receiver specifier is `the first document` while the key specifier is `the third paragraph`.

## See Also

### Working with specifiers

- [keySpecifier](keyspecifier.md): Returns a specifier for the object or objects to be moved.

# setReceiversSpecifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s object specifier.

## Declaration

```objectivec
- (void) setReceiversSpecifier:(NSScriptObjectSpecifier *) receiversRef;
```

## Parameters

- `receiversRef`: The receiver’s object specifier.

<a id="Discussion"></a>

## Discussion

When evaluated, `receiversRef` indicates the receiver or receivers of the `move` AppleScript command.

This method overrides [receiversSpecifier](../nsscriptcommand/receiversspecifier.md) in [NSScriptCommand](../nsscriptcommand.md). It performs the same function as the overridden method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. If, for example, `receiversRef` is a specifier for `the third paragraph of the first document`, the receiver specifier is `the first document` while the key specifier is `the third paragraph`.

## See Also

### Working with specifiers

- [keySpecifier](keyspecifier.md): Returns a specifier for the object or objects to be moved.
