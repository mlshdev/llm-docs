> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstreenode/sort(with:recursively:)](https://developer.apple.com/documentation/appkit/nstreenode/sort(with:recursively:))

# sort(with:recursively:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sorts the receiver’s subtree using the values of the represented objects with the specified sort descriptors.

## Declaration

```swift
func sort(with sortDescriptors: [NSSortDescriptor], recursively: Bool)
```

## Parameters

- `sortDescriptors`: Array of sort descriptors specifying how to sort the represented objects.
- `recursively`: A Boolean that specifies whether the child nodes should be sorted recursively.

<a id="Discussion"></a>

## Discussion

All the represented objects in the child nodes must be key-value coding compliant for the keys specified in the sort descriptors.

# sortWithSortDescriptors:recursively: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sorts the receiver’s subtree using the values of the represented objects with the specified sort descriptors.

## Declaration

```objectivec
- (void) sortWithSortDescriptors:(NSArray<NSSortDescriptor *> *) sortDescriptors recursively:(BOOL) recursively;
```

## Parameters

- `sortDescriptors`: Array of sort descriptors specifying how to sort the represented objects.
- `recursively`: A Boolean that specifies whether the child nodes should be sorted recursively.

<a id="Discussion"></a>

## Discussion

All the represented objects in the child nodes must be key-value coding compliant for the keys specified in the sort descriptors.
