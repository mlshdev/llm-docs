> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcommand/evaluatedarguments](https://developer.apple.com/documentation/foundation/nsscriptcommand/evaluatedarguments)

# evaluatedArguments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.

## Declaration

```swift
var evaluatedArguments: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

Arguments initially can be either a normal object or an object specifier such as `word 5` (represented as an instance of an `NSScriptObjectSpecifier` subclass). If arguments are object specifiers, the receiver evaluates them before using the referenced objects. Returns `nil` if the command is not well formed. Also returns `nil` if an object specifier does not evaluate to an object or if there is no type defined for the argument in the command description.

## See Also

### Related Documentation

- [isWellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.

### Accessing arguments

- [arguments](arguments.md): Sets the arguments of the command to `args`.

# evaluatedArguments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a dictionary containing the arguments of the command, evaluated from object specifiers to objects if necessary. The keys in the dictionary are the argument names.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * evaluatedArguments;
```

<a id="Discussion"></a>

## Discussion

Arguments initially can be either a normal object or an object specifier such as `word 5` (represented as an instance of an `NSScriptObjectSpecifier` subclass). If arguments are object specifiers, the receiver evaluates them before using the referenced objects. Returns `nil` if the command is not well formed. Also returns `nil` if an object specifier does not evaluate to an object or if there is no type defined for the argument in the command description.

## See Also

### Related Documentation

- [wellFormed](iswellformed.md): Returns a Boolean value indicating whether the receiver is well formed according to its command description.

### Accessing arguments

- [arguments](arguments.md): Sets the arguments of the command to `args`.
