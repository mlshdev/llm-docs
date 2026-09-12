> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/customcall(_:send:)](https://developer.apple.com/documentation/opendirectory/odnode/customcall(_:send:))

# customCall(\_:send:) (Swift)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the result of a custom call to the node.

## Declaration

```swift
func customCall(_ inCustomCode: Int, send inSendData: Data!) throws -> Data
```

## Parameters

- `inCustomCode`: The custom code to send to the node.
- `inSendData`: Data required by `inCustomCode`. Can be `nil`.

<a id="return-value"></a>

## Return Value

The result of the custom call.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [nodeDetails(forKeys:)](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNames()](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNames()](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.

# customCall:sendData:error: (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the result of a custom call to the node.

## Declaration

```objectivec
- (NSData *) customCall:(NSInteger) inCustomCode sendData:(NSData *) inSendData error:(NSError **) outError;
```

## Parameters

- `inCustomCode`: The custom code to send to the node.
- `inSendData`: Data required by `inCustomCode`. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The result of the custom call.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Querying a Node

- [nodeDetailsForKeys:error:](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [nodeName](nodename.md): The node’s name.
- [subnodeNamesAndReturnError:](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNamesAndReturnError:](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
