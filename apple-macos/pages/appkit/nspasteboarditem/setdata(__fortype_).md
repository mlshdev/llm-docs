> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/setdata(_:fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/setdata(_:fortype:))

# setData(\_:forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a data object.

## Declaration

```swift
func setData(_ data: Data, forType type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `data`: An `NSData` object containing the value for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the value for a specified type as a string.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.

# setData:forType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a data object.

## Declaration

```objectivec
- (BOOL) setData:(NSData *) data forType:(NSPasteboardType) type;
```

## Parameters

- `data`: An `NSData` object containing the value for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setString:forType:](setstring%28__fortype_%29.md): Sets the value for a specified type as a string.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.
