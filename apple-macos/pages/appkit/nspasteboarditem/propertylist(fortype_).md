> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/propertylist(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/propertylist(fortype:))

# propertyList(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a property list.

## Declaration

```swift
func propertyList(forType type: NSPasteboard.PasteboardType) -> Any?
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as a property list.

## See Also

### Getting values

- [data(forType:)](data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [string(forType:)](string%28fortype_%29.md): Returns the value for the specified type as a string.

# propertyListForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a property list.

## Declaration

```objectivec
- (id) propertyListForType:(NSPasteboardType) type;
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as a property list.

## See Also

### Getting values

- [dataForType:](data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [stringForType:](string%28fortype_%29.md): Returns the value for the specified type as a string.
