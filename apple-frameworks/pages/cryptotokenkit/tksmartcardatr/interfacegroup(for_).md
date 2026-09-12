> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup(for:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup(for:))

# interfaceGroup(for:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the interface group with the specified protocol.

## Declaration

```swift
func interfaceGroup(for protocol: TKSmartCardProtocol) -> TKSmartCardATR.InterfaceGroup?
```

## Parameters

- `protocol`: The protocol used by the desired interface group.

<a id="return-value"></a>

## Return Value

The interface group with the specified protocol, or `nil` if none exists.

## See Also

### Retrieving Interface Groups

- [interfaceGroup(at:)](interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [TKSmartCardATR.InterfaceGroup](interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).

# interfaceGroupForProtocol: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the interface group with the specified protocol.

## Declaration

```objectivec
- (TKSmartCardATRInterfaceGroup *) interfaceGroupForProtocol:(TKSmartCardProtocol) protocol;
```

## Parameters

- `protocol`: The protocol used by the desired interface group.

<a id="return-value"></a>

## Return Value

The interface group with the specified protocol, or `nil` if none exists.

## See Also

### Retrieving Interface Groups

- [interfaceGroupAtIndex:](interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [TKSmartCardATRInterfaceGroup](interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).
