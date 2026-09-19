> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommand/scripterroroffendingobjectdescriptor

# scriptErrorOffendingObjectDescriptor (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets a descriptor for an object that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.

## Declaration

```swift
var scriptErrorOffendingObjectDescriptor: NSAppleEventDescriptor? { get set }
```

## Parameters

- `errorOffendingObjectDescriptor`: A descriptor that specifies an object that was responsible for an error.

## See Also

### Handling script execution errors

- [scriptErrorExpectedTypeDescriptor](scripterrorexpectedtypedescriptor.md): Sets a descriptor for the expected type that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.
- [scriptErrorNumber](scripterrornumber.md): Sets a script error number that is associated with the execution of the command and is returned in the reply Apple event, if a reply was requested by the sender.
- [scriptErrorString](scripterrorstring.md): Sets a script error string that is associated with execution of the command.

# scriptErrorOffendingObjectDescriptor (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

Sets a descriptor for an object that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.

## Declaration

```objectivec
@property (retain, nullable) NSAppleEventDescriptor * scriptErrorOffendingObjectDescriptor;
```

## Parameters

- `errorOffendingObjectDescriptor`: A descriptor that specifies an object that was responsible for an error.

## See Also

### Handling script execution errors

- [scriptErrorExpectedTypeDescriptor](scripterrorexpectedtypedescriptor.md): Sets a descriptor for the expected type that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.
- [scriptErrorNumber](scripterrornumber.md): Sets a script error number that is associated with the execution of the command and is returned in the reply Apple event, if a reply was requested by the sender.
- [scriptErrorString](scripterrorstring.md): Sets a script error string that is associated with execution of the command.
