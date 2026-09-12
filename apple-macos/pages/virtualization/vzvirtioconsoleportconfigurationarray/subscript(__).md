> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioconsoleportconfigurationarray/subscript(_:)](https://developer.apple.com/documentation/virtualization/vzvirtioconsoleportconfigurationarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Subscript  
**Availability:** macOS 13.0+

Returns the Virtio console port configuration as the specified index.

## Declaration

```swift
subscript(portIndex: Int) -> VZVirtioConsolePortConfiguration? { get set }
```

## Parameters

- `portIndex`: The index of the configuration to retrieve.

<a id="return-value"></a>

## Return Value

The [VZVirtioConsolePortConfiguration](../vzvirtioconsoleportconfiguration.md), or nil is the index exceeds the number of configurations in the array.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns the Virtio console port configuration as the specified index.

## Declaration

```objectivec
- (VZVirtioConsolePortConfiguration *) objectAtIndexedSubscript:(NSUInteger) portIndex;
```

## Parameters

- `portIndex`: The index of the configuration to retrieve.

<a id="return-value"></a>

## Return Value

The [VZVirtioConsolePortConfiguration](../vzvirtioconsoleportconfiguration.md), or nil is the index exceeds the number of configurations in the array.
