> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/init(suitename:commandname:dictionary:)](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/init(suitename:commandname:dictionary:))

# init(suiteName:commandName:dictionary:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns a newly allocated instance of `NSScriptCommandDescription`.

## Declaration

```swift
init?(suiteName: String, commandName: String, dictionary commandDeclaration: [AnyHashable : Any]?)
```

## Parameters

- `suiteName`: The name of the suite (in the application’s scriptability information) that the command belongs to. For example, `"AppName Suite"`.
- `commandName`: The name of the script command that this instance describes.
- `commandDeclaration`: A command declaration dictionary of the sort that is valid in script suite property list files. This dictionary provides information about the command such as its argument names and types and return type (if any).

<a id="return-value"></a>

## Return Value

The initialized command description instance. Returns `nil` if the event constant or class name for the command description is missing; also returns `nil` if the return type or argument values are of the wrong type.

<a id="Discussion"></a>

## Discussion

This method registers `self` with the application’s global instance of [NSScriptSuiteRegistry](../nsscriptsuiteregistry.md) and also registers all command arguments with the registry.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithSuiteName:commandName:dictionary: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes and returns a newly allocated instance of `NSScriptCommandDescription`.

## Declaration

```objectivec
- (instancetype) initWithSuiteName:(NSString *) suiteName commandName:(NSString *) commandName dictionary:(NSDictionary *) commandDeclaration;
```

## Parameters

- `suiteName`: The name of the suite (in the application’s scriptability information) that the command belongs to. For example, `"AppName Suite"`.
- `commandName`: The name of the script command that this instance describes.
- `commandDeclaration`: A command declaration dictionary of the sort that is valid in script suite property list files. This dictionary provides information about the command such as its argument names and types and return type (if any).

<a id="return-value"></a>

## Return Value

The initialized command description instance. Returns `nil` if the event constant or class name for the command description is missing; also returns `nil` if the return type or argument values are of the wrong type.

<a id="Discussion"></a>

## Discussion

This method registers `self` with the application’s global instance of [NSScriptSuiteRegistry](../nsscriptsuiteregistry.md) and also registers all command arguments with the registry.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
