> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/supportscommand(_:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/supportscommand(_:))

# supportsCommand(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.

## Declaration

```swift
func supportsCommand(_ commandDescription: NSScriptCommandDescription) -> Bool
```

## Parameters

- `commandDescription`: A description for a script command, such as `duplicate`, `make`, or `move`. Encapsulates the scriptability information for that command, such as its Objective-C selector, its argument names and types, and its return type (if any).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an the receiver or the instance of `NSScriptClassDescription` of any superclass of the receiver’s class lists the command described by `commandDesc` among its supported commands; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting command information

- [selector(forCommand:)](selector%28forcommand_%29.md): Returns the selector associated with the receiver for the specified command description.

# supportsCommand: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.

## Declaration

```objectivec
- (BOOL) supportsCommand:(NSScriptCommandDescription *) commandDescription;
```

## Parameters

- `commandDescription`: A description for a script command, such as `duplicate`, `make`, or `move`. Encapsulates the scriptability information for that command, such as its Objective-C selector, its argument names and types, and its return type (if any).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an the receiver or the instance of `NSScriptClassDescription` of any superclass of the receiver’s class lists the command described by `commandDesc` among its supported commands; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting command information

- [selectorForCommand:](selector%28forcommand_%29.md): Returns the selector associated with the receiver for the specified command description.
