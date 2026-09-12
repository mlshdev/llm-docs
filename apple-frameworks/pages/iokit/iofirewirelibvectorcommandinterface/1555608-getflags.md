> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibvectorcommandinterface/1555608-getflags](https://developer.apple.com/documentation/iokit/iofirewirelibvectorcommandinterface/1555608-getflags)

# GetFlags

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Get the flags currently set for this command.

## Declaration

```objectivec
UInt32 (*GetFlags)(IOFireWireLibVectorCommandRef self);
```

## Parameters

- `self`: A reference to the vector command object

<a id="return_value"></a>

## Return Value

The flags set in SetFlags

## See Also

### Miscellaneous

- [AddCommand](1555740-addcommand.md): Adds a command to the vector command.
- [EnsureCapacity](1555615-ensurecapacity.md): Sets the number of commands this vector can hold.
- [GetCommandAtIndex](1556052-getcommandatindex.md): Returns the command at a given index.
- [GetCommandCount](1555752-getcommandcount.md): Returns the number of commands currently in this vector.
- [GetIndexOfCommand](1555861-getindexofcommand.md): Returns the index of the specified command.
- [GetRefCon](1555688-getrefcon.md): Get the reference constant for this command.
- [InsertCommandAtIndex](1556014-insertcommandatindex.md): Inserts a command at a given index. Commands at and after this index will be moved to their next sequential index.
- [IsExecuting](1555674-isexecuting.md): Checks if the vector command is currently executing.
- [RemoveAllCommands](1555889-removeallcommands.md): Removes all commands from the vector.
- [RemoveCommand](1556118-removecommand.md): Removes a command to the vector command.
- [RemoveCommandAtIndex](1556038-removecommandatindex.md): Removes the command at a give index. Commands at and afte this index will be moved to their previous sequential index.
- [SetCallback](1556100-setcallback.md): Set the callback routine for this command.
- [SetFlags](1556107-setflags.md): Set flags governing this command's execution.
- [SetRefCon](1555654-setrefcon.md): Set the reference constant for this command.
- [Submit(IOFireWireLibVectorCommandRef)](submit_iofirewirelibvectorcommandref.md): Submit this command object to FireWire for execution.
- [Submit(IOFireWireLibVectorCommandRef, void \*, IOFireWireLibCommandCallback)](submit_iofirewirelibvectorcommandref_void_iofirewirelibcommandcallback.md): Submit this command object to FireWire for execution.
- [SubmitWithRefconAndCallback](1555731-submitwithrefconandcallback.md): Submit this command object to FireWire for execution.
