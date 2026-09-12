> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/string(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/string(fortype:))

# string(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a string.

## Declaration

```swift
func string(forType type: NSPasteboard.PasteboardType) -> String?
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as a string.

## See Also

### Getting values

- [data(forType:)](data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.

# stringForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a string.

## Declaration

```objectivec
- (NSString *) stringForType:(NSPasteboardType) type;
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as a string.

## See Also

### Getting values

- [dataForType:](data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.
