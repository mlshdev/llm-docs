> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/nodedetails(forkeys:)](https://developer.apple.com/documentation/opendirectory/odnode/nodedetails(forkeys:))

# nodeDetails(forKeys:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a dictionary containing details about a node.

## Declaration

```swift
func nodeDetails(forKeys inKeys: [Any]!) throws -> [AnyHashable : Any]
```

## Parameters

- `inKeys`: An array of keys corresponding to the values returned in the dictionary.

<a id="return-value"></a>

## Return Value

A dictionary containing details about the node corresponding to keys specified by `inKeys`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [customCall(\_:send:)](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNames()](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNames()](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.

# nodeDetailsForKeys:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns a dictionary containing details about a node.

## Declaration

```objectivec
- (NSDictionary *) nodeDetailsForKeys:(NSArray *) inKeys error:(NSError **) outError;
```

## Parameters

- `inKeys`: An array of keys corresponding to the values returned in the dictionary.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

A dictionary containing details about the node corresponding to keys specified by `inKeys`.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [customCall:sendData:error:](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNamesAndReturnError:](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNamesAndReturnError:](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
