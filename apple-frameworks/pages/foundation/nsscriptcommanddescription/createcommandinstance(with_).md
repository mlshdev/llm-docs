> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/createcommandinstance(with:)

# createCommandInstance(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates and returns an instance of the command object described by the receiver in the specified memory zone.

## Declaration

```swift
func createCommandInstance(with zone: NSZone? = nil) -> NSScriptCommand
```

## Parameters

- `zone`: The memory zone from which to allocate the command.

<a id="return-value"></a>

## Return Value

The command object, instantiated from [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Creating Commands

- [createCommandInstance()](createcommandinstance%28%29.md): Creates and returns an instance of the command object described by the receiver.

# createCommandInstanceWithZone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates and returns an instance of the command object described by the receiver in the specified memory zone.

## Declaration

```objectivec
- (NSScriptCommand *) createCommandInstanceWithZone:(NSZone *) zone;
```

## Parameters

- `zone`: The memory zone from which to allocate the command.

<a id="return-value"></a>

## Return Value

The command object, instantiated from [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Creating Commands

- [createCommandInstance](createcommandinstance%28%29.md): Creates and returns an instance of the command object described by the receiver.
