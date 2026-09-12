> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/unreachablesubnodenames()](https://developer.apple.com/documentation/opendirectory/odnode/unreachablesubnodenames())

# unreachableSubnodeNames() (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an array of the subnodes of a given node that are currently unreachable.

## Declaration

```swift
func unreachableSubnodeNames() throws -> [Any]
```

<a id="return-value"></a>

## Return Value

An array of unreachable subnodes.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [customCall(\_:send:)](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetails(forKeys:)](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNames()](subnodenames%28%29.md): Returns the names of subnodes for the node.

# unreachableSubnodeNamesAndReturnError: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an array of the subnodes of a given node that are currently unreachable.

## Declaration

```objectivec
- (NSArray *) unreachableSubnodeNamesAndReturnError:(NSError **) outError;
```

## Parameters

- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

An array of unreachable subnodes.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [customCall:sendData:error:](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetailsForKeys:error:](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNamesAndReturnError:](subnodenames%28%29.md): Returns the names of subnodes for the node.
