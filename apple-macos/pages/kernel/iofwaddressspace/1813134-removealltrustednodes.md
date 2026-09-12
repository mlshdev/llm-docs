> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwaddressspace/1813134-removealltrustednodes](https://developer.apple.com/documentation/kernel/iofwaddressspace/1813134-removealltrustednodes)

# removeAllTrustedNodes

**Interface language:** Objective-C

**Framework:** Kernel

Remove all trusted nodes.

## Declaration

```objectivec
inline void removeAllTrustedNodes(
 void ) 
```

<a id="return_value"></a>

## Return Value

none

## See Also

### Miscellaneous

- [activate](1812970-activate.md): Address space is ready for handling requests.
- [addTrustedNode](1812980-addtrustednode.md): Add a trusted node.
- [contains](1812994-contains.md): returns number of bytes starting at addr in this space
- [deactivate](1813008-deactivate.md): Address space request handler is disabled.
- [doLock](1813019-dolock.md): A method for processing a lock request.
- [doRead](1813035-doread.md): An abstract method for processing an address space read request
- [doWrite](1813050-dowrite.md): An abstract method for processing an address space write request
- [intersects](1813068-intersects.md): Checks this address space intersects with the given address range. Currently only supports IOFWPsuedoAddressSpaces.
- [isExclusive](1813086-isexclusive.md): Checks if an address space wants exclusive control of its address range
- [isTrustedNode](1813105-istrustednode.md): returns true if the node is added as a trusted node
- [removeTrustedNode](1813152-removetrustednode.md): Remove a trusted node.
- [setExclusive](1813180-setexclusive.md): Sets if this address space requires exclusive control of its address range. Exclusivity should be set before an address space is activated.
