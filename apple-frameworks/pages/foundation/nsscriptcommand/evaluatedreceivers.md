> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/evaluatedreceivers](https://developer.apple.com/documentation/foundation/nsscriptcommand/evaluatedreceivers)

# evaluatedReceivers (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).

## Declaration

```swift
var evaluatedReceivers: Any? { get }
```

<a id="Discussion"></a>

## Discussion

It evaluates receivers, which are always object specifiers, to a proper object. If the command does not specify a receiver, or if the receiver doesn’t accept the command, it returns `nil`.

## See Also

### Accessing receivers

- [receiversSpecifier](receiversspecifier.md): Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.

# evaluatedReceivers (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object or objects to which the command is to be sent (called both the “receivers” or “targets” of script commands).

## Declaration

```objectivec
@property (retain, readonly, nullable) id evaluatedReceivers;
```

<a id="Discussion"></a>

## Discussion

It evaluates receivers, which are always object specifiers, to a proper object. If the command does not specify a receiver, or if the receiver doesn’t accept the command, it returns `nil`.

## See Also

### Accessing receivers

- [receiversSpecifier](receiversspecifier.md): Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.
