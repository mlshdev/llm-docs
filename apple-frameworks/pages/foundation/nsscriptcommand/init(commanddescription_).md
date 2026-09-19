> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommand/init(commanddescription:)

# init(commandDescription:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an a script command object initialized from the passed command description.

## Declaration

```swift
init(commandDescription commandDef: NSScriptCommandDescription)
```

## Parameters

- `commandDef`: A command description for the command to be created.

<a id="return-value"></a>

## Return Value

A newly initialized instance of `NSScriptCommand` or a subclass.

<a id="Discussion"></a>

## Discussion

To make this command object usable, you must set its receiving objects and arguments (if any) after invoking this method.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [receiversSpecifier](receiversspecifier.md): Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.
- [arguments](arguments.md): Sets the arguments of the command to `args`.

# initWithCommandDescription: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an a script command object initialized from the passed command description.

## Declaration

```objectivec
- (instancetype) initWithCommandDescription:(NSScriptCommandDescription *) commandDef;
```

## Parameters

- `commandDef`: A command description for the command to be created.

<a id="return-value"></a>

## Return Value

A newly initialized instance of `NSScriptCommand` or a subclass.

<a id="Discussion"></a>

## Discussion

To make this command object usable, you must set its receiving objects and arguments (if any) after invoking this method.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [receiversSpecifier](receiversspecifier.md): Sets the object specifier to `receiversSpec` that, when evaluated, indicates the receiver or receivers of the command.
- [arguments](arguments.md): Sets the arguments of the command to `args`.
