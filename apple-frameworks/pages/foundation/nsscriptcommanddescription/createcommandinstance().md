> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/createcommandinstance()

# createCommandInstance() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates and returns an instance of the command object described by the receiver.

## Declaration

```swift
func createCommandInstance() -> NSScriptCommand
```

<a id="return-value"></a>

## Return Value

The command object, instantiated from [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Creating Commands

- [createCommandInstance(with:)](createcommandinstance%28with_%29.md): Creates and returns an instance of the command object described by the receiver in the specified memory zone.

# createCommandInstance (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates and returns an instance of the command object described by the receiver.

## Declaration

```objectivec
- (NSScriptCommand *) createCommandInstance;
```

<a id="return-value"></a>

## Return Value

The command object, instantiated from [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Creating Commands

- [createCommandInstanceWithZone:](createcommandinstance%28with_%29.md): Creates and returns an instance of the command object described by the receiver in the specified memory zone.
