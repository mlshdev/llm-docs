> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/argumentnames](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/argumentnames)

# argumentNames (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the names (or keys) for all arguments of the receiver’s command.

## Declaration

```swift
var argumentNames: [String] { get }
```

<a id="return-value"></a>

## Return Value

The array of argument names. If there are no arguments for the command, returns an empty array.

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgument(withName:)](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [isOptionalArgument(withName:)](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgument(withName:)](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.

# argumentNames (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the names (or keys) for all arguments of the receiver’s command.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * argumentNames;
```

<a id="return-value"></a>

## Return Value

The array of argument names. If there are no arguments for the command, returns an empty array.

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgumentWithName:](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [isOptionalArgumentWithName:](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgumentWithName:](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.
