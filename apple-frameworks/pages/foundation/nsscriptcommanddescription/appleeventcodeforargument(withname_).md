> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/appleeventcodeforargument(withname:)](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/appleeventcodeforargument(withname:))

# appleEventCodeForArgument(withName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code for the specified command argument of the receiver.

## Declaration

```swift
func appleEventCodeForArgument(withName argumentName: String) -> FourCharCode
```

## Parameters

- `argumentName`: The argument name (used as a key) for which to obtain the corresponding Apple event code.

<a id="return-value"></a>

## Return Value

The code for the specified argument.

## See Also

### Getting Command Argument Information

- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgument(withName:)](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgument(withName:)](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.

# appleEventCodeForArgumentWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the Apple event code for the specified command argument of the receiver.

## Declaration

```objectivec
- (FourCharCode) appleEventCodeForArgumentWithName:(NSString *) argumentName;
```

## Parameters

- `argumentName`: The argument name (used as a key) for which to obtain the corresponding Apple event code.

<a id="return-value"></a>

## Return Value

The code for the specified argument.

## See Also

### Getting Command Argument Information

- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgumentWithName:](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
- [typeForArgumentWithName:](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.
