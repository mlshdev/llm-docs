> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem/data(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboarditem/data(fortype:))

# data(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a data object.

## Declaration

```swift
func data(forType type: NSPasteboard.PasteboardType) -> Data?
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as an `NSData` object.

## See Also

### Getting values

- [string(forType:)](string%28fortype_%29.md): Returns the value for the specified type as a string.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.

# dataForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the value for the specified type as a data object.

## Declaration

```objectivec
- (NSData *) dataForType:(NSPasteboardType) type;
```

## Parameters

- `type`: A uniform type identifier string.

<a id="return-value"></a>

## Return Value

The value for the specified type as an `NSData` object.

## See Also

### Getting values

- [stringForType:](string%28fortype_%29.md): Returns the value for the specified type as a string.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.
