> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/commandname](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/commandname)

# commandName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the command.

## Declaration

```swift
var commandName: String { get }
```

<a id="return-value"></a>

## Return Value

The command name as it appears in the application’s scriptability information; may be different from what is displayed to the scripter.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.

# commandName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the command.

## Declaration

```objectivec
@property (copy, readonly) NSString * commandName;
```

<a id="return-value"></a>

## Return Value

The command name as it appears in the application’s scriptability information; may be different from what is displayed to the scripter.

## See Also

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.
