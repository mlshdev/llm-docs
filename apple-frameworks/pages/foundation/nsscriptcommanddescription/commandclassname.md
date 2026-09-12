> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/commandclassname](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/commandclassname)

# commandClassName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the class that will be instantiated to handle the command.

## Declaration

```swift
var commandClassName: String { get }
```

<a id="return-value"></a>

## Return Value

The Objective-C class name (for example, `"NSGetCommand"`). This is always [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.

# commandClassName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the class that will be instantiated to handle the command.

## Declaration

```objectivec
@property (copy, readonly) NSString * commandClassName;
```

<a id="return-value"></a>

## Return Value

The Objective-C class name (for example, `"NSGetCommand"`). This is always [NSScriptCommand](../nsscriptcommand.md) or a subclass.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.
