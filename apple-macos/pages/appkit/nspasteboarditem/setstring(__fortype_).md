> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/setstring(_:fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/setstring(_:fortype:))

# setString(\_:forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a string.

## Declaration

```swift
func setString(_ string: String, forType type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `string`: A string for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.

# setString:forType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a string.

## Declaration

```objectivec
- (BOOL) setString:(NSString *) string forType:(NSPasteboardType) type;
```

## Parameters

- `string`: A string for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setData:forType:](setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.
