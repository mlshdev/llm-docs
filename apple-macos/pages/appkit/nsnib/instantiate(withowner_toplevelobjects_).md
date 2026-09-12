> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnib/instantiate(withowner:toplevelobjects:)](https://developer.apple.com/documentation/appkit/nsnib/instantiate(withowner:toplevelobjects:))

# instantiate(withOwner:topLevelObjects:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Instantiates objects in the nib file with the specified owner.

## Declaration

```swift
func instantiate(withOwner owner: Any?, topLevelObjects: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> Bool
```

## Parameters

- `owner`: The object to set as the Nib’s owner (File’s Owner).
- `topLevelObjects`: On return, an array containing the top-level objects of the nib.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib is instantiated; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike legacy methods, the objects adhere to standard Cocoa memory management rules; it is necessary to keep a strong reference to the objects or the array to prevent the nib contents from being deallocated.

Outlets to top level objects should be strong references to demonstrate ownership and prevent deallocation.

# instantiateWithOwner:topLevelObjects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Instantiates objects in the nib file with the specified owner.

## Declaration

```objectivec
- (BOOL) instantiateWithOwner:(id) owner topLevelObjects:(NSArray **) topLevelObjects;
```

## Parameters

- `owner`: The object to set as the Nib’s owner (File’s Owner).
- `topLevelObjects`: On return, an array containing the top-level objects of the nib.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the nib is instantiated; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Unlike legacy methods, the objects adhere to standard Cocoa memory management rules; it is necessary to keep a strong reference to the objects or the array to prevent the nib contents from being deallocated.

Outlets to top level objects should be strong references to demonstrate ownership and prevent deallocation.

## See Also

### Instantiating a Nib

- [instantiateNibWithOwner:topLevelObjects:](instantiatenibwithowner_toplevelobjects_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and set of top level objects.
- [instantiateNibWithExternalNameTable:](instantiatenibwithexternalnametable_.md): Deprecated. Unarchives and instantiates the in-memory contents of the receiver’s nib file, creating a distinct object tree and top level objects.
