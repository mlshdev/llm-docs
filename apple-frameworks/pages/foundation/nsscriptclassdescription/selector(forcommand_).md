> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/selector(forcommand:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/selector(forcommand:))

# selector(forCommand:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the selector associated with the receiver for the specified command description.

## Declaration

```swift
func selector(forCommand commandDescription: NSScriptCommandDescription) -> Selector?
```

## Parameters

- `commandDescription`: A description for a script command, such as `duplicate`, `make`, or `move`. Encapsulates the scriptability information for that command, such as its Objective-C selector, its argument names and types, and its return type (if any).

<a id="return-value"></a>

## Return Value

The selector from the receiver for the command specified by `commandDescription`. Searches in the receiver first, then in any superclass. Returns `NULL` if no matching selector is found.

## See Also

### Getting command information

- [supportsCommand(\_:)](supportscommand%28__%29.md): Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.

# selectorForCommand: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the selector associated with the receiver for the specified command description.

## Declaration

```objectivec
- (SEL) selectorForCommand:(NSScriptCommandDescription *) commandDescription;
```

## Parameters

- `commandDescription`: A description for a script command, such as `duplicate`, `make`, or `move`. Encapsulates the scriptability information for that command, such as its Objective-C selector, its argument names and types, and its return type (if any).

<a id="return-value"></a>

## Return Value

The selector from the receiver for the command specified by `commandDescription`. Searches in the receiver first, then in any superclass. Returns `NULL` if no matching selector is found.

## See Also

### Getting command information

- [supportsCommand:](supportscommand%28__%29.md): Returns a Boolean value indicating whether the receiver or any superclass supports the specified command.
