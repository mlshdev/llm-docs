> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/iswellformed](https://developer.apple.com/documentation/foundation/nsscriptcommand/iswellformed)

# isWellFormed (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether the receiver is well formed according to its command description.

## Declaration

```swift
var isWellFormed: Bool { get }
```

<a id="discussion"></a>

## Discussion

The method ensures that there is a description of the command and that the number of arguments and the types of non-specifier arguments conform to the command description.

## See Also

### Getting command information

- [commandDescription](commanddescription.md): Returns the command description for the command.

# wellFormed (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether the receiver is well formed according to its command description.

## Declaration

```objectivec
@property (readonly, getter=isWellFormed) BOOL wellFormed;
```

<a id="discussion"></a>

## Discussion

The method ensures that there is a description of the command and that the number of arguments and the types of non-specifier arguments conform to the command description.

## See Also

### Getting command information

- [commandDescription](commanddescription.md): Returns the command description for the command.
