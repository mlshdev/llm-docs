> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/typeforargument(withname:)](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/typeforargument(withname:))

# typeForArgument(withName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the type of the command argument identified by the specified key.

## Declaration

```swift
func typeForArgument(withName argumentName: String) -> String?
```

## Parameters

- `argumentName`: Argument name (used as a key) that identifies the command argument to examine.

<a id="return-value"></a>

## Return Value

The type of the specified command argument. Returns `nil` if there is no such argument.

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgument(withName:)](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgument(withName:)](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.

# typeForArgumentWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the type of the command argument identified by the specified key.

## Declaration

```objectivec
- (NSString *) typeForArgumentWithName:(NSString *) argumentName;
```

## Parameters

- `argumentName`: Argument name (used as a key) that identifies the command argument to examine.

<a id="return-value"></a>

## Return Value

The type of the specified command argument. Returns `nil` if there is no such argument.

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgumentWithName:](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [isOptionalArgumentWithName:](isoptionalargument%28withname_%29.md): Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.
