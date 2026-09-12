> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/commanddescription](https://developer.apple.com/documentation/foundation/nsscriptcommand/commanddescription)

# commandDescription (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command description for the command.

## Declaration

```swift
var commandDescription: NSScriptCommandDescription { get }
```

<a id="Discussion"></a>

## Discussion

Once a command is created, its command description is immutable.

## See Also

### Related Documentation

- [isWellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.

### Getting command information

- [isWellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.

# commandDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the command description for the command.

## Declaration

```objectivec
@property (retain, readonly) NSScriptCommandDescription * commandDescription;
```

<a id="Discussion"></a>

## Discussion

Once a command is created, its command description is immutable.

## See Also

### Related Documentation

- [wellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.

### Getting command information

- [wellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.
