> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/init(coder:)](https://developer.apple.com/documentation/appkit/nstouchbaritem/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Initializes and returns a new item from a storyboard or nib file.

## Declaration

```swift
init?(coder: NSCoder)
```

## See Also

### Creating a bar item

- [init(identifier:)](init%28identifier_%29.md): Creates a new item with the specified identifier.
- [NSTouchBarItem.Identifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Initializes and returns a new item from a storyboard or nib file.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating a bar item

- [initWithIdentifier:](init%28identifier_%29.md): Creates a new item with the specified identifier.
- [NSTouchBarItemIdentifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.
