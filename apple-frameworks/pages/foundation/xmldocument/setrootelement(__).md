> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/xmldocument/setrootelement(_:)](https://developer.apple.com/documentation/foundation/xmldocument/setrootelement(_:))

# setRootElement(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set the root element of the receiver.

## Declaration

```swift
func setRootElement(_ root: XMLElement)
```

## Parameters

- `root`: An [XMLNode](../xmlnode.md) object that is to be the root element.

<a id="Discussion"></a>

## Discussion

As a side effect, this method removes all other children, including `NSXMLNode` objects representing comments and processing-instructions.

## See Also

### Managing the Root Element

- [rootElement()](rootelement%28%29.md): Returns the root element of the receiver.

# setRootElement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set the root element of the receiver.

## Declaration

```objectivec
- (void) setRootElement:(NSXMLElement *) root;
```

## Parameters

- `root`: An [NSXMLNode](../xmlnode.md) object that is to be the root element.

<a id="Discussion"></a>

## Discussion

As a side effect, this method removes all other children, including `NSXMLNode` objects representing comments and processing-instructions.

## See Also

### Managing the Root Element

- [rootElement](rootelement%28%29.md): Returns the root element of the receiver.
