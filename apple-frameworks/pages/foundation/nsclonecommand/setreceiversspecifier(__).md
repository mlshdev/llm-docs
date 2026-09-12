> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclonecommand/setreceiversspecifier(_:)](https://developer.apple.com/documentation/foundation/nsclonecommand/setreceiversspecifier(_:))

# setReceiversSpecifier(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s object specifier;.

## Declaration

```swift
func setReceiversSpecifier(_ receiversRef: NSScriptObjectSpecifier?)
```

## Parameters

- `receiversRef`: The object specifier for the receiver.

<a id="Discussion"></a>

## Discussion

When evaluated, the specifier indicates the receiver or receivers of the `clone` command.

This method overrides [receiversSpecifier](../nsscriptcommand/receiversspecifier.md) in [NSScriptCommand](../nsscriptcommand.md). It performs the same function as the overridden method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. If, for example, `receiversRef` is a specifier for `the third rectangle of the first document`, the receiver specifier is `the first document` while the key specifier is `the third rectangle`.

## See Also

### Working with specifiers

- [keySpecifier](keyspecifier.md): Returns a specifier for the object or objects to be cloned.

# setReceiversSpecifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the receiver’s object specifier;.

## Declaration

```objectivec
- (void) setReceiversSpecifier:(NSScriptObjectSpecifier *) receiversRef;
```

## Parameters

- `receiversRef`: The object specifier for the receiver.

<a id="Discussion"></a>

## Discussion

When evaluated, the specifier indicates the receiver or receivers of the `clone` command.

This method overrides [receiversSpecifier](../nsscriptcommand/receiversspecifier.md) in [NSScriptCommand](../nsscriptcommand.md). It performs the same function as the overridden method, with a critical difference: it causes the container specifier part of the passed-in object specifier to become the receiver specifier of the command, and the key part of the passed-in object specifier to become the key specifier. If, for example, `receiversRef` is a specifier for `the third rectangle of the first document`, the receiver specifier is `the first document` while the key specifier is `the third rectangle`.

## See Also

### Working with specifiers

- [keySpecifier](keyspecifier.md): Returns a specifier for the object or objects to be cloned.
