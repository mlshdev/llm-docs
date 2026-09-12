> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/setpropertylist(_:fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/setpropertylist(_:fortype:))

# setPropertyList(\_:forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a property list.

## Declaration

```swift
func setPropertyList(_ propertyList: Any, forType type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `propertyList`: A property list object containing the value for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the value for a specified type as a string.

# setPropertyList:forType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sets the value for a specified type as a property list.

## Declaration

```objectivec
- (BOOL) setPropertyList:(id) propertyList forType:(NSPasteboardType) type;
```

## Parameters

- `propertyList`: A property list object containing the value for the representation specified by `type`.
- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value was set successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Setting values

- [setData:forType:](setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setString:forType:](setstring%28__fortype_%29.md): Sets the value for a specified type as a string.
