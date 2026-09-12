> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommanddescription/isoptionalargument(withname:)](https://developer.apple.com/documentation/foundation/nsscriptcommanddescription/isoptionalargument(withname:))

# isOptionalArgument(withName:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.

## Declaration

```swift
func isOptionalArgument(withName argumentName: String) -> Bool
```

## Parameters

- `argumentName`: Argument name (used as a key) that identifies the command argument to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified argument exists and is optional; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgument(withName:)](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [typeForArgument(withName:)](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.

# isOptionalArgumentWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value that indicates whether the command argument identified by the specified argument key is an optional argument.

## Declaration

```objectivec
- (BOOL) isOptionalArgumentWithName:(NSString *) argumentName;
```

## Parameters

- `argumentName`: Argument name (used as a key) that identifies the command argument to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the specified argument exists and is optional; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting Command Argument Information

- [appleEventCodeForArgumentWithName:](appleeventcodeforargument%28withname_%29.md): Returns the Apple event code for the specified command argument of the receiver.
- [argumentNames](argumentnames.md): Returns the names (or keys) for all arguments of the receiver’s command.
- [typeForArgumentWithName:](typeforargument%28withname_%29.md): Returns the type of the command argument identified by the specified key.
