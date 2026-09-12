> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlist/init(markerformat:options:startingitemnumber:)](https://developer.apple.com/documentation/appkit/nstextlist/init(markerformat:options:startingitemnumber:))

# init(markerFormat:options:startingItemNumber:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Returns a new text list with the format, options, and starting item number you provide.

## Declaration

```swift
init(markerFormat: NSTextList.MarkerFormat, options: NSTextList.Options = [], startingItemNumber: Int)
```

## Parameters

- `markerFormat`: One of the possible [NSTextList.MarkerFormat](markerformat-swift.struct.md) formats.
- `options`: One or more of the possible [NSTextList.Options](options.md) options.
- `startingItemNumber`: An integer that represents the stating item number.

## See Also

### Creating a text list

- [init(coder:)](init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [init(markerFormat:options:)](init%28markerformat_options_%29.md): Returns an initialized text list.

# initWithMarkerFormat:options:startingItemNumber: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Returns a new text list with the format, options, and starting item number you provide.

## Declaration

```objectivec
- (instancetype) initWithMarkerFormat:(NSTextListMarkerFormat) markerFormat options:(NSTextListOptions) options startingItemNumber:(NSInteger) startingItemNumber;
```

## Parameters

- `markerFormat`: One of the possible [NSTextListMarkerFormat](markerformat-swift.struct.md) formats.
- `options`: One or more of the possible [NSTextListOptions](options.md) options.
- `startingItemNumber`: An integer that represents the stating item number.

## See Also

### Creating a text list

- [initWithCoder:](init%28coder_%29.md): Initializes and returns a newly allocated text list item.
- [initWithMarkerFormat:options:](init%28markerformat_options_%29.md): Returns an initialized text list.
