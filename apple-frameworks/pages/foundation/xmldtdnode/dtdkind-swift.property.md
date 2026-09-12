> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldtdnode/dtdkind-swift.property](https://developer.apple.com/documentation/foundation/xmldtdnode/dtdkind-swift.property)

# dtdKind (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the receiver’s DTD kind.

## Declaration

```swift
var dtdKind: XMLDTDNode.DTDKind { get set }
```

<a id="return-value"></a>

## Return Value

The receiver’s DTD kind. See Constants for a list of valid NSXMLDTDNodeKind constants.

<a id="Discussion"></a>

## Discussion

The DTD kind is distinct from a `NSXMLDTDNode` object’s node kind (returned by the `NSXMLNode` [kind](../xmlnode/kind-swift.property.md) method).

# DTDKind (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the receiver’s DTD kind.

## Declaration

```objectivec
@property NSXMLDTDNodeKind DTDKind;
```

<a id="return-value"></a>

## Return Value

The receiver’s DTD kind. See Constants for a list of valid NSXMLDTDNodeKind constants.

<a id="Discussion"></a>

## Discussion

The DTD kind is distinct from a `NSXMLDTDNode` object’s node kind (returned by the `NSXMLNode` [kind](../xmlnode/kind-swift.property.md) method).
