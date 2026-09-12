> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odnode/nodename](https://developer.apple.com/documentation/opendirectory/odnode/nodename)

# nodeName (Swift)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The node’s name.

## Declaration

```swift
var nodeName: String! { get }
```

## See Also

### Querying a Node

- [customCall(\_:send:)](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetails(forKeys:)](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [subnodeNames()](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNames()](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.

# nodeName (Objective-C)

**Framework:** Open Directory  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 10.6+

The node’s name.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * nodeName;
```

## See Also

### Querying a Node

- [customCall:sendData:error:](customcall%28__send_%29.md): Returns the result of a custom call to the node.
- [nodeDetailsForKeys:error:](nodedetails%28forkeys_%29.md): Returns a dictionary containing details about a node.
- [subnodeNamesAndReturnError:](subnodenames%28%29.md): Returns the names of subnodes for the node.
- [unreachableSubnodeNamesAndReturnError:](unreachablesubnodenames%28%29.md): Returns an array of the subnodes of a given node that are currently unreachable.
