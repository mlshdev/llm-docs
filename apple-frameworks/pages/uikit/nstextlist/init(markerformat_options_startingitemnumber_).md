> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlist/init(markerformat:options:startingitemnumber:)](https://developer.apple.com/documentation/uikit/nstextlist/init(markerformat:options:startingitemnumber:))

# init(markerFormat:options:startingItemNumber:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

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
