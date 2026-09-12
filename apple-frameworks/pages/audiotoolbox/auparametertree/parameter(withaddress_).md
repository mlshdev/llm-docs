> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auparametertree/parameter(withaddress:)](https://developer.apple.com/documentation/audiotoolbox/auparametertree/parameter(withaddress:))

# parameter(withAddress:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Searches the tree for a parameter with a specific address.

## Declaration

```swift
func parameter(withAddress address: AUParameterAddress) -> AUParameter?
```

## Parameters

- `address`: The address with which to search the tree.

<a id="return-value"></a>

## Return Value

The parameter corresponding to the supplied address, or `nil` if no such parameter exists.

## See Also

### Obtaining Tree Parameters

- [parameter(withID:scope:element:)](parameter%28withid_scope_element_%29.md): Searches the tree for a specific version 2 audio unit parameter.

# parameterWithAddress: (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Searches the tree for a parameter with a specific address.

## Declaration

```objectivec
- (AUParameter *) parameterWithAddress:(AUParameterAddress) address;
```

## Parameters

- `address`: The address with which to search the tree.

<a id="return-value"></a>

## Return Value

The parameter corresponding to the supplied address, or `nil` if no such parameter exists.

## See Also

### Obtaining Tree Parameters

- [parameterWithID:scope:element:](parameter%28withid_scope_element_%29.md): Searches the tree for a specific version 2 audio unit parameter.
