> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/scripterrorstring](https://developer.apple.com/documentation/foundation/nsscriptcommand/scripterrorstring)

# scriptErrorString (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets a script error string that is associated with execution of the command.

## Declaration

```swift
var scriptErrorString: String? { get set }
```

## Parameters

- `errorString`: A string that describes an error.

<a id="Discussion"></a>

## Discussion

If you override [performDefaultImplementation()](performdefaultimplementation%28%29.md) and an error occurs, you should call this method to supply a string that provides a useful explanation. In fact, any script handler should call this method when an error occurs.

Calling this method alone does not cause an error message to be displayed—you must also call [scriptErrorNumber](scripterrornumber.md) to supply an error number.

## See Also

### Handling script execution errors

- [scriptErrorExpectedTypeDescriptor](scripterrorexpectedtypedescriptor.md): Sets a descriptor for the expected type that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.
- [scriptErrorNumber](scripterrornumber.md): Sets a script error number that is associated with the execution of the command and is returned in the reply Apple event, if a reply was requested by the sender.
- [scriptErrorOffendingObjectDescriptor](scripterroroffendingobjectdescriptor.md): Sets a descriptor for an object that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.

# scriptErrorString (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets a script error string that is associated with execution of the command.

## Declaration

```objectivec
@property (copy, nullable) NSString * scriptErrorString;
```

## Parameters

- `errorString`: A string that describes an error.

<a id="Discussion"></a>

## Discussion

If you override [performDefaultImplementation](performdefaultimplementation%28%29.md) and an error occurs, you should call this method to supply a string that provides a useful explanation. In fact, any script handler should call this method when an error occurs.

Calling this method alone does not cause an error message to be displayed—you must also call [scriptErrorNumber](scripterrornumber.md) to supply an error number.

## See Also

### Handling script execution errors

- [scriptErrorExpectedTypeDescriptor](scripterrorexpectedtypedescriptor.md): Sets a descriptor for the expected type that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.
- [scriptErrorNumber](scripterrornumber.md): Sets a script error number that is associated with the execution of the command and is returned in the reply Apple event, if a reply was requested by the sender.
- [scriptErrorOffendingObjectDescriptor](scripterroroffendingobjectdescriptor.md): Sets a descriptor for an object that will be put in the reply Apple event if the sender requested a reply, execution of the receiver completes, and an error number was set.
