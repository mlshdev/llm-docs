> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/appleeventclasscode](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/appleeventclasscode)

# appleEventClassCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the four-character code for the Apple event class of the receiver’s command.

## Declaration

```swift
var appleEventClassCode: FourCharCode { get }
```

<a id="return-value"></a>

## Return Value

The Apple event code associated with the receiver’s command. This is the primary code used to identify the command in Apple events.

<a id="Discussion"></a>

## Discussion

In an Apple event that specifies a script command, two four character codes—the event class and event ID—together identify the command. You use this method to obtain the event class. You use [appleEventCode](appleeventcode.md) to obtain the event ID.

For example, commands in AppleScript’s Core suite, such as `clone`, `count`, and `create`, have an event class code of `'core'`. This code and the event ID code returned by `appleEventCode` together specify the necessary information for identifying and dispatching an Apple event.

## See Also

### Getting Basic Information About the Command

- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.

# appleEventClassCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the four-character code for the Apple event class of the receiver’s command.

## Declaration

```objectivec
@property (readonly) FourCharCode appleEventClassCode;
```

<a id="return-value"></a>

## Return Value

The Apple event code associated with the receiver’s command. This is the primary code used to identify the command in Apple events.

<a id="Discussion"></a>

## Discussion

In an Apple event that specifies a script command, two four character codes—the event class and event ID—together identify the command. You use this method to obtain the event class. You use [appleEventCode](appleeventcode.md) to obtain the event ID.

For example, commands in AppleScript’s Core suite, such as `clone`, `count`, and `create`, have an event class code of `'core'`. This code and the event ID code returned by `appleEventCode` together specify the necessary information for identifying and dispatching an Apple event.

## See Also

### Getting Basic Information About the Command

- [appleEventCode](appleeventcode.md): Returns the four-character code for the Apple event ID of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.
