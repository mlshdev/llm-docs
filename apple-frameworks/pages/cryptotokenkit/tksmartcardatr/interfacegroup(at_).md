> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup(at:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup(at:))

# interfaceGroup(at:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the interface group at the specified index.

## Declaration

```swift
func interfaceGroup(at index: Int) -> TKSmartCardATR.InterfaceGroup?
```

## Parameters

- `index`: The index of the desired interface group.

  > **Important**

  >  Interface group indexes start at `1`, as specified by ISO 7816-3.

<a id="return-value"></a>

## Return Value

The interface group at the specified index, or `nil` if not present.

## See Also

### Retrieving Interface Groups

- [interfaceGroup(for:)](interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.
- [TKSmartCardATR.InterfaceGroup](interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).

# interfaceGroupAtIndex: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the interface group at the specified index.

## Declaration

```objectivec
- (TKSmartCardATRInterfaceGroup *) interfaceGroupAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the desired interface group.

  > **Important**

  >  Interface group indexes start at `1`, as specified by ISO 7816-3.

<a id="return-value"></a>

## Return Value

The interface group at the specified index, or `nil` if not present.

## See Also

### Retrieving Interface Groups

- [interfaceGroupForProtocol:](interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.
- [TKSmartCardATRInterfaceGroup](interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).
