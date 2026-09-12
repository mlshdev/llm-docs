> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/arguments](https://developer.apple.com/documentation/foundation/nsscriptcommand/arguments)

# arguments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the arguments of the command to `args`.

## Declaration

```swift
var arguments: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

Each argument in the dictionary is identified by the same name key used for the argument in the command’s class declaration in the script suite file.

## See Also

### Accessing arguments

- [evaluatedArguments](evaluatedarguments.md): Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.

# arguments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Sets the arguments of the command to `args`.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * arguments;
```

<a id="Discussion"></a>

## Discussion

Each argument in the dictionary is identified by the same name key used for the argument in the command’s class declaration in the script suite file.

## See Also

### Accessing arguments

- [evaluatedArguments](evaluatedarguments.md): Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.
