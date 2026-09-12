> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/appleeventcode](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/appleeventcode)

# appleEventCode (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the four-character code for the Apple event ID of the receiver’s command.

## Declaration

```swift
var appleEventCode: FourCharCode { get }
```

<a id="return-value"></a>

## Return Value

The code for the event ID of the receiver’s command.

<a id="Discussion"></a>

## Discussion

This value of the event ID returned by this method, together with the event class code returned by [appleEventClassCode](appleeventclasscode.md), specifies the necessary information for identifying and dispatching an Apple event.

## See Also

### Related Documentation

- [appleEventCodeForReturnType](appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.
- [appleEventCodeForArgument(withName:)](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.

# appleEventCode (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the four-character code for the Apple event ID of the receiver’s command.

## Declaration

```objectivec
@property (readonly) FourCharCode appleEventCode;
```

<a id="return-value"></a>

## Return Value

The code for the event ID of the receiver’s command.

<a id="Discussion"></a>

## Discussion

This value of the event ID returned by this method, together with the event class code returned by [appleEventClassCode](appleeventclasscode.md), specifies the necessary information for identifying and dispatching an Apple event.

## See Also

### Related Documentation

- [appleEventCodeForReturnType](appleeventcodeforreturntype.md): Returns the Apple event code that identifies the command’s return type.
- [appleEventCodeForArgumentWithName:](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.

### Getting Basic Information About the Command

- [appleEventClassCode](appleeventclasscode.md): Returns the four-character code for the Apple event class of the receiver’s command.
- [commandClassName](commandclassname.md): Returns the name of the class that will be instantiated to handle the command.
- [commandName](commandname.md): Returns the name of the command.
- [suiteName](suitename.md): Returns the name of the suite that contains the command described by the receiver.
