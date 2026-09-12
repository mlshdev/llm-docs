> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportarray/subscript(_:)](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Subscript  
**Availability:** macOS 13.0+

Returns the Virtio console port at the specified index.

## Declaration

```swift
subscript(portIndex: Int) -> VZVirtioConsolePort? { get }
```

## Parameters

- `portIndex`: The index of the port to return, if present.

<a id="return-value"></a>

## Return Value

A [VZVirtioConsolePort](../vzvirtioconsoleport.md) port, or `nil` if the index is outside the bounds of the array.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns the Virtio console port at the specified index.

## Declaration

```objectivec
- (VZVirtioConsolePort *) objectAtIndexedSubscript:(NSUInteger) portIndex;
```

## Parameters

- `portIndex`: The index of the port to return, if present.

<a id="return-value"></a>

## Return Value

A [VZVirtioConsolePort](../vzvirtioconsoleport.md) port, or `nil` if the index is outside the bounds of the array.
