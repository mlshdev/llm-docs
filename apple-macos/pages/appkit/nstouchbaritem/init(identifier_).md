> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouchbaritem/init(identifier:)](https://developer.apple.com/documentation/appkit/nstouchbaritem/init(identifier:))

# init(identifier:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a new item with the specified identifier.

## Declaration

```swift
init(identifier: NSTouchBarItem.Identifier)
```

<a id="Discussion"></a>

## Discussion

The designated initializer. The identifier must be globally unique for every item, except for space items.

## See Also

### Creating a bar item

- [NSTouchBarItem.Identifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.
- [init(coder:)](init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.

# initWithIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.12.2+

Creates a new item with the specified identifier.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSTouchBarItemIdentifier) identifier;
```

<a id="Discussion"></a>

## Discussion

The designated initializer. The identifier must be globally unique for every item, except for space items.

## See Also

### Creating a bar item

- [NSTouchBarItemIdentifier](identifier-swift.struct.md): An identifier for an item in the Touch Bar.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns a new item from a storyboard or nib file.
